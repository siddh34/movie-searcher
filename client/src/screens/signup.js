import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cognitoUser from "../models/userpool.js";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitData = (event) => {
        event.preventDefault();

        console.log("Enter Submit function");

        cognitoUser.signUp(email, password, [], null, (err, data) => {
            if (err.code === "UsernameExistsException") {
                console.log("User is present in database performing login");
                navigate("/main", { state: {"userEmail": email} });
            } else if (err) {
                console.log(err);
                navigate("/main", { state: { "userEmail": email } });
            }
            console.log(data);
        });
        
    };

    return (
        <>
            <form onSubmit={onSubmitData}>
                <div className="my-6 mx-5">
                    <div>
                        <label htmlFor="inputUserEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="inputemail5"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="inputPassword5" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="inputPassword5"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and
                            numbers, and must not contain spaces, special characters, or
                            emoji.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-2 mx-1">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default Signup;
