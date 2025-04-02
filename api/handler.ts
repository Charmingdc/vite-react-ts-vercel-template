import { VercelRequest, VercelResponse } from "@vercel/node";

// accessing demo api key from .env file
const demoApiKey = process.env.DEMO_API_KEY

const handler = (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const { data } = req.body || {};
   
    if (!data) {
      return res.status(400).json({ error: "Missing 'data' in request body" });
    }
    return res.status(200).json({ message: `You sent: ${data} and demo api key is ${demoApiKey}` });
  } 
  
  if (req.method === "GET") {
    return res.status(200).json({ message: `Hello from your serverless function! Your demo api key: ${demoApiKey}` });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

export default handler;