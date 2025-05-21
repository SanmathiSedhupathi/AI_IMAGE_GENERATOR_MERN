pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'sanmathisedhupathi'
        DOCKERHUB_PASSWORD = '08-Sep-2004'
    }

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/SanmathiSedhupathi/AI_IMAGE_GENERATOR_MERN.git', branch: 'main'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh "docker build -t ${DOCKERHUB_USERNAME}/ai-image-server:latest ./server"
                sh "docker build -t ${DOCKERHUB_USERNAME}/ai-image-client:latest ./client"
            }
        }

        stage('Push Docker Images') {
            steps {
                sh """
                    echo "${DOCKERHUB_PASSWORD}" | docker login -u "${DOCKERHUB_USERNAME}" --password-stdin
                    docker push ${DOCKERHUB_USERNAME}/ai-image-server:latest
                    docker push ${DOCKERHUB_USERNAME}/ai-image-client:latest
                """
            }
        }

        stage('Deploy Containers') {
            steps {
                sh """
                    docker rm -f ai-server || true
                    docker rm -f ai-client || true

                    docker run -d --name ai-server -p 8081:8081 \\
                      -e MONGODB_URL="mongodb+srv://sanmathisedhupathi2004:08-Sep-2004@sanmathi22isr045.w5x9j5u.mongodb.net/?retryWrites=true&w=majority&appName=sanmathi22ISR045" \\
                      -e CLOUDINARY_CLOUD_NAME="degp5o85d" \\
                      -e CLOUDINARY_API_KEY="429586181836363" \\
                      -e CLOUDINARY_API_SECRET="G80mJvQnzvf1kQAlhy5bJ6qH2tM" \\
                      -e CLIENT_ORIGIN="http://localhost:3000" \\
                      -e HUGGINGFACE_API_TOKEN="hf_MMpLEsBGDhymaEoTKFEjzVbrxjdKxVkToHx" \\
                      -e OPENAI_API_KEY="your_openai_api_key" \\
                      ${DOCKERHUB_USERNAME}/ai-image-server:latest

                    docker run -d --name ai-client -p 3000:80 ${DOCKERHUB_USERNAME}/ai-image-client:latest
                """
            }
        }
    }
}
