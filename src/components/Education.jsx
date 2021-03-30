import React from "react";


function Education(){
    return(
        <div className="educationDiv container"  id="education">
            <h1>Education</h1>
            <div className="row justify-content-md-center">
                <div className="eduLeftDiv col-lg-4 col-md-6 col-sm-12">
                    <div className="card eduCard" >
                        <div class="card-body">
                            <h5 class="card-title">Iqra University</h5>
                            <h6 class="card-subtitle mb-2 text-muted">2018-Present</h6>
                            <p class="card-text">Student of Bachelor's of Computer Science</p>
                        </div>
                    </div>
                </div>
                <div className="eduMiddleDiv col-lg-4 col-md-6 col-sm-12">
                    <div className="card eduCard" >
                        <div class="card-body">
                            <h5 class="card-title">Govt. Degree College</h5>
                            <h6 class="card-subtitle mb-2 text-muted">2016-2018</h6>
                            <p class="card-text">Complete Intermediate in Pre-Engineering</p>
                        </div>
                    </div>

                </div>
                <div className="eduRightDiv col-lg-4 col-md-6 col-sm-12">
                    <div className="card eduCard" >
                        <div class="card-body">
                            <h5 class="card-title">Usman Public School</h5>
                            <h6 class="card-subtitle mb-2 text-muted">2016</h6>
                            <p class="card-text">Matric Computer Science from Usman Public School</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;