import styles from './styles.module.css';

function About() {

    return(
        <div className={styles.about}>
            <section className={styles.about_img}>
                <img src="/makingone-portfolio/Port_back_II.png" alt="" />
            </section>
            <section className={styles.about_content}>
                <h2>About<span>Me</span></h2>
                <h3>Taoheed Akinteye</h3>
                <p>
                    I am an Engineering student with a strong passion for Information Technology and digital innovation. As an active Frontend and Web Developer, I specialize in building responsive, user-friendly websites using HTML, CSS, and JavaScript, alongside modern tools such as Node.js  and React. My work focuses on blending functionality with aesthetic design to deliver engaging online experiences.
                    Beyond development, I explore my creativity through graphic design and content creation, believing that technology and art can seamlessly converge to craft powerful and memorable experiences. I am eager to contribute to impactful projects, collaborate with diverse teams, and continue expanding my knowledge in this ever-evolving field.
                </p>
            </section>
            
        </div>
    )
}
export default About