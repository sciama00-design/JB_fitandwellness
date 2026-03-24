import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Manual loading of .env
const envPath = path.resolve('.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envLines = envContent.split('\n');
let API_KEY = "";
for (const line of envLines) {
  if (line.startsWith('VITE_GEMINI_API_KEY=')) {
    API_KEY = line.split('=')[1].trim().split(' #')[0]; // simple parsing
    break;
  }
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function testModels() {
  // Test both the stable one and the ones from the user list
  const models = ["gemini-1.5-flash", "gemini-2.0-flash-exp", "gemini-2.5-flash-lite", "gemini-3.1-flash-lite-preview"];
  for (const modelName of models) {
    console.log(`Testing ${modelName}...`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("OK");
      console.log(`SUCCESS: ${modelName} -> ${result.response.text().substring(0, 20)}`);
    } catch (error) {
      console.log(`FAILURE: ${modelName} -> ${error.message}`);
    }
  }
}

testModels();
