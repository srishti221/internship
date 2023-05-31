import React from 'react'
import './MachineL.css'
import {Link} from "react-router-dom";



export const MachineL = () => {
    return (
        <>
          
        <div className="sci">
<br/>
           <h1>MACHINE LEARNING</h1>
           <br></br>
           <h4>Course details :</h4>
           <br/>
         
           
           
           

<h4>Perks and Benefits :</h4>
<br/>
<h6> 1. Course certificate
    <br></br>
2. Chance of applying for internship in this field.
<br/>
3. Enhanced skillset and hands-on experience.</h6>
<br/>
<h4>Pre-Requisites</h4>
<br/>
<h6>
▪ Machine Learning and python IDE.
<br/>
▪ Having a handy laptop.
 <br/>
Strong communication and interpersonal skills.
 
</h6>
<br/>
<h4>Responsibilities :</h4>
<br/>
<h6>1. Applying ML algorithms on data.
    <br/>
2. Working on AI-based app development.<br/>
3. Processing using machine learning and deep learning algorithms and transfer learning methods and techniques.
<br/>
4. Working on using innovative and automated approaches for data annotation, labeling, and data augmentation using active learning.
<br/>
5. Working on solving real-life problems using your passion for programming and deep learning/AI skills using Python.
<br/>
6. Engaging in back-testing the trained patterns and algorithms.</h6>
<br/>

<Link to="/home" role="button">
							Back
						</Link>
                        <br/>
                        <br/>
                        <Link className="btn btn-primary" to="/resume" role="button">Enroll now</Link>
        </div>
    </>
    )
}

export default MachineL;