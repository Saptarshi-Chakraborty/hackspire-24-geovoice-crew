import { GoogleAIFileManager } from "@google/generative-ai/server";

async function uploadAudio(req, res, next) {
    const file = req.file;
    if (!file) {
        const error = new Error('Please attach a file');
        error.statusCode = 400;
        return next(error);
    }

    //get the file name
    let fileName = file.filename;
    console.log(fileName);

    fileName = "uploads/" + fileName;
    // Upload the file.
    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);
    const audioFile = await fileManager.uploadFile(fileName, {
        mimeType: "audio/mp3",
    });
    console.log(audioFile);

    res.json({ status: "success", ...audioFile });
}

export default uploadAudio;
