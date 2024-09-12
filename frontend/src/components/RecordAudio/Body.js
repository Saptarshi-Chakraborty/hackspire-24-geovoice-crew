"use client";

import { useEffect, useRef, useState } from 'react';

const RecordAudioBody = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);

    useEffect(() => {
        // Get user's audio input
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                // Set up MediaRecorder
                mediaRecorderRef.current = new MediaRecorder(stream);

                // Start recording when 'isRecording' is true
                mediaRecorderRef.current.ondataavailable = (e) => {
                    setAudioBlob(e.data);
                };

                // Stop recording when 'isRecording' is false
                mediaRecorderRef.current.onstop = () => {
                    stream.getTracks().forEach(track => track.stop());
                };
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
            });

        return () => {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stop();
            }
        };
    }, []);

    // Start recording
    const startRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.start();
            setIsRecording(true);
        }
    };

    // Stop recording
    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };


    // Download the recorded audio
    const downloadAudio = () => {
        if (audioBlob) {
            const url = URL.createObjectURL(audioBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recording.wav'; // You can change the filename here
            link.click();
            URL.revokeObjectURL(url);
        }
    }


    return (
        <main className='container my-3'>
            <h1>Record Audio</h1>
            <div>
                <button onClick={startRecording} disabled={isRecording}>
                    Start Recording
                </button>
                <button onClick={stopRecording} disabled={!isRecording}>
                    Stop Recording
                </button>
                <button onClick={downloadAudio} disabled={!audioBlob}>
                    Download Audio
                </button>
                {/* Display status */}
                <p>Recording: {isRecording ? 'On' : 'Off'}</p>
            </div>
        </main>
    )
}

export default RecordAudioBody