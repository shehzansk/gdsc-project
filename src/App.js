import DarkMode from "./DarkMode"
import icon1 from './icon1.png';
import imagePeople from './image-people.png';
import imagePeople2 from './image-people2.png';
import drop1 from './drop.png';
import imagetext1 from './image-text1.png';
import imagetext2 from './image-text2.png';
import imagetext3 from './image-text3.png';
import firstbox1 from './firstbox1.png';
import firstbox2 from './firstbox2.png';
import firstbox3 from './firstbox3.png';
import footerI1 from './footer-i1.png';
import footerI2 from './footer-i2.png';
import Twitter from './Twitter.png';
import insta from './insta.png';
import linkedIn from './linkedIn.png';


import './App.css';

function App() {
  return (
  <div className='dark'>
  <div className="navBar">
    <div id="logo">
    <img id="icon1" src = {icon1}></img> <span className='icontext'>GDSC RCOEM</span>
    </div>
    <div className="Links">
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Teams</a></li>
            <li><a href="/">Alumni</a></li>
            <li><a href="/">Contact</a></li>
          </ul>  
      </nav>
      <div> <DarkMode /> </div>    
    </div>
  </div>
  
  <div id="flexBox">
  <img id="imagePeople" src = {imagePeople}></img>
  </div>
    <div id="flexBox">
      <p id="Rcoem">RCOEM Chapter</p>
    </div>
  <div id="flexBox">
  <img id="imagePeople2" src = {imagePeople2}></img>
  </div>

  <div id="flexBox">
    <div id="paragraph">Google Developer Student Clubs are community groups 
      for college and university students interested 
      in Google developer technologies.</div>
  </div>

  <div id="flexBox">
    <button >join us</button>
  </div>

  <div id="flexBox">
  <img id="drop1" src = {drop1}></img>
  </div>

  <div id="flexBox">
    <p id="getus">Get To Know Us!</p>
  </div>

  <div id="flexBox1">
    <p id="underline">Our Mission</p>
  </div>

  <div id="underline-container">
    <hr color="#4285F4"></hr>
   </div>
  
  <div id="image-text-container1">
      
      <img id="image-text1" src = {imagetext1}></img>
      <div id="image-text-container1-para">
        <p>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
        
      </div>
  </div>
  

  <div id="flexBox">
    <p id="underline">Our Perspective</p>
  </div>
  <div id="underline-container2">
    <hr color="#0F9D56"></hr>
  </div>
  <div id="image-text-container1">
      <div>
        <p id="image-text-container1-p1">We're a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas and working for a solution driven team.</p>
      </div>
      <img id="image-text2" src = {imagetext2}></img>
      
  </div>

  <div id="flexBox">
    <p id="underline">What Keeps Us Going</p>
  </div>
  <div id="underline-container3">
  </div>

  <div id="image-text-container1">
      
      <img id="image-text3" src = {imagetext3}></img>
      <div>
        <p id = "image-text-container1-p2">Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
        The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.</p>
        
      </div>
  </div>
  <div className="four-circle-container">
    <div><div className="circle-shape"><div className="circle-shape-content">03+</div></div> Years</div>
    <div><div className="circle-shape"><div className="circle-shape-content">10+</div></div> Events</div>
    <div><div className="circle-shape"><div className="circle-shape-content">1k+</div></div> Community <br />Members</div>
    <div><div className="circle-shape"><div className="circle-shape-content1">200+</div></div> Attendees</div>
  </div>

  <div id="technology-container">
    <hr />
    <p>Technologies</p>
    <hr />
  </div>
  <div id="technology-container-end">Domains That Excite Us to Collaborate and Teach!</div>

    <div id="technology-threebox">
      <div id="firstBox">
        <hr id="hrOfAndroid" />
        <div>
          <img src={firstbox1}></img><br />
          <p>Android</p> <br /> &#9660;
        </div>
      </div>
      <div id="firstBox">
        <hr id="hrOfFlutter" />
        <div>
        <img src={firstbox2}></img><br />
          <p>Flutter</p> <br /> &#9660;
        </div>
      </div>
      <div id="firstBox">
        <hr id="hrOfCloud" />
        <div>
        <img src={firstbox3}></img><br />
          <p>Cloud</p> <br /> &#9660;
        </div>
      </div>
    </div>

    <footer className="footer">
      <div id="flex-box">
        <div id="flex-box-inside"> 
        <img id="icon1" src = {icon1}></img>
        Google Developer Student Clubs <br />RCOEM
        </div>
        <div >
            
            <div id="address">
            <img id="footerImage" src = {footerI1}></img>
            Shri Ramdeobaba College of Engineering and Management,<br />
            Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013<br /></div>
            
           <div id="address"> 
           <img id="footerImage2" src = {footerI2}></img>
           dsc.rknec@gmail.com</div>

         </div>
        <div> follow us: <br />
        <div className="social-container">
          <div>
            <div className="shape">
              <div className="circle-shape-content">
                </div><img id="social-image" src = {insta}></img>
                </div>
                <a href="https://www.instagram.com/gdsc_rcoem/" target="_blank" > Instagram</a>
                </div>
          <div>
            <div className="shape">
              <div className="circle-shape-content">
              </div><img id="social-image" src = {linkedIn}></img>
                </div> 
                 <a href="https://www.linkedin.com/company/gdsc-rcoem/" target="_blank">LinkedIn</a>
                </div>
          <div>
            <div className="shape">
              <div className="circle-shape-content">
                </div>
                  <img id="social-image" src = {Twitter}></img>
                </div> 
                <a href="https://twitter.com/gdsc_rcoem" target="_blank">Twitter</a>
              </div>
           </div>

        </div>
      </div>
      <div>
        <hr color="white"/>
        Made with &#10084; by <a href="https://www.linkedin.com/in/shehzan-ahmed-sheikh-71a016267/" target="_blank">Shehzan Sheikh</a>
      </div>
    </footer>
  </div>
  );
}

export default App;
