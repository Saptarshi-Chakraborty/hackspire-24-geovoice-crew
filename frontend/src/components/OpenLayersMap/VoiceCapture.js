import React, { useState } from 'react'

const VoiceCapture = () => {
    const [isCapturing, setIsCapturing] = useState(false)

    async function getMicPermission() {

        if (!window.navigator.mediaDevices) {
            console.log("Media devices are not supported")
        }

        try {
            let stream = await window.navigator.mediaDevices.getUserMedia({ audio: true })
            console.log(stream)
        } catch (error) {
            console.log(error)
        }

    }

    return (<div className='mt-2'>
        <h3 className='text-white '>Voice Capture</h3>
        {
            isCapturing && <div className='alert alert-success p-1'>Capturing audio...</div>
        }
        {
            !isCapturing && <div className='alert alert-danger p-1'>Not capturing audio...</div>
        }

        <div className='d-flex flex-row gap-3 justify-content-center'>
            <button className='btn btn-sm btn-success'>Start</button>
            <button className='btn btn-sm btn-danger'>Stop</button>
        </div>


    </div>)
}

export default VoiceCapture