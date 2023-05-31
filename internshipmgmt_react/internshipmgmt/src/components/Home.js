import React from 'react'
import './Home.css'
import {Link} from "react-router-dom";

export const Home=()=> {
  
  function clickhere(){
    alert('Click here')
  }
  
  return (
     
    <div className='hello'>
    
        <div className='h1'>
      <h1>Course Hero </h1>

      <div className='Intern'>
        <p3>The Course Hero Programme is designed to bring highly qualified and motivated students with diverse backgrounds into the Organisation to work on projects linked to the Strategic Orientations of the Secretary-General and to support the corporate functions of the Organisation. Its main goal is to give successful candidates the opportunity to improve their analytical and technical skills in an international environment.
          The Course Hero Programme is open on an on-going basis. Students enrolled at a fully accredited degree programme (Bachelor, Master, PhD) during the entire duration of their internship can apply online. Selected interns are on-boarded both remotely and in a hybrid form until further notice.</p3>
      </div>
      </div>
    <div className='row'>
           <div class='card-main'>
           <div class="circle-design">
            </div>
           </div>
          <div class="card-content1">
            <a href='#'> <i class="fa fa-crosshairs" aria-hidden="true"></i> 
            </a>
            <br/>

            <h3>Machine Learning</h3>
            <div class='textIcon'>
            <Link to = "/MachineL"> <button>Click here</button></Link>
            </div>
          </div>
        </div>

      <div class="card-webd">
          <div class='circle-design'>
           </div>
          
          <div class="card-content">
            <a href="#">
            <i class="fa fa-crosshairs" aria-hidden="true"></i>
            </a>
            <br/>
            <h3>Web Development</h3>
               <div class="text-icon">
              <Link to ="/WebD"><button>Click here</button></Link>
               </div>
          </div>
        </div>
        

        <div class="card-cloud">
          <div class='circle-design'></div>

          <div class="card-content">
            <a href="#">
            <i class="fa fa-crosshairs" aria-hidden="true"></i>

            </a>
            <br/>
            <h3>Cloud Computing</h3>
            <div class="text-icon">
           <Link to ="/Cloud" ><button>Click here</button></Link>
            </div>
          </div>

        </div>
      
        </div>
  );
  }

export default Home;
