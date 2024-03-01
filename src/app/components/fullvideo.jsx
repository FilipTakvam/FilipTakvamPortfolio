import React, { useState, useRef } from 'react';

function FullscreenVideo({ src, setImageCount }) {

    const videoRef = useRef(null);

    const handleVideoLoaded = () => {
        setImageCount(prevCount => prevCount + 1);
        console.log("Loaded");
    }

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                type='video/mp4'
                ref={videoRef}
                src={`${src}#t=0.001`}
                style={{ width: '100%', display: 'inline-block' }}
                onLoadedData={handleVideoLoaded}
            >
            </video>
        </div>
    );
}

export default FullscreenVideo;
