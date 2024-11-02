import Image from "next/image";

export default function Home() {
  return (
    <div className="parentContainer">
      <div className="container1">
        <div className="textbox">
          <h1>PROJECT</h1>
          <h2>Lorum</h2>
        </div>
        <Image className="main-img" 
          src="/main.png"
          alt="img"
          width={770}
          height={829}/>
        <button type="submit" className="button view">
          <p>VIEW PROJECT &nbsp; &rarr;</p>
        </button> 
      </div>
      <div className="container2">
        <div className="about-imgs">
          <Image className="about1" src= "/about1.png" alt= "img" width={270} height={265}/>
          <Image className="about2" src= "/about2.png" alt= "img" width={270} height={140}/>
        </div>
          <Image className="about3" src= "/about3.png" alt= "img" width={270} height={345}/>
        <div className="about">
          <h1>About</h1>
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur sint nemo id omnis aspernatur laborum accusantium ratione esse fuga fugiat voluptate odio, cumque sequi earum magnam sed repellat ipsa quod ad, optio distinctio! Architecto tempora reprehenderit et illo animi!
          <button type="submit" className="button readmore">
            <p>READ MORE &nbsp; &rarr;</p>
          </button> 
        </div>
      </div>
      <div className="container3">
        <div className="page-headings">
          <h1>Main Focus/Mission Statement</h1>
        </div>
        <div className="container3-body">
          <div className="body1">
            <Image className="1" src= "/1.png" alt= "img" width={104} height={140}/>
            <div className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est commodi accusamus, repudiandae modi cumque!</div>
          </div>
          <div className="body2">
            <Image className="2" src= "/2.png" alt= "img" width={120} height={140}/>
            <div className="main-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dignissimos aliquam molestiae quaerat dolore, cupiditate harum architecto eum et tempora. Nisi sapiente adipisci sit dolores.</div>
          </div>
        </div>
      </div>
      <div className="container4">
        <div className="page-headings">
          <h1>Our Projects</h1>
        </div>
        <div className="project-cont1">
          <Image className="img1" src= "/img1.png" alt= "img" width={570} height={255}/>
          <div className="overlay-text">
            Sample 
            <br />
            Project
          </div>
            <button type="submit" className="button black-button more">
              <p>VIEW MORE &nbsp; &rarr;</p>
            </button>
          <Image className="img2" src= "/img2.png" alt= "img" width={570} height={255}/>
        </div>
        <div className="project-cont2">
          <Image className="img3" src= "/img3.png" alt= "img" width={270} height={255}/>
          <Image className="img4" src= "/img4.png" alt= "img" width={470} height={255}/>
          <Image className="img5" src= "/img5.png" alt= "img" width={370} height={255}/>
        </div>
        <button type="submit" className="button black-button" id="all-projects">
          <p>All PROJECTS &nbsp; &rarr;</p>
        </button>
      </div>
      <div className="container5">
        <div className="page-headings flex">
            <h1>Contact Us</h1>
        </div>
        <div className="contact-form">
          <div className="form">
            <br/>
            <form action="">
              <input type="text" placeholder="Name" className="formbox"/>
              <br />
              <input type="tel" placeholder="Phone Number" className="formbox"/>
              <br />
              <input type="email" placeholder="Email" className="formbox"/>
              <br />
              <input type="text" placeholder="Interested In" className="formbox"/>
              <br />
              <textarea name="message" id="message" placeholder="Message" rows={3} className="formbox"></textarea>
              <br />
              <br />
              <button type="submit" className="button black-button">SEND EMAIL &nbsp; &rarr;</button>
            </form>
          </div>
          <Image className="pic" src= "/pic.png" alt= "img" width={749} height={369}/>
        </div>
      </div>
    </div>  
  );
}