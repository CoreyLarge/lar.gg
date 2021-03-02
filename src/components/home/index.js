import React, {Component, Fragment} from 'react';
import "./home.scss";
import {AiOutlineConsoleSql, FaJava, FaPython, SiJavascript} from "react-icons/all"
import {Navbar} from "./navbar";
import {Footer} from "./footer";
import Accordion from "../Accordion";
import Typewriter from "typewriter-effect";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: -1,
        }
        this.toggle = (tab) => {
            if (this.state.tab !== tab) {
                this.setState({
                    tab
                })
            }
        }
    }

    render() {
        return (
            <Fragment>
                <div className="home wrap">
                    <Navbar/>
                    <div className="header">
                        <h1><Typewriter className="typewriter-title" onInit={(typewriter) =>{
                        typewriter.typeString("Corey Large").start();
                        }}/></h1>
                        <h2>Ulster University Computer Science Graduate 2020
                        </h2>
                        <h2>First Class Honours</h2>
                    </div>
                    <div className="row">
                        <h2>Skills</h2>
                        <div className="column">
                            <div className="card"><FaPython size="2rem"/>
                                <h4>Python</h4>
                                <p>Experience creating REST API's using Flask and in creating scripts for personal
                                    usage</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card"><SiJavascript size="2rem"/>
                                <h4>JavaScript</h4>
                                <p>Experience with React and Angular creating front-end components
                                    in both frameworks</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card"><FaJava size="2rem"/>
                                <h4>Java</h4>
                                <p>Strong knowledge of Java, experience in object orientated programming and client
                                    server
                                    systems</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card"><AiOutlineConsoleSql size="2rem"/>
                                <h4>SQL</h4>
                                <p>Proficient in using SQL database solutions and SQL querys</p>
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="education">
                            <h2>Education</h2>
                            <div className="education-item">
                                <Accordion title="Ulster University"
                                           content="
                                           <h4>Computing Science</h4>
                                           <h4>First Class Honours</h4>
                                           <p>Full Stack Development   83%</p>
                                           <p>Concurrent and Distributed Systems   78%</p>
                                           <p>Data Analytics   73%</p>
                                           <p>Project  64%</p>
                                           <p>Process Management   59%</p>



                                           "
                                />
                                <Accordion title="Banbridge Academy"
                                           content="
                                           <h4>A-Level</h4>
                                           <p>ICT     B</p>
                                           <p>History   B</p>
                                           <p>Business Studies   B</p>
                                           "
                                />
                            </div>
                        </div>
                        <div className="work">
                            <h2>Work Experience</h2>
                            <Accordion title="Business Services Organisation"
                                       content="
                                       <h4>IT Support Officer</h4>
                                       <h4>July 2020 - Present</h4>

                                       <p>Providing IT Support to 3000+ users within the GP network</p>

                                       <p>Interaction with users in person and remote to diagnose and solve problems</p>

                                       <p>Working as a member of a team sharing information regarding problems encountered

                                       <p>Installing and providing support remotely"

                            />
                            <Accordion title="Business Services Organisation  (Placement)"
                                       content="
                                       <h4>IT Support Placement Student</h4>
                                       <h4>August 2018 - August 2019</h4>
                                       <p>Similar to current role</p>

                                       <p>Installing and supporting hardware and software</p>"

                            />

                        </div>
                    </div>
                </div>
                <div className="pagefooter">
                    <Footer/>
                </div>
            </Fragment>)


    }
}
