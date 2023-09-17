import React, {useState}from 'react';

function State(props) {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    };

    const clearCount = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>UseState</h2>
            <p></p>
            <div>
                <h3>{count}</h3>
                <button onClick={addCount}>Add One</button>
                <button onClick ={clearCount}>Clear count</button>
            </div>
        </div>
    );
}

export default State;