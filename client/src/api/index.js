import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8081/api/",
});

export const GetPosts = async () => await API.get("/post");
export const CreatePost = async (data) => await API.post("/post", data);


export const GenerateImageFromPrompt = async (data) => {
 
  return await API.post("/generate-image/", data);
};