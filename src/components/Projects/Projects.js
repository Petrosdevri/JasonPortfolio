import './Projects.css';
import ProjectCard from './ProjectCard';
import { Stack } from 'react-bootstrap';
import AmsterdamHousing from '../../img/projects/Amsterdam Housing.png';
import CaliforniaHousingPrices from '../../img/projects/California Housing Prices.png';
import CountriesScraping from '../../img/projects/Countries Scraping.png';
import CreditCardFraudDetection from '../../img/projects/Credit Card Fraud Detection.png';
import ForbesSportEarnings from '../../img/projects/Forbes Sport Earnings.png';
import SpaceXProject from '../../img/projects/SpaceX Project.png';
import StudentsExams from '../../img/projects/Students Exams.png';
import SQLMurderMystery from '../../img/projects/SQL Murder Mystery.png';
import SQLSummerOlympics from '../../img/projects/SQL Summer Olympics.png';

export default function Projects() {
    return (
        <div className='projects' name='projects'>
            <h1>Projects</h1>
            <Stack className='projects-stack' direction='horizontal' gap={5}>
                <ProjectCard title='Amsterdam Housing' description='A Beautiful Soup & Requests project which tracks records from Amsterdam real estate market.' picture={AmsterdamHousing} code='https://github.com/JasonKeha/Scraping_Projects/blob/main/Amsterdam_Housing_(Scraping_Project).ipynb' />
                <ProjectCard title='California Housing Prices' description='An alternative way to track housing prices in California using Keras, Matplotlib, NumPy & Pandas.' picture={CaliforniaHousingPrices} code='https://github.com/JasonKeha/Machine_Learning-ML-/blob/main/California_Housing_Prices_(ML).ipynb' />
                <ProjectCard title='Countries Scraping' description='A Beautiful Soup, Pandas & Requests project which lists country data from a website.' picture={CountriesScraping} code='https://github.com/JasonKeha/Scraping_Projects/blob/main/Countries_(Scraping_Project).ipynb' />
            </Stack>
            <Stack className='projects-stack' direction='horizontal' gap={5}>
                <ProjectCard title='Credit Card Fraud Detection' description='An ML model built with Keras, NumPy, Pandas and Seaborn to detect credit card fraud cases.' picture={CreditCardFraudDetection} code='https://github.com/JasonKeha/Machine_Learning-ML-/blob/main/Credit_Card_Fraud_Detection_(ML).ipynb' />
                <ProjectCard title='Forbes Sport Earnings' description='Tracks sport earnings based on a Forbes dataset using aforementioned libraries and prints out results.' picture={ForbesSportEarnings} code='https://github.com/JasonKeha/Exploratory_Data_Analysis-EDA-/blob/main/Forbes%20Sport%20Earnings%20(EDA).ipynb' />
                <ProjectCard title='SpaceX Megaproject' description='A megaproject combining data analysis to investigate into SpaceX data.' picture={SpaceXProject} code='https://github.com/JasonKeha/Space_X_Megaproject' />
            </Stack>
            <Stack className='projects-stack' direction='horizontal' gap={5}>
                <ProjectCard title='Students Exams' description='Tracks student performance based on a dataset using aforementioned libraries and prints out results.' picture={StudentsExams} code='https://github.com/JasonKeha/Exploratory_Data_Analysis-EDA-/blob/main/Students%20Exams%20(EDA).ipynb' />
                <ProjectCard title='SQL Murder Mystery' description='A thrilling mystery about a murder in SQL City uncovered in MySQL and Pandas.' picture={SQLMurderMystery} code='https://github.com/JasonKeha/Structured_Query_Language-SQL-/blob/main/The_SQL_Murder_Mystery.ipynb' />
                <ProjectCard title='SQL Summer Olympic Medals' description='A MySQL & Pandas project which displays medals won by every country in every Summer Olympics competition.' picture={SQLSummerOlympics} code='https://github.com/JasonKeha/Structured_Query_Language-SQL-/blob/main/SQL_Summer_Olympic_Medals.ipynb' />
            </Stack>
        </div>
    );
}
