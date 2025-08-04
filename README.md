# 🧠 AI Image Generator (MERN Stack + Hugging Face Stable Diffusion)

A full-stack AI image generator web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and powered by Hugging Face's **Stable Diffusion API** to convert text prompts into images. Users can generate images, view them in a community feed, and share their creations.

## ✨ Features

- 🖼️ Text-to-image generation using **Hugging Face Stable Diffusion 3.5**
- 🌐 Community showcase to explore user-generated images
- 📤 Share creations with prompt descriptions and author names
- ⚡ Modern UI with **Styled Components** and **Material-UI**
- 🔒 Secure API key usage via environment variables
- 📱 Responsive design for mobile and desktop
- 🔍 Search functionality to find posts by prompt or author
- 💾 Image storage using **Cloudinary**
- 📥 Download generated images

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Styled Components** - CSS-in-JS styling
- **Material-UI** - Component library
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **File Saver** - Download functionality
- **React Lazy Load Image** - Image optimization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Cloudinary** - Image storage and management
- **CORS** - Cross-origin resource sharing

### AI & External Services
- **Hugging Face API** - Stable Diffusion 3.5 model
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
AI_IMAGE_GENERATOR_MERN/
├── client/                          # React frontend
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── buttons/             # Button components
│   │   │   ├── cards/               # Card components
│   │   │   ├── form/                # Form components
│   │   │   └── Input/               # Input components
│   │   ├── pages/                   # Page components
│   │   ├── api/                     # API service functions
│   │   ├── utils/                   # Utility functions
│   │   ├── App.js                   # Main app component
│   │   └── index.js                 # Entry point
│   └── package.json
├── server/                          # Express backend
│   ├── controllers/                 # Route controllers
│   ├── models/                      # Database models
│   ├── routes/                      # API routes
│   ├── index.js                     # Server entry point
│   └── package.json
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Hugging Face API key
- Cloudinary account

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

Create a `.env` file inside the `server/` directory with:

```env
MONGODB_URL=your_mongodb_atlas_connection_string
HUGGINGFACE_API_TOKEN=your_huggingface_api_token
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the server:

```bash
npm start
```

The server will run on `http://localhost:8081`

### 3. Setup Frontend (Client)

```bash
cd client
npm install
```

Start the development server:

```bash
npm start
```

The client will run on `http://localhost:3000`

### 4. Access the Application

Open your browser and navigate to `http://localhost:3000`

## 🔧 Environment Variables

### Backend (.env in server directory)

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URL` | MongoDB Atlas connection string | Yes |
| `HUGGINGFACE_API_TOKEN` | Hugging Face API token | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes |

## 🚀 API Endpoints

### Image Generation
- `POST /api/generate-image/` - Generate image from text prompt

### Posts
- `GET /api/post` - Get all posts
- `POST /api/post` - Create new post

## 📱 Features Overview

### Home Page
- Browse community-generated images
- Search posts by prompt or author name
- Download images
- Responsive grid layout

### Create Post Page
- Generate images using AI prompts
- Preview generated images
- Share images with the community
- Form validation

## 🔒 Security Notes

- API keys are stored securely in environment variables
- CORS is configured for development
- Input validation on both frontend and backend
- Secure image upload to Cloudinary

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sanmathi Sethupathi**
- Software Developer
- GitHub: [@SanmathiSedhupathi](https://github.com/SanmathiSedhupathi)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- The application uses Hugging Face's Stable Diffusion 3.5 model for image generation
- Images are stored in Cloudinary for better performance and scalability
- The frontend uses a dark theme by default with styled-components
- All API calls are made through a centralized API service
- The application is fully responsive and works on mobile devices
