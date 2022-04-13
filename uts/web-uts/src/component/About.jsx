import React from "react";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About</h1>
                        <p className="lead">
                            Nama: Tasya Rachmah Sakinah.</p>
                        <p className="lead">Kelas: TI-3D</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="300px" width="200px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;