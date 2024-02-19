import React, { useState, useRef } from 'react';
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

function PortfolioVideo({ src, setImageCount, backgroundColor, playPauseColor }) {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            if (play) {
                video.pause();
            } else {
                video.play();
            }
            setPlay(!play);
        }
    }

    const handleVideoLoaded = () => {
        setImageCount(prevCount => prevCount + 1);
    }

    return (
        <div style={{ backgroundColor: backgroundColor, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8rem', position: 'relative' }}>
            <div onClick={togglePlay} style={{position: 'absolute', top: '1rem', right: '9rem', zIndex:'999', cursor:'pointer' }}>
                { !play ?
                <IoPlayCircleOutline color={playPauseColor} fontSize={'3rem'}/> :
                <IoPauseCircleOutline color={playPauseColor} fontSize={'3rem'}/>
                }
            </div>
            <video
                ref={videoRef}
                src={src}
                style={{ width: '100%', display: 'inline-block' }}
                onLoadedData={handleVideoLoaded}
            >
            </video>
        </div>
    );
}

export default PortfolioVideo;
