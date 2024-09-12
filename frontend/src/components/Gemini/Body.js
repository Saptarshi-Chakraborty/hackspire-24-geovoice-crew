import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import PromptPrefix1 from '@/lib/prompts/prompt1';
import { toast } from 'react-toastify';

const GeminiBody = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [genAI, setGenAI] = useState(null);

    const tryGemini = async (e) => {
        e.preventDefault();

        let myPrompt = prompt.trim();
        if (myPrompt === "") {
            toast.error("Please enter a prompt");
            return;
        }
        console.log(`Prompt: ${myPrompt}`);
        myPrompt = PromptPrefix1(myPrompt);

        setLoading(true);
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                candidateCount: 1,
                temperature: 1.0,
                // responseMimeType: "application/json"
            },
        });

        const result = await model.generateContent(myPrompt);

        const response = result.response.text();
        console.log(response);

        setResponse(response);
        setLoading(false);

    }

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }


    return (
        <main clasu sName='container my-3'>
            <h1>Gemini AI</h1>

            <form onSubmit={tryGemini}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Enter your text</label>
                    <textarea onChange={handleChange} value={prompt} className="form-control border-3" id="text" rows="3" disabled={loading}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>Generate</button>

                {loading && <span className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </span>}

            </form>

            <div className="mt-3">
                <h2>Output</h2>
                <pre id="output" className="border-3 p-3" >{response}</pre>
            </div>
        </main>
    )
}

export default GeminiBody