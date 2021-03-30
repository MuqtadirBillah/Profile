import React from "react";


function Certificate(props){
    return(
        <div className="certificate">
            <div className="cerImg">
                <img src={props.imageSrc} alt={props.imageAlt} />
            </div>
            <div className="cerText">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Certificate;