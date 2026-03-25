import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

async function testModels() {
  const models = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-3.1-flash-lite-preview"];
  for (const modelName of models) {
    console.log(`Testing ${modelName}...`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Say 'OK'");
      console.log(`SUCCESS: ${modelName} -> ${result.response.text()}`);
    } catch (error) {
      console.log(`FAILURE: ${modelName} -> ${error.message}`);
    }
  }
}

testModels();
