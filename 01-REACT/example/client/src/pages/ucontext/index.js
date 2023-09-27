import React, { useContext, useEffect}from 'react';
import { colorContext } from '../../App';
import "./useContext.css";

function Ucontext(props) {
    const [color, setColor] = useContext(colorContext);

    const changeColor = () => {
        setColor(!color);
    }
    
    return (
        <div className={'effect-page'}>
            <div className={'container'}>
                <h2>Use Context</h2>
                <p></p>
                <button className={'font-button'} onClick={changeColor}>Font Color</button>
            </div>
        </div>
    );
}

export default Ucontext;