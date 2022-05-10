import AnimatedLetters from "../AnimatedLetters"

const About = () => {
    return (
        <div className = 'container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        strArray={['A','b','o','u','t', ' ', 'm', 'e']}
                        idx ={15}
                    />
                </h1>
                <p>IT specialist with 4 years of industrial experience and 2 years of professional experience in full stack web development.
                    Experience in the development of web applications with Mongo DB, Express server, React and Node Js (MERN stack).
                    Proficient in programming languages such as Python, HTML, CSS, React and Node Js.
                    Expertise in continuous deployment and continuous integration tools such as Gitlab and Docker.
                    Extensive experience in working on projects with Agile Methodology.
                </p>

                <p>I am passionate about programming and especially solving problems with coding gives the "Super Power" in the world of IT. 
                    Also It provides me the platform to innovate my ideas. Looking for the opportunity in the field of software development to work in a pragmatic way in a dynamic 
                    and challenging environment and to enhance my professional skills and knowledge. </p>


                <p>Possess strong commitment to team environment dynamics with the ability to contribute expertise and follow leadership directives at appropriate times
                Strong communication, interpersonal, positive thinking, and mentoring skills, as well as a strong desire to learn.
                </p>
                
            </div>

        </div>
    )
}

export default About