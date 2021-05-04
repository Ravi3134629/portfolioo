import React from 'react'
import '../Resume.css'
import Skills from './Skills'
function Resume() {
    return (
        <div>
            <div className="hero is-medium is-secondary" id="resume">
                <div className="hero-body">
                    <div className="container" style={{"margin":"45px auto"}}>
                            <div className="strip">
                            <div className="columns">
                                <div className="column is-4">
                                    <h1 className="title" style={{"borderBottom":"4px solid aqua","display":"inline-block"}}>Education</h1>
                                </div>
                                <div className="column">
                                <h2 className="title">Sir M. Vishvaraya Institute of Technology</h2>
                            <p>Bachelor of Engineering in Information & Science</p>
                                </div>
                            </div>
                            <hr/>
                            </div>

                            <div className="strip">
                            <div className="columns">
                                <div className="column is-4">
                                    <h1 className="title" style={{"borderBottom":"4px solid aqua","display":"inline-block"}}>Work</h1>
                                </div>
                                <div className="column">
                                <h2 className="title">Web Developer</h2>
                            <p>Learning Coding.....</p>
                                </div>
                            </div>
                            <hr/>
                            </div>

                            <div className="strip">
                            <div className="columns">
                                <div className="column is-4">
                                    <h1 className="title" style={{"borderBottom":"4px solid aqua","display":"inline-block"}}>Skills</h1>
                                </div>
                                <div className="column">
                                <Skills skill="Javascript" value="65"/>
                                <Skills skill="ReactJS" value="20"/>
                                <Skills skill="Core Java" value="55"/>
                                <Skills skill="HTML,CSS" value="45"/>
                                <Skills skill="SQL" value="35"/>
                                <Skills skill="Problem Solving" value="65"/>
                                </div>
                            </div>
                            <hr/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
