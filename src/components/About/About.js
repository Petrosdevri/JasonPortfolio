import React from 'react';
import './About.css';
import { Stack } from 'react-bootstrap';
import JasonKehagias from '../../img/photos/Jason Kehagias.jpg';

export default function About() {
    return (
        <div className='about' name='about'>
            <Stack className="about-me" direction="horizontal" gap={3}>
                <Stack gap={2}>
                    <h1>About <span className="name">Me</span></h1>
                    <h4>I am Jason Kehagias, an Aspiring Data Analyst living in Thessaloniki, Greece.</h4>
                    <p>As a (Big) Data Professional I have a strong passion for developing Data Models , Reports and Performance related insights. Since I can extract the Business Insights as a Data Scientist and as a Data Analyst/Business Intelligence Specialist then translate them into operational dashboard and Performance related insights, I can always develop a solution without any miscommunication with stakeholders. With Machine Learning experience I can also train models and predict trend and variables that reveal new insights and help the business have better results. Automating the processes concerning Data Extraction and Data Transformation also falls under my expertise.</p>
                </Stack>
                <img src={JasonKehagias} alt="Jason Kehagias" id='about-photo' />
            </Stack>
        </div>
    );
}