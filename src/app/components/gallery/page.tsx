import Image from "next/image";

export default function Gallery(){
    return(
        <div className="gallery">
            <div className="page-text">
                <h1>Photo</h1>
                <h2>Gallery</h2>
            </div>
            <div className="images1">
                <Image className="gallery1"
                    src="/gallery1.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery2"
                    src="/gallery2.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery3"
                    src="/gallery3.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery4"
                    src="/gallery4.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery5"
                    src="/gallery5.png"
                    alt="img"
                    width={210}
                    height={260}/>
            </div>
            <div className="images2">
                <Image className="gallery6"
                    src="/gallery6.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery7"
                    src="/gallery7.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery8"
                    src="/gallery8.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery9"
                    src="/gallery9.png"
                    alt="img"
                    width={210}
                    height={260}/>
                <Image className="gallery10"
                    src="/gallery10.png"
                    alt="img"
                    width={210}
                    height={260}/>
            </div>
        </div>
    )
}