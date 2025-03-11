pipeline {
    agent any

    parameters {
        string(name: 'IMAGE_TAG', defaultValue: 'latest', description: 'Enter the Docker image tag')
    }

    environment {
        DOCKER_IMAGE = 'newsmern'
        DOCKER_REPO = 'saideep12345'
    }

    stages {
        stage('Checkout Files') {
            steps {
                script {
                    sh 'ls'
                }
            }
        }

        stage('Docker Build and Run') {
            steps {
                script {
                    // Build the Docker image
                    sh """
                        docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} .
                    """

                    // Tag the Docker image
                    sh """
                        docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_REPO}/${DOCKER_IMAGE}:${IMAGE_TAG}
                    """

                    // Push the image to Docker Hub
                    sh """
                        docker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${IMAGE_TAG}
                    """
                }
            }
        }
    }
}
