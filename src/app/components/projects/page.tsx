import Image from "next/image";

export default function Projects(){
    return(
        <div className="projects">
            <div className="page-text">
                <h1>Our</h1>
                <h2>Projects</h2>
            </div>
            <div className="container">
                <Image className="project1"
                    src="/project-img/project1.png"
                    alt="img"
                    width={670}
                    height={435}/>
                <div className="project-text">
                    <h1>Sample Project</h1>
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laudantium perferendis provident, voluptas dicta consectetur officia possimus quibusdam id tempore nemo facilis adipisci alias quasi iure reiciendis velit. Tempore, modi.
                    <div className="button project-button">
                        <p>VIEW MORE &nbsp; &rarr;</p>
                    </div> 
                </div>
            </div>
            <div className="container">
                <Image className="project2"
                    src="/project-img/project2.png"
                    alt="img"
                    width={670}
                    height={435}/>
                <div className="project-text">
                    <h1>Sample Project 2</h1>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam atque perspiciatis sit sint vel aut odit suscipit modi eos maiores, quas in aliquid alias eaque exercitationem laboriosam repudiandae ducimus.
                    <div className="button project-button">
                        <p>VIEW MORE &nbsp; &rarr;</p>
                    </div> 
                </div>
            </div>
            <div className="container">
                <Image className="project3"
                    src="/project-img/project3.png"
                    alt="img"
                    width={670}
                    height={435}/>
                <div className="project-text">
                    <h1>Sample Project 3</h1>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam atque perspiciatis sit sint vel aut odit suscipit modi eos maiores, quas in aliquid alias eaque exercitationem laboriosam repudiandae ducimus.
                    <div className="button project-button">
                        <p>VIEW MORE &nbsp; &rarr;</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}