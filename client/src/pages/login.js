import React from "react";
import '../styleLogin.css'

function LoginForm(){
    return(
        <div>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" className={"input"}/>

                    <div className="signup">
                        <form>
                            <label htmlFor="chk" aria-hidden="true" className={"label"}>Sign up</label>
                            <input type="text" name="txt" placeholder="User name" required="" className={"input"}/>
                                <input type="password" name="pswd" placeholder="Password" required="" className={"input"}/>
                                    <button className={"button"}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label htmlFor="chk" aria-hidden="true" className={"label"}>Login</label>
                            <input type="text" name="text" placeholder="User name" required="" className={"input"}/>
                                <input type="password" name="pswd" placeholder="Password" required="" className={"input"}/>
                                    <button className={"button"}>Login</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default LoginForm