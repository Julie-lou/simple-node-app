pipeline {

    agent any

    environment {
        DOCKER_IMAGE = 'julielou/simple-node-app'
    }

    stages {

        stage('Show Build Information') {
            steps {
                echo "Branch: ${env.BRANCH_NAME}"
                echo "PR: ${env.CHANGE_ID}"
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
            sh 'docker build -t ${DOCKER_IMAGE}:pr-${CHANGE_ID} .'
            }
        }
        stage('Check Main') {
            when {
            branch 'main'
            }
            steps {
                echo "This is the MAIN branch"
                echo "Branch: ${env.BRANCH_NAME}"
            }
        }
    }
}