# 🧠 AI Image Generator (MERN Stack + Hugging Face Stable Diffusion)

A full-stack AI image generator web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and powered by Hugging Face's **Stable Diffusion API** to convert text prompts into images. Users can generate images, view them in a community feed, and share their creations.

## ✨ Features

- 🖼️ Text-to-image generation using **Hugging Face Stable Diffusion**
- 🌐 Community showcase to explore user-generated images
- 📤 Share creations with prompt descriptions
- ⚡ Fast and responsive UI with **Tailwind CSS**
- 🔒 Secure API key usage via `.env` variables

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS + Vite
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **AI API:** Hugging Face (Stable Diffusion Inference API)

## 📁 Project Structure

AI_IMAGE_GENERATOR_MERN/
-- ├── client/ # React frontend
-- │ ├── src/
- │ └── ...
- ├── server/ # Express backend
- │ ├── controllers/
- │ ├── routes/
- │ ├── models/
- │ └── ...
- ├── .env # Environment variables
- └── README.md

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SanmathiSedhupathi/AI_IMAGE_GENERATOR_MERN.git
cd AI_IMAGE_GENERATOR_MERN
```
### 2. Setup Backend (Server)
```bash
cd server
npm install
```

Create a .env file inside the server/ directory with:
```bash
MONGODB_URL=your_mongodb_connection_string
HUGGINGFACE_API_KEY=your_huggingface_api_key
```
Then start the server:
```bash
npm run dev
```
### 3. Setup Frontend (Client)
```bash
cd client
npm install
npm run dev
```
### 4. Run the Application
Open your browser and go to: http://localhost:5173


### 📌 Notes
- The Hugging Face API is used to send text prompts and receive generated images from Stable Diffusion.

- Ensure your API key from Hugging Face has access to the runwayml/stable-diffusion-v1-5 or equivalent inference endpoint.

### 📄 License
- This project is licensed under the MIT License.

### 🙋‍♀️ Author
Sanmathi Sedhupathi
Software Devloper | GitHub
