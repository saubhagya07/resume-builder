import React from 'react';
import {ArrowDown} from 'react-feather'

import Editor from "./Editor/Editor";

import styles from "./Body.module.css";

function Body() {
    const colors = ["rgb(152, 92, 207)", "purple", "pink", "4b2c8f", "3b2c4b"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Other",
        };


    return (
    <div className={styles.container}>
    <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
        <div className={styles.colors}>
            {colors.map((item=> (
                    <span 
                    key={item}
                    style={{backgroundColor: item}}
                    className={styles.color}
                    />

                )))}
        </div>
        <button>Download<ArrowDown/>
        </button>
    </div>
    <div className= {styles.main}>
        <Editor sections = {sections}/>
    </div>
    </div>
    );

}
    
export default Body;