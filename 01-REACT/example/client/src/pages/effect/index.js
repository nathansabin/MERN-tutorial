import React, {useState, useEffect} from 'react';
import './useEffect.css';
import axios from 'axios';

function Effect(props) {
    const [joke, setJoke] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://icanhazdadjoke.com/slack");
                const jokeText = response.data.attachments[0].fallback;
                setJoke(jokeText);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); 

    return (
        <div className={'effect-page'}>
            <div className={'container'}>
                <h2>Use Effect</h2>
                <p></p>
                <h3>{joke}</h3>
            </div>
        </div>
    );
}

export default Effect;