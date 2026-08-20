pipeline {
    agent any

    stages {
<<<<<<< HEAD

=======
>>>>>>> origin/main
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
<<<<<<< HEAD

        stage('Report to GitHub') {
            steps {
                step([
                    $class: 'GitHubCommitStatusSetter',
                    contextSource: [
                        $class: 'ManuallyEnteredCommitContextSource',
                        context: 'Jenkins PR Validation'
                    ],
                    statusResultSource: [
                        $class: 'ConditionalStatusResultSource',
                        results: [
                            [
                                $class: 'BetterThanOrEqualBuildResult',
                                message: '',
                                result: 'SUCCESS',
                                state: 'SUCCESS'
                            ]
                        ]
                    ]
                ])
            }
        }
=======
>>>>>>> origin/main
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