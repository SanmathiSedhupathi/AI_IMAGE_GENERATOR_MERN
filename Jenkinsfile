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

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  MONGODB_URL: "mongodb+srv://sanmathisedhupathi2004:08-Sep-2004@sanmathi22isr045.w5x9j5u.mongodb.net/?retryWrites=true&w=majority&appName=sanmathi22ISR045"
  CLOUDINARY_CLOUD_NAME: "degp5o85d"
  CLOUDINARY_API_KEY: "429586181836363"
  CLOUDINARY_API_SECRET: "G80mJvQnzvf1kQAlhy5bJ6qH2tM"
  CLIENT_ORIGIN: "http://localhost:3000"
  HUGGINGFACE_API_TOKEN: "hf_MMpLEsBGDhymaEoTKFEjzVbrxjdKxVkToHx"
  OPENAI_API_KEY: "your_openai_api_key"
EOF

                cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ai-server
  template:
    metadata:
      labels:
        app: ai-server
    spec:
      containers:
        - name: ai-server
          image: ${DOCKERHUB_USERNAME}/ai-image-server:latest
          ports:
            - containerPort: 8081
          envFrom:
            - secretRef:
                name: app-secrets
---
apiVersion: v1
kind: Service
metadata:
  name: ai-server
spec:
  selector:
    app: ai-server
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081
  type: NodePort
EOF

                cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-client
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ai-client
  template:
    metadata:
      labels:
        app: ai-client
    spec:
      containers:
        - name: ai-client
          image: ${DOCKERHUB_USERNAME}/ai-image-client:latest
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: ai-client
spec:
  selector:
    app: ai-client
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 80
  type: NodePort
EOF
                """
            }
        }
    }

    post {
        success {
            emailext (
                subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Build succeeded!

Kubernetes deployments are updated.
Check it here: ${env.BUILD_URL}""",
                to: "sanmathisedhupathi2004@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "❌ FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Build failed.

Check it here: ${env.BUILD_URL}""",
                to: "sanmathisedhupathi2004@gmail.com"
            )
        }
    }
}
