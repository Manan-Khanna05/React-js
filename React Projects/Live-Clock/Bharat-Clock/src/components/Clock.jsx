import { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div className="Clock">
        <h2>This is the Current Date & time : {date.toLocaleString()}</h2>
    </div>
} 

export default Clock;