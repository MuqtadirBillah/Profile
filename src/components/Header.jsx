import React from "react";

function Header(){
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg nav-bg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"><b>MBMA</b></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><p>...</p></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#certification">Certification</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;