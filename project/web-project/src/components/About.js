import React from "react";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5" align="center">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About</h1>
                        <p className="lead">
                            Toko Peralatan Dapur.</p>
                        <p className="lead">Kelas: TI-3D</p>
                        <p className="lead">M. Ridho Ramadhan | Tasya Rachma Sakinah</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <img src="/assets/images/toko.jpg" alt="About Us" align="center" height="300px" width="500px"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;