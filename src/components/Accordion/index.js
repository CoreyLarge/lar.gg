import React, {useState, useRef} from "react";
import "./accordion.scss";
import Chevron from "./chevron";


function Accordion(props){

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active": "");
        setHeightState(setActive === "active" ? "0px": `${content.current.scrollHeight}px`);
        setRotateState(setActiveState === "active" ? "accordion_icon" : "accordion_icon rotate");
    }

    return(
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <h3 className="accordion_title">{props.title}</h3>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </button>

            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content">
                <div className="accordion_text" dangerouslySetInnerHTML={{__html: props.content}}>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
