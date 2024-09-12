import PromptPrefix1 from '@/lib/prompts/prompt1';
import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Gemini = ({ possibleActions }) => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const tryGemini = async (e) => {
        e.preventDefault();

        let myPrompt = prompt.trim();
        if (myPrompt === "") {
            toast.error("Please enter a prompt");
            return;
        }
        console.log(`Prompt: ${myPrompt}`);
        myPrompt = PromptPrefix1(myPrompt);

        try {
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

            processAiResponse(response);

            setResponse(response);
            setLoading(false);

        } catch (error) {
            console.error(error);
            toast.error("An error occured. Please try again");
            setLoading(false);
        }
    }

    async function processAiResponse(responseText) {
        // console.log(responseText);
        // if it starts with ``` then remove it
        if (responseText.startsWith('```json')) {
            responseText = responseText.slice(7);
        }
        // if it ends with ``` then remove it
        if (responseText.endsWith('```')) {
            responseText = responseText.slice(0, -3);
        } 
        responseText = responseText.trim();

        let response = null;
        try {
            response = JSON.parse(responseText);
            console.log(response);
        } catch (error) {
            console.error(error);
            toast.error("An error occured. Please try again");
        }

        if (response && response.status === "error") {
            toast.error(response.message);
        }

        const parameters = response.parameters;
        const functionName = response.function;

        switch (functionName) {
            case "zoomIn":
                possibleActions[functionName](parameters.zoomLevel);
                break;
            case "zoomOut":
                possibleActions[functionName](parameters.zoomLevel);
                break;
            default:
                toast.error("Unknown function name");
                break;
        }


    }


    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    return (
        <div className='d-flex flex-column  w-100 gap-2 mt-3'>
            <textarea onChange={handleChange} className='form-control' placeholder='Enter your message here'></textarea>
            <button onClick={tryGemini} className='btn btn-primary' disabled={loading}>
                {
                    loading ? "Loading..." : "Send to AI"
                }
            </button>
        </div>
    )
}

export default Gemini