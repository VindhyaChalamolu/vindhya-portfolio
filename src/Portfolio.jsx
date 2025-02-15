import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { projects, aboutMe, workExperience } from "./data";
import Footer from "./Footer";

function Portfolio(props) {
    return (
        <div className="main">
            <div className="first-section">
                <img alt="profile" src="../3135789.png"/>
                <div className="name">Vindhya Chalamolu</div>
                <div className="role">Full Stack Developer</div>
            </div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/019/799/598/small/businessman-hand-touch-with-code-html-and-programming-on-screen-laptop-programmer-development-computer-code-web-design-coding-technology-in-software-digital-software-technology-development-iot-photo.jpg" alt="laptop" 
                className='home-background'
            />
            <div className="second-section">
               <div className="heading">About Me</div>
               <div className="details">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="personal-info">
                            <div >
                                <p><span className="bold">Full Name: </span><span style={{ opacity: "0.7", fontWeight: "400", marginLeft: "20px"}}>Vindhya Chalamolu</span></p>
                                <p><span className="bold">Phone:</span><span style={{ opacity: "0.7", fontWeight: "400", marginLeft: "60px"}}>+91 6303274174</span></p>
                                <p><span className="bold">Email:</span><span style={{ opacity: "0.7", fontWeight: "400", marginLeft: "60px"}}>vindhya.chalamolu@gmail.com</span></p>
                            </div>
                        </div>
                        <div className="skills-section">
                            <span style={{fontSize: "20px"}}><b>Skills</b></span>
                            <ul>
                                <li><span className="bold">Frontend:</span> ReactJS(Redux,Hooks), Material-UI, JavaScript, HTML, CSS3, Figma(UI/UX Designing), Responsive web design.</li>
                                <li><span className="bold">Backend:</span> NodeJS, ExpressJS,NestJS, RESTful APIs.</li>
                                <li><span className="bold">Programming Languages:</span> C, Python, Java, C++.</li>
                                <li>NoSQL(MongoDB), SQL(MySQL, Postgres) TypeScript.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-me">
                        <div>
                            <p style={{fontSize: "18px", marginTop: "0"}} className="bold">Hello There!</p>
                            <p>{aboutMe.description}</p>
                        </div>
                    </div>
               </div>
            </div>
            <div className="third-section">
                <div className="heading">My Resume</div>
                <p className="bold work">Work Experience
                    <div style={{textAlign: "center", opacity: "0.7", fontSize: "14px"}}>Infosys Oct 2021 - Present</div>
                </p>
                <div class="timeline">
                    {workExperience.map((p, index) => {
                        let n = index % 2 === 0 ? "left" : "right";
                        return (
                            <div className={`container ${n}`}>
                                <div className="content">
                                    <h3>{p.projectName}</h3>
                                    <div dangerouslySetInnerHTML={{__html:p.description}} />
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            {/* <div className="fourth-section">
                <div className="heading">Skills</div>
                <div className="skills">
                    {skills.map(s => 
                        <div style={{ width: "160px", height: "160px" }}>
                            <CircularProgressbarWithChildren 
                                value={s.percentage} 
                                strokeWidth={3}
                                styles={buildStyles({pathColor: "#FF9000"})}
                            >
                                <div style={{fontWeight: "700", fontSize: "12px", color: "rgb(0,0,0,0.6)"}}>{s.name}</div>
                                <div style={{fontWeight: "700", fontSize: "12px", color: "rgb(0,0,0,0.6)", margin: "-10px"}}>{s.value}</div>
                            </CircularProgressbarWithChildren>
                        </div>
                    )}
                </div>
            </div> */}
            <div className="fifth-section">
                <div className="heading" style={{padding:"80px"}}>Projects</div>
                <div className="projects">
                    {projects.map(p => (
                        <div className="item">
                            <div className="project-name">{p.name}</div>
                            <div style={{fontWeight: "400", fontSize: "16px", padding: "0px 20px 20px 20px"}}>
                                {p.description}
                                <div><b>Link:</b></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;