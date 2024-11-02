import Image from "next/image";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-text">
                <Image className="logo" id="footer-logo" 
                    src="/logo(f).png"
                    alt="img"
                    width={145}
                    height={94}/>
                <ul className="information">
                    <h3><b>Information</b></h3>
                    <br />
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>projects</li>
                    <li>Certifications</li>
                    <li>Contacts</li>
                </ul>
                <ul className="contacts">
                    <h3><b>Contacts</b></h3>
                    <br />
                    <li>1234 Sample Street <br />Austin Texas 78704</li>
                    <br />
                    <li>512.333.2222</li>
                    <br />
                    <li><address>sampleemail@gmail.com</address></li>
                </ul>
                <div className="socialMedia">
                    <h3><b>Social Media</b></h3>
                    <br />
                    <div className="logos">
                        <Image className="logo1" 
                        src="/icons/facebook.png"
                        alt="img"
                        width={10}
                        height={19}/>
                        <Image className="logo2" 
                        src="/icons/twitter.png"
                        alt="img"
                        width={22}
                        height={17}/>
                        <Image className="logo3"
                        src="/icons/Linked In.png"
                        alt="img"
                        width={20}
                        height={20}/>
                        <Image className="logo4"
                        src="/icons/pinterest.png"
                        alt="img"
                        width={14}
                        height={19}/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <hr/>
                <br />
                <p>&copy; 2019 All Rights Reserved.</p>
                <br />
            </div>
        </div>
    )
}