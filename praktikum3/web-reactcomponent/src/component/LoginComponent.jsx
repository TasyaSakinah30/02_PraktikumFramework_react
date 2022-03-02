import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
    return (
        <form>
            <div className="container">
                <div className="justify-content-center">
                    <div className="col-md-5">
                        <h2 className="font-weight-bold text-center my-4">Form Login</h2>
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="form-group">
                                        <h1 className="font-weight-bold text-center my-4">Tugas Pertemuan Ketiga</h1>
                                        <label><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required/>

                                        <label><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required/>
                            
                                    </div>
                                    <button className="log">Login</button><br></br>
                                        <input type="checkbox" defaultChecked/> Remember me <br></br>
                                    <button className="cancel">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
    );
};
export default LoginComponent;