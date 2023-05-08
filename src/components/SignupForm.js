import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const SignupForm = ({setIsLoggedIn}) => {

       const[formData , setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});

       const [showPassword , setShowPassword] = useState(false);
       const [showConfirmPassword , setShowConfirmPassword] = useState(false);


       const [accountType , setAccountType] = useState("student");

       const navigate = useNavigate();
       

       function changeHandler(event){
            const {name ,value} = event.target;

            setFormData( (prevData) => ( { 
                ...prevData,
                [name]:value
                })               
            )
       }

       function submitHandler(event){
           event.preventDefault();
           if(formData.password !== formData.confirmPassword){
               toast.error("Passwords do not match");
               return;
           }
    
            setIsLoggedIn(true);
            toast.success("Account created");
            const accountData = { ...formData};

            console.log('Printing Account Data');
            console.log(accountData);

            navigate("/dashboard");

       }
       

    return (
        <div>
            {/* student- instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                 <button
                    className={`${accountType=== "student" 
                    ?
                    "text-richblack-5 bg-richblack-900":
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                      onClick= { () => setAccountType("student")}>
                    Student
                 </button>

                 <button className={`${accountType=== "instructor"
                    ?
                    "text-richblack-5 bg-richblack-900":
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                         onClick= { () => setAccountType("instructor")}>
                    Instructor
                 </button>
            </div>

            <form onSubmit={submitHandler} >
                
                <div className="flex gap-x-4 mt-[20px]">
                     <label className=" ">
                         <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-200">*</sup>
                         </p>
                         <input type="text"
                                 name="firstName"
                                 value={formData.firstName}
                                 onChange={changeHandler}
                                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                                 placeholder='Enter First Name'
                                 />
                     </label>
     
     
                     <label>
                         <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-pink-200">*</sup>
                          </p>
                         <input type="text"
                                 name="lastName"
                                 value={formData.lastName}
                                 onChange={changeHandler}
                                 placeholder='Enter Last Name'
                                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                                 />
                     </label>
                </div>

                  {/* email Address */}

                  <div  className="mt-[20px]">
                        <label className="mt-[20px]">
                               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                  Email Address<sup className="text-pink-200">*</sup>
                               </p>
                               <input type="email"
                                       name="email"
                                       value={formData.email}
                                       onChange={changeHandler}
                                       placeholder='Enter Email Address'
                                       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                                       />
                      </label>
                  </div>


                {/* create and confirm password */}
                
               <div className="flex gap-x-4 mt-[20px]">

                  <label className=" relative">
                            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                Create Password<sup className="text-pink-200">*</sup>
                            </p>
                            <input required type={showPassword ? ('text'):('password')}
                                    name="password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    placeholder='Enter Password'
                                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                                    />

                   <span
                   className="absolute right-3 top-[40px] cursor-pointer"
                   onClick={ () => setShowPassword(prev => !prev) }>
                     {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
                   </span>
                   </label>

                   <label className=" relative">
                            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                Confirm Password<sup className="text-pink-200">*</sup>
                            </p>
                            <input required type={showConfirmPassword ? ('text'):('password')}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={changeHandler}
                                    placeholder='Confirm Password'
                                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                                    />

                    <span
                     className="absolute right-3 mt-3 -mr-2 cursor-pointer"
                     onClick={ () => setShowConfirmPassword(prevConf => !prevConf) }>
                      {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
                    </span>


                   </label>

               </div>

               {/* create account */}
               <input className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                      type="submit"
                      value="Create Account"/>

            </form>

        </div>
    );
}

export default SignupForm;