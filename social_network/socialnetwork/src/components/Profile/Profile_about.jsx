import React from "react";
import Image from './../../emoji-me.png';


const About = (props) => {
    return (
        <div className='about'>
        <img className='about_img' src={Image} />
        <div className='about_body'>
          <div className='title'>
            <p>About me</p>
          </div>
          <div className='info'>
            <ul>
              <li>Data of bith: December 15, 1990</li>
              <li>City:{props.some} Kiev</li>
              <li>Name: Andriy {props.lastname}</li>
              <li>Web-site: www.dddirections</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default About;