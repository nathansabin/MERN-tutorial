import React, {useState, useEffect} from 'react';


const Selector = ({selection}) => {
    const [page, setPage] = useState(selection);
   
    const returnPage = () => {
        switch(page) {
            case "useEffect":
                console.log("switch");
                break;
                //return(<></>);
            case "useState":
                console.log("switch");
                break;
                // return(<></>);
            case "useContext":
                console.log("switch");
                break;
                //return(<></>);
        }
    }


    return (
        <>
           {returnPage()}
        </>
    );
};


export default Selector;