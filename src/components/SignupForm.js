import React, { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";


const SignupForm = () => {

       const[formData , setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});

       const [showPassword , setShowPassword] = useState(false);

       function changeHandler(event){
            const {name ,value} = event.target;

            setFormData( (prevData) => ( { 
                ...prevData,
                [name]:value
                })               
            )
       }

    return (
        <div>
            {/* student- instructor tab */}
            <div>
                 <button>
                    Student
                 </button>
                 <button>
                    Instructor
                 </button>
            </div>

            <form>
                
                <div>
                     <label>
                         <p>First Name<sup>*</sup></p>
                         <input type="text"
                                 name="firstName"
                                 value={formData.firstName}
                                 onChange={changeHandler}
                                 placeholder='Enter First Name'
                                 />
                     </label>
     
     
                     <label>
                         <p>Last Name<sup>*</sup></p>
                         <input type="text"
                                 name="lastName"
                                 value={formData.lastName}
                                 onChange={changeHandler}
                                 placeholder='Enter Last Name'
                                 />
                     </label>
                </div>

                  {/* email Address */}
                 <label>
                         <p>Email Address<sup>*</sup></p>
                         <input type="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={changeHandler}
                                 placeholder='Enter Email Address'
                                 />
                </label>

                {/* create and confirm password */}
                
               <div>

                  <label>
                            <p>Create Password<sup>*</sup></p>
                            <input required type={showPassword ? ('text'):('password')}
                                    name="password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    placeholder='Enter Password'
                                    />

                   <span onClick={ () => setShowPassword(prev => !prev) }>
                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                   </span>
                   </label>

                   <label>
                            <p>Confirm Password<sup>*</sup></p>
                            <input required type={showPassword ? ('text'):('password')}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={changeHandler}
                                    placeholder='Confirm Password'
                                    />

                    <span onClick={ () => setShowPassword(prev => !prev) }>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>


                   </label>

               </div>

               {/* create account */}
               <input type="submit"
                      value="Create Account"/>

            </form>

        </div>
    );
}

export default SignupForm;