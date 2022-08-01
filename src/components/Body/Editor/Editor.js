import React, { useState } from 'react';

import InputControl from '../../InputControl/InputControl';

import styles from './Editor.module.css'

function Editor(props) {
    const sections = props.sections;

    const[activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const workExpBody=(
    <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl
                label="Title"
                placeholder="Enter the title eg. Java programmer"
                />
            <InputControl
                label = "Company Name"
                placeholder="Enter the company name eg. Amazon"
                />
        </div>
    <div className={styles.row}>
        <InputControl
             label = "Certificate Link"
            placeholder="Enter certificate link"
            />
        <InputControl
            label = "Location"
            placeholder="Enter location e.g India"
            />
    </div>
    <div className={styles.row}>
        <InputControl
            label = "Start Date"
            type = "date"
            placeholder = "Enter the Start of work"
        />
        <InputControl
            label = "End Date"
            placeholder="Enter the End of work"
            />
    </div>
    <div className= {styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder = "Line 1"/><br>
        </br>
        <InputControl placeholder = "Line 2"/><br>
        </br>
        <InputControl placeholder = "Line 3"/><br>
        </br>
        </div>
    </div>
    );

    const projectBody = (
    <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl label = "Title" placeholder="Enter title eg. bot"/>
        </div>
        <InputControl
            label = "Overview"
            placeholder ="Enter Basic info of project"
            />
        <div className={styles.row}>
            <InputControl
                label="Deployed Link"
                placeholder = "Enter Deployed link of project"
            />
            <InputControl
                label="GitHub"
                placeholder= "Enter GitHub link of the project"
                />
        </div>
        <div className={styles.column}>
            <label>Enter project details</label>
            <InputControl placeholder="Line1"/><br>
            </br>
            <InputControl placeholder="Line2"/><br>
            </br>
            <InputControl placeholder="Line3"/><br>
            </br>
            <InputControl placeholder="Line4"/><br>
            </br>
        </div>
        
    </div>
    );
    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.tech"/>
                </div>
                <InputControl 
                    label = "College/School name"
                    placeholder = "Enter your college/school name"
                    />
            <div className={styles.row}>
                <InputControl
                label="Start Date"
                type ="date"
                placeholder="Enter the start date"
                />
                <InputControl
                label="End Date"
                type ="date"
                placeholder="Enter the end date"
                />

                </div>
        </div>
    );
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Name" 
                placeholder ="Enter your full name e.g. Megha"
                />
                <InputControl 
                label="Title" 
                placeholder="Enter title eg. Frontend developer"
                />
                </div>
            <div className={styles.row}>
            <InputControl
                label="Linked In"
                placeholder = "Enter LinkedIn profile link"
            />
            <InputControl
                label="GitHub"
                placeholder= "Enter GitHub profile link"
                />
            </div>
            <div className={styles.row}>
            <InputControl
                label="Email"
                placeholder = "Enter Email id"
            />
            <InputControl
                label="mobile number"
                placeholder= "Enter mobile number"/>
            </div>
        </div>
    );
    const achievementBody =(
        <div className={styles.detail}>
            <div className={styles.column}>
            <label>List your Achievements</label>
            <InputControl placeholder="Line1"/><br>
            </br>
            <InputControl placeholder="Line2"/><br>
            </br>
            <InputControl placeholder="Line3"/><br>
            </br>
            <InputControl placeholder="Line4"/><br>
            </br>
             </div>
        </div>
    );
    const summaryBody = (
        <div className={styles.detail}>
        <InputControl
            label="Summary"
            placeholder= "Enter your objective/summary"
            />
        </div>
        );
    const otherBody = (
        <div>
        <InputControl
            label="Other"
            placeholder= "Enter something about yourself"
            />
        </div>
        );


    const generateBody = () => {
        switch(sections[activeSectionKey]) {
            case sections.basicInfo: 
            return basicInfoBody;
            case sections.workExp: 
            return workExpBody;
            case sections.project:
            return projectBody;
            case sections.education: 
            return educationBody;
            case sections.achievements: 
            return achievementBody;
            case sections.summary: 
            return summaryBody;
            case sections.other: 
            return otherBody;
            default: return null;
        }
    };

    return(
        <div className = {styles.container}>
            <div className = {styles.header}>
                {Object.keys(sections)?.map((key) => (
                <div 
                    className = {`${styles.section} ${
                        activeSectionKey === key ? styles.active : ""
                    }`}
                    key={key}
                    onClick={()=>setActiveSectionKey(key)}
                    >
                     
                {sections[key]}
                </div>
            ))}
            </div>
            <div className={styles.body}>
                {generateBody()}

            </div>
            </div>
            
    )}
export default Editor;
