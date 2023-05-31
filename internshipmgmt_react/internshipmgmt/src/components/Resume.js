import React, { Component } from 'react'
import './Resume.css'
import {Link} from "react-router-dom";

export const Resume=()=> {

  
  
    
    return(
      <div className='res'>
        <div className='home'>
            <h3> Apply Now </h3>
            <div className="value-container">
									<span>Name</span>
                                    <input type="text" id='Name' />
                                    <br/>
                                    <br/>
                                    <span>Age</span>
                                    <input type="text" id='Age' />
                                    <br/>
                                    <br/>
                                    <span>Course</span>
                                    <input type="text" id='Course' />
                                    <br/>
                                    <br/>
                                    <span>College</span>
                                    <input type="text" id='College' />
                                    <br/>
                                    <br/>
                                    <span>Skills</span>
                                    <input type="text" id='Skills' />
                                    <br/>
                                    <br/>
                                    <button className="reg-submit" type="submit" >
								Submit
							</button>
									
								</div>
        </div>
      </div>  
    )
}