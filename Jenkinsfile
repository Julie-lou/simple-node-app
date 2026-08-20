// pipeline {
//     agent any

//     stages {

//         stage('Install dependencies') {
//             steps {
//                 sh 'npm ci'
//             }
//         }

//         stage('Run tests') {
//             steps {
//                 sh 'npm test'
//             }
//         }

//         stage('Build Docker image') {
//             steps {
//                 sh 'docker build -t simple-node-app-pr-test .'
//             }
//         }
//     }

//     post {
//         success {
//             echo 'PR validation PASSED'
//         }

//         failure {
//             echo 'PR validation FAILED'
//         }
//     }
// }
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
    }
}