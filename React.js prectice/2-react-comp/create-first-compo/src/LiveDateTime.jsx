import { useState, useEffect } from 'react';

function LiveDateTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h3>Current Date & Time:</h3>
            <p>{currentTime.toLocaleDateString()}</p>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default LiveDateTime; 