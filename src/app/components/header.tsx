import Link from "next/link"
import Image from "next/image";

export default function Header(){
    return(
        <div className="header">
            <Image className="logo" 
                src="/logo.png"
                alt="img"
                width={70}
                height={43.71}/>
            <ul className="items">
                <li><Link href={"/"}>MAIN</Link></li>
                <li><Link href={"/components/gallery"}>GALLERY</Link></li>
                <li><Link href={"/components/projects"}>PROJECTS</Link></li>
                <li><Link href={"/components/certifications"}>CERTIFICATIONS</Link></li>
                <li><Link href={"/components/contact"}>CONTACTS</Link></li>
            </ul>
        </div>
    );
}