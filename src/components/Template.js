import React from "react";
import frame from '../assets/frame.png'
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({title, desc1 , desc2, loginImg, formType , setIsLoggedIn}) => {
    
    return (
        <div>
            <div>
                
                <div>{title}</div>
    
                <p> 
                   <span>{desc1}</span>
                   <span>{desc2}</span>
                </p>
                
                {
                  formType === "signup" ?
                  (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                  (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                
                <div>
                   <div></div>
                   <p>OR</p>
                   <div></div>
                </div>
                
                <button>
                   Sign in with Google
                </button>               
            </div>

            <div>
                <img src={frame} alt="Pattern" width={558} height={504} loading="lazy" />
                <img src={loginImg} alt="Students" width={558} height={490} loading="lazy" />
            </div>

        </div>
    );
}

export default Template;