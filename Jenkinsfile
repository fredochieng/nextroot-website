pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'nextroot-website'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/fredochieng/nextroot-website.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }
        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                sshagent(['a4c07b82-b27b-497b-ba6b-d15e38187ddf']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no root@185.202.223.221 << EOF
                        docker pull ${DOCKER_IMAGE}:latest
                        docker stop nextroot-website || true
                        docker rm nextroot-website || true
                        docker run -d -p 3000:3000 --name nextroot-website ${DOCKER_IMAGE}:latest
                        EOF
                    '''
                }
            }
        }
    }
    post {
        success {
            echo 'Deployed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
