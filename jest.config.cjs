module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    testMatch: [
        '**/tests/unit/**/*.spec.[jt]s?(x)',
    ],
    testEnvironment: 'jsdom',
}
