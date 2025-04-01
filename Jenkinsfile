pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'application-test'
        DOCKER_REPO = 'saisanjay8757'
        MANIFEST_REPO = 'https://github.com/saisanjay8757/Application-test.git' // Git repo for manifests
        MANIFEST_BRANCH = 'main' // Change if using a different branch
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    sh 'ls'
                }
            }
        }

        stage('Get Git Commit ID') {
            steps {
                script {
                    env.IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    echo "Using Git commit ID as tag: ${env.IMAGE_TAG}"
                }
            }
        }

        stage('Docker Login') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-token', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                            echo '${DOCKER_PASSWORD}' | docker login -u '${DOCKER_USERNAME}' --password-stdin
                        """
                    }
                }
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    sh """
                        set -ex
                        if [ ! -d client ]; then echo "Error: client directory not found"; exit 1; fi
                        cd client
                        ls
                        docker build --no-cache -t ${DOCKER_IMAGE}:${IMAGE_TAG} .
                        docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_REPO}/${DOCKER_IMAGE}:${IMAGE_TAG}
                        docker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${IMAGE_TAG}
                    """
                }
            }
        }

    }
}
