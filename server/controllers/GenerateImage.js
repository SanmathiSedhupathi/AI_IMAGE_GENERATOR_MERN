import axios from "axios";
import * as dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    console.log("TOKEN USED:", process.env.HUGGINGFACE_API_TOKEN);
    const { inputs } = req.body;
    console.log("Generating image with prompt:", inputs);

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
      { inputs },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        
      }
    );
    const base64Image = response.data.generated_image || response.data;

// You can then send back with proper mime type, e.g. image/png
res.status(200).json({
  photoUrl: `data:image/png;base64,${base64Image}`,
});
    
  } catch (error) {
    console.error("Hugging Face API error:", error.response?.data || error.message);
    next(
      createError(
        error.response?.status || 500,
        error.response?.data?.error || error.message
      )
    );
  }
};
