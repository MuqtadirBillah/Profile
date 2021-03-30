import React from "react"

function Skill(props){
    var imgSrc = "images/"+props.imgName;
    return(
        <div className="skillsCardDiv col-lg-3 col-md-6 col-sm-12">
            <div className="card skillsCard" >
                <div class="card-body">
                    <img src={imgSrc} className="skillsImg" alt="" />
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;