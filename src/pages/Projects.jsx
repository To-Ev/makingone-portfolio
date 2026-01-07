import { server } from '../main.jsx';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styles from './styles.module.css';

function Projects() {
    const [data, setData] = useState([]);
    const [type, setType] = useState("All");

    useEffect(() =>{
        async function fetchImages() {

            try {
                const { data:res } = await axios.get(`${server}/api/uploads/all`);

                setData(res.result);
                toast.success(res.msg);

            } catch (err) {
                console.error(`Failed to get images:`, err)
                toast.error(err.response.data.err)
            }

        }
        fetchImages();
        
    }, []);
    console.log(data);

    return(
        <section className={styles.projects}>
            <a href=""></a>
            <h2>HELLO! WELCOME TO MY GALLERY</h2>
            <select value={type} id={styles.type} onChange={(e) => setType(e.target.value)}>
                <option value="All">All</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Web Development">Web Development</option>
            </select>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 480:2, 750: 3, 900: 4}}
                                gutterBreakPoints={{ 350: "8px", 750: "12px", 900: "16px"}}>
                <Masonry>
                    {
                        data && data.filter((db) => type === "All" ? true : db.projectType === type)
                        .flatMap( doc => (Array.isArray(doc.image) ? 
                            doc.image.map(img =>
                            <a href={doc.liveURL || '#'} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className={styles.wrapper}
                                onClick={e => {
                                    if(!doc.liveURL) {
                                        e.preventDefault();
                                    }
                                }}
                                key={doc._id}>
                                <img src={img.url} alt="preview" className={styles.images}/>
                                <div className={styles.content}>
                                    <h3>{doc.title}</h3>
                                    <p>{doc.description}</p>
                                </div>
                            </a>) : null)
                        )}
                    
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Projects