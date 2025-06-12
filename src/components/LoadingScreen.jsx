//import react hooks
//useState add and updates state on any change
//useEffect 
import { useEffect, useState } from "react";

//execute callback function "onComplete" once loading effect finishes 
export const LoadingScreen = ({ onComplete }) => {
    
    //make typewriting effect happen
    //create a state that will keep track of text
    //text is equal to the initial state value in useState("")
    //setText updates the text and renders it 
    const [text, setText] = useState("")
    
    //full text we want/end state
    const fullText = "Welcome"

    //typewriting effect starts when component mounts
    //run this at a certain interval
    useEffect(() => {
        //keep track of letter
        let index = 0;
        
        //update text with substring of fullText from current to index
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            //increment index
            index++;
            
            //stop interval at full length
            if (index > fullText.length) {
                //stops interval timer
                clearInterval(interval);
                //call onComplete after a 1000ms delay 
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
            //100 is time between intervals, time it takes to update and display text
        }, 100);
        //clears interval when component unmounts or useEffect re-runs preventing memory leaks, otherwise interval timers will keep runnning
        return () => clearInterval(interval);
        //once completed execute callback
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            {/* display the text {text} */}
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
            
            {/* <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

                </div>
            </div> */}
        </div>
    );
}