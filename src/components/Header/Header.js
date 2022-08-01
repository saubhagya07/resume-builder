import React from 'react';
import resumeSvg from '././assets/resume.svg';
import Nav1 from '../navigation/Nav';
import resumebackground from '././assets/resuembackground.png';

import styles from "./Header.module.css";
function Header() {
    return (
        <div className="Nav">
            <Nav1/>
            

        <div className= {styles.container}>
        <article
           className={styles.article}
            style={{ backgroundImage: `url(${resumebackground})`}}>
                <div className={styles.left}>   
                <p className={styles.heading}>A <span>Resume</span> that stand out!</p>
                <p className={styles.heading}> Make you own Resume.<span><br></br>
                 It's Free!!</span></p>
        </div>
        </article>
        </div>
            <article
                className = {styles.article}>
                <div classname={styles.right}>
                <img src={resumeSvg} alt='Resume' height = "300px" width = "500px"/>
                </div></article>
        </div>

    );
}

export default Header;