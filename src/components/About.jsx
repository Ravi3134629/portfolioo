import React from 'react'
import '../About.css'

function About() {
const dev_img_url = 'https://media-exp1.licdn.com/dms/image/C4E03AQF6POLHyKasfw/profile-displayphoto-shrink_200_200/0/1567843599906?e=1625702400&v=beta&t=GnbDgMyWmC4XkyZt4mC4AciMkGUJeujRpHkIzVG3j_U'
    return (
        <div>
            <div className="hero is-dark is-fullheight is-About" id="about">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                            <figure class="image">
                            <img src={dev_img_url} className="is-rounded dev" alt="dev"/>
                            </figure>
                            </div>
                            <div className="column is-6">
                                <h2 className="title">About Me</h2>
                                <p className="subtitle">I'm a Information Science and Engineering Student</p>
                                <br/>
                                <h2 className="title">Contact Details</h2>
                                <address className="address">
                                    <i className="fa fa-map-pin"/> Sir Mvit and KCDS Men's Hospital,Krishnadevarayanagar hunsamaranahalli bangalore 562157<br/>
                                    <i className="fa fa-envelope"/> ravi3134629@gmail.com
                                </address>
                                <br/>
                                <button className="button is-danger" onClick={event=>alert("Resume not Found!")}>Download Resume</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
