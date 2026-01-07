import { useState } from 'react';
import styles from './styles.module.css';
import { server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange({currentTarget: input}) {
        setData({...data, [input.name]: input.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const {data:res} = await axios.post(`${server}/api/contact`, data);
            toast.success(res.msg);
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.err || `Failed to submit`);
        }finally{
            setData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        }
        
    };

    return(
        <div className={styles.contact}>
            <section className={styles.content}>
                <h2>Contact <span>Me</span></h2>
                <h3>Lets work together</h3>
                <p>
                    I'm glad you've visited my personal portfolio website! If you have any questions, suggestions or would like to collaborate, please feel free to contact me through this form. I will endeavour to reply to your message as soon as possible.
                </p>
                <div className={styles.icon}><i className='bx bxs-phone'></i>+2349076093609</div>
            </section>
            <section className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Enter Your Name'
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        name='email'
                        placeholder='Enter Your Email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name='subject'
                        placeholder='Enter Your Subject'
                        value={data.subject}
                        onChange={handleChange}
                    />
                    <textarea 
                        type="text" 
                        name='message'
                        placeholder='Enter Your Message'
                        value={data.message}
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Contact