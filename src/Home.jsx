import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {

    return(
        <div>
            {/* <Header /> */}
            <section className='home'>
                <div className="content">
                    <h3>Hi, my name is <span>Taoheed</span></h3>
                    <h2>I'm a <span>web Developer</span></h2>
                    <p>I am a Web Developer passionate about building responsive, user‑friendly websites. Skilled in HTML, CSS, and JavaScript, with experience in frameworks like React and runtime environments such as Node.js, I focus on creating digital solutions that combine functionality with clean, engaging design.</p>
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/bee-kay-b95911336/' target='_blank' rel='noopener noreferrer' className='link'><i className='bx bxl-linkedin' ></i></a>
                        <a href='https://github.com/me50/To-Ev' target='_blank' rel='noopener noreferrer' className='link'><i className='bx bxl-github'></i></a>
                        <a href='' target='_blank' rel='noopener noreferrer' className='link'><i className='bx bxl-instagram-alt' ></i></a>
                    </div>
                    <Link to='/contact'><button>Hire me</button></Link>
                </div>
                <div className="content-img">
                    <img src="../port_back.png" alt="hero pic" />
                </div>
            </section>
            <section class="cards">
                <div class="card">
                    <h2>FullStack Web Dev</h2>
                    <p>I am a Full‑Stack Web Developer skilled in building responsive interfaces with HTML, CSS, JavaScript, and React, while leveraging Node.js  to create scalable, efficient backend solutions that deliver seamless performance.
                    </p>
                </div>
                <div class="card">
                    <h2>Graphics Design</h2>
                    <p>I offer creative graphic design services that transform ideas into visually striking and memorable designs. My focus is not only on aesthetics but also on ensuring each design communicates the right message with clarity and impact.
                    </p>
                </div>
                <div class="card">
                    <h2>Content Creator</h2>
                    <p>I create engaging digital content that blends creativity with strategy, from graphics and visuals to written pieces that connect with audiences, and is not only visually appealing but also purposeful in delivering clear, impactful messages.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home