import React from "react";
import EduCard from "./EduCard";


function Education(){
    return(
        <div className="educationDiv container"  id="education">
            <h1>Education</h1>
            <div className="row justify-content-md-center">
                <EduCard title="Iqra University" date="2018-Present" description="Student of Bachelor's of Computer Science" />
                <EduCard title="Govt. Degree College" date="2016-2018" description="Completed Intermediate in Pre-Engineering" />
                <EduCard title="Usman Public School" date="2016" description="Completed Matric Computer Science from Usman Public School" />
            </div>
        </div>
    );
}

export default Education;