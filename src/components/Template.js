import React from "react";
import "./Template.css";
import image from "./homeoffice.jpg"
import { IoEarth } from 'react-icons/io5';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Template = () => {
    return (
        <div style={{paddingTop:"56px"}}>
            <div className ="template">
                <div className="home" style={{overflowX:'hidden'}}>

                        <img style={{height:"90%", overflowX:"hidden"}} src={image}>
                        </img>
            
                    <div style={{position: "absolute",left: "50%",top: "50%", transform: "translate(-50%,-50%)"}}>
                        <div style={{fontSize:"55px", fontWeight:"bold", textAlign:"center", paddingBottom:"10px", color:"#262626"}}>
                            Juyeon Nam 
                        </div>
                        <div style={{fontSize:"28px", fontWeight:"bolder", textAlign:"center", paddingBottom:"40px", color:"#4E217A"}}>
                            Undergraduate Student in CS
                        </div>
                        <div style={{fontSize:"17px", fontWeight:"400", textAlign:"center", color:"#535557"}}>
                        . As we live in the rapid development of science and technology, skills are going to be a valuable asset.
                        </div>
                    </div>
                </div>

                <div className="about" style={{display:"flex", flexDirection:"row"}}>
                    <div style={{width:"50%"}}>
                        <div className="category">
                            <div className="general">About</div>
                            <div className="bold"> Me</div>
                        </div>
                        <div className="content">
                            <p style={{display:"flex", flexdirection:"row"}}>
                                <div style={{fontWeight:"bold"}}>Name</div>
                                <div style={{marginLeft:"30px"}}> Juyeon Nam</div>
                            </p>
                            <p style={{display:"flex", flexdirection:"row"}}>
                                <div style={{fontWeight:"bold"}}>Birth</div>
                                <div style={{marginLeft:"30px"}}> July 15, 2000</div>
                            </p>
                            <p style={{display:"flex", flexdirection:"row"}}>
                                <div style={{fontWeight:"bold"}}>Address</div>
                                <div style={{marginLeft:"30px"}}> Seoul, South Korea</div>
                            </p>
                            <p style={{display:"flex", flexdirection:"row"}}>
                                <div style={{fontWeight:"bold"}}>Education</div>
                                <div style={{marginLeft:"30px"}}> Computer Science, StonyBrook, SUNY</div>
                            </p>
                            <p style={{display:"flex", flexdirection:"row"}}>
                                <div style={{fontWeight:"bold"}}>Phone</div>
                                <div style={{marginLeft:"30px"}}> +1 10-0000-0000</div>
                            </p>
                            <p style={{display:"flex", flexdirection:"row"}}>
                            <div style={{fontWeight:"bold"}}>Email</div>
                                <div style={{marginLeft:"30px"}}> juyeon.nam@stonybrook.edu</div>
                            </p>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="category">
                            <div className="general">My</div>
                            <div className="bold"> Skills</div>
                        </div>
                        <div className="content">
                            <p style={{paddingBottom:"20px"}}>HTML, CSS, React</p>
                            <p style={{paddingBottom:"20px"}}>Java, Python, C#</p>
                            <p>Korean, English</p>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection: "row", overflowX: "hidden", width:"100%", justifyContent:"space-evenly"}}>
                    <a href="http://localhost:3000/" style={{width:"100%",backgroundColor: "#f46e46",  display:"flex", justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <div style={{display: "flex", flexDirection:"row", alignItems:'center', padding:"10px", justifyContent:"space-between", width:"70%"}}>
                                <div><IoEarth className="icon" size={"2.2rem"}></IoEarth></div>
                                <div className="link-info">My site</div>
                            </div>
                                <div className="link-name">Website</div>   
                    </a>
                    <a href="https://github.com/" style={{width:"100%",backgroundColor: "#211f1f", display:"flex", justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <div style={{display: "flex", flexDirection:"row", alignItems:'center', padding:"10px", justifyContent:"space-between", width:"70%"}}>
                                <div><AiFillGithub className="icon" size={"2.2rem"}></AiFillGithub> </div>  
                                <div className="link-info">My Project</div>
                            </div>    
                            <div className="link-name">GitHub</div>                      
                    </a>
                    <a href="https://www.linkedin.com/in/juyeon-nam-675608225/" style={{width:"100%",backgroundColor: "#55acee", display:"flex", justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <div style={{display: "flex", flexDirection:"row", flexDirection:"row", alignItems:'center', padding:"10px", justifyContent:"space-between", width:"70%"}}>
                                <div><FaLinkedinIn className="icon" size={"2.2rem"}></FaLinkedinIn> </div>   
                                <div className="link-info">My Experience</div>
                            </div>
                            <div className="link-name">LinkelIn</div>                    
                    </a>
                </div>
            </div>
            <div style={{paddingBottom:"60px"}}>

            </div>
        </div>
        );
    };

    export default Template;