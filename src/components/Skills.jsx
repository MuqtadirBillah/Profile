import React from "react"

function Skills(){
    return(
        <div className="skillsDiv"  id="skills">
            <h1>Dominant Skills</h1>
            <div className="row justify-content-md-center">
                <div className="skillsCardDiv col-lg-3 col-md-6 col-sm-12">
                    <div className="card skillsCard" >
                        <div class="card-body">
                            <img src="images/mongodb.png" className="skillsImg" alt="" />
                            <h5 class="card-title">Mongodb</h5>
                            <p class="card-text">NoSQL Database for saving data</p>
                        </div>
                    </div>
                </div>
                <div className="skillsCardDiv col-lg-3 col-md-6 col-sm-12">
                    <div className="card skillsCard" >
                        <div class="card-body">
                            <img src="images/express.png" className="skillsImg" alt="" />
                            <h5 class="card-title">Express.JS</h5>
                            <p class="card-text">Back end Web App framework for Node.js</p>
                        </div>
                    </div>
                </div>
                <div className="skillsCardDiv col-lg-3 col-md-6 col-sm-12">
                    <div className="card skillsCard" >
                        <div class="card-body">
                            <img src="images/react.png" className="skillsImg" alt="" />
                            <h5 class="card-title">React.JS</h5>
                            <p class="card-text">Front end, JavaScript library for building UI</p>
                        </div>
                    </div>
                </div>
                <div className="skillsCardDiv col-lg-3 col-md-6 col-sm-12">
                    <div className="card skillsCard" >
                        <div class="card-body">
                            <img src="images/node.png" className="skillsImg" alt="" />
                            <h5 class="card-title">Node.JS</h5>
                            <p class="card-text">Back end JavaScript runtime environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;