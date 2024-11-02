import Image from "next/image";

export default function Contact(){
    return(
        <div className="contact-page">
            <div className="page-text">
                <h1>Contact</h1>
                <h2>Information</h2>
                <div className="info">
                    <b>Company Name</b>
                    <br />
                    1234 Sample Street Austin Texas 76401
                    <br />
                    <br />
                    <b>512.333.2222</b>
                    <br />
                    <br />
                    sampleemail@gmail.com
                    <div className="button black-button">
                    <p>VIEW MORE</p>
                    </div> 
                </div>
            </div>
            <Image className="map" 
                src="/map.png"
                alt="img"
                width={1319}
                height={501}/>
        </div>
    )
}