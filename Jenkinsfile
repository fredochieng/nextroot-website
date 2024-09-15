pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')   // DockerHub credentials ID
        SSH_CREDENTIALS = 'a4c07b82-b27b-497b-ba6b-d15e38187ddf' // SSH credentials ID
        DOCKER_IMAGE = 'codewithfredrick/nextroot-website'        // Docker image name
        PRODUCTION_SERVER = '185.202.223.221'                    // Production server IP
        PRODUCTION_USER = 'root'                                 // SSH user on production server
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Checkout the repository from a specific branch (e.g., 'main')
                    checkout([$class: 'GitSCM', 
                        branches: [[name: '*/main']],  // Replace 'main' with your branch name
                        userRemoteConfigs: [[
                            url: 'https://github.com/fredochieng/nextroot-website.git',
                            credentialsId: 'github-creds' // Ensure this matches your GitHub credentials ID
                        ]]
                    ])
                }
            }
        }
        
        stage('Build Vue Nuxt App') {
            steps {
                // Install dependencies and build the app
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "sudo docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }
        
        // stage('Push Docker Image to DockerHub') {
        //     steps {
        //         script {
        //             // Log in to DockerHub and push the image
        //             docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
        //                 sh "sudo docker push ${DOCKER_IMAGE}:latest"
        //             }
        //         }
        //     }
        // }
        
        stage('Deploy to Production') {
            steps {
                script {
                    // SSH into the production server and deploy the Docker container
                    sshagent([SSH_CREDENTIALS]) {
                        sh '''
                            ssh -o StrictHostKeyChecking=no root@185.202.223.221 << EOF
                            sudo docker pull codewithfredrick/nextroot-website:latest
                            sudo docker stop nextroot-website || true
                            sudo docker rm nextroot-website || true
                            sudo docker run -d -p 3000:3000 --name nextroot-website codewithfredrick/nextroot-website:latest
        EOF
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Deployment to production successful!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}

