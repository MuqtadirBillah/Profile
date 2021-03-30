import React from "react";


function EduCard(props){
    return(
        <div className="eduLeftDiv col-lg-4 col-md-6 col-sm-12">
            <div className="card eduCard" >
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.date}</h6>
                    <p class="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default EduCard;