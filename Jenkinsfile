pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t simple-node-app-pr-test .'
            }
        }
    }

    post {
        success {
            echo 'PR validation PASSED'
        }

        failure {
            echo 'PR validation FAILED'
        }
    }
}