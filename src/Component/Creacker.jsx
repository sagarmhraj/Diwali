import React from 'react';
import boom from '../images/booom.mp4';

function Creacker() {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            >
                <source src='https://videos.pexels.com/video-files/4966235/4966235-hd_1920_1080_30fps.mp4' type="video/mp4" />
            </video>
        </div>
    );
}

export default Creacker;
