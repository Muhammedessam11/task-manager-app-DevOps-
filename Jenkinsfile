pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('Dockerhub')
        DOCKER_IMAGE = 'mohamedessam1911/task-manager-app'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('Start Services') {
            steps {
                // Start MySQL using Docker Compose
                sh 'docker-compose up -d'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'cd backend && npm test --detectOpenHandles'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'DOCKERHUB_CREDENTIALS', variable: 'DOCKERHUB_PASSWORD')]) {
                    sh 'docker login -u my-username -p $DOCKERHUB_PASSWORD'
                    sh 'docker push my-app'
                }
            }
        }
    }
}
