import React from 'react';
import './TechStack.css';
import { Stack } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { Element } from 'react-scroll';
import { SiMicrosoftexcel as Excel, SiKeras as Keras, SiMysql as MySQL, SiNumpy as NumPy, SiPandas as Pandas, SiPowerbi as PowerBI, SiPython as Python, SiScikitlearn as ScikitLearn, SiTensorflow as TensorFlow } from '@icons-pack/react-simple-icons';
import Matplotlib from '../../img/icons/matplotlib.svg.png';
import Requests from '../../img/icons/requests.png';
import Seaborn from '../../img/icons/seaborn.png';

export default function TechStack() {
    return (
        <Element name='tech-stack'>
            <Stack className='tech-stack1' gap={4}>
                <h2>Tech Stack</h2>
                <Stack className="tech-stack" direction='horizontal' gap={2}>
                    <Stack className='sq-stack python'>
                        <LazyLoad once><Python className='sq-stack-icon' size={115} title='Python' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack excel'>
                        <LazyLoad once><Excel className='sq-stack-icon' size={115} title='Excel' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack mysql'>
                        <LazyLoad once><MySQL className='sq-stack-icon' size={115} title='MySQL' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack requests'>
                        <LazyLoad once><img src={Requests} alt='requests' className='sq-stack-icon' width={115} height={115} /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack keras'>
                        <LazyLoad once><Keras className='sq-stack-icon' size={115} title='Keras' /></LazyLoad>
                    </Stack>
                </Stack>
                <Stack className="tech-stack" direction='horizontal' gap={2}>
                    <Stack className='sq-stack sq-stack2 numpy'>
                        <LazyLoad once><NumPy className='sq-stack2-icon' size={100} title='NumPy' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 tensorflow'>
                        <LazyLoad once><TensorFlow className='sq-stack2-icon' size={100} title='TensorFlow' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 scikit-learn'>
                        <LazyLoad once><ScikitLearn className='sq-stack2-icon' size={100} title='ScikitLearn' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 powerbi'>
                        <LazyLoad once><PowerBI className='sq-stack2-icon' size={115} title='PowerBI' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 pandas'>
                        <LazyLoad once><Pandas className='sq-stack2-icon' size={100} title='Pandas' /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 matplotlib'>
                        <LazyLoad once><img src={Matplotlib} alt='matplotlib' className='sq-stack2-icon' width={115} height={50} /></LazyLoad>
                    </Stack>
                    <Stack className='sq-stack sq-stack2 seaborn'>
                        <LazyLoad once><img src={Seaborn} alt='seaborn' className='sq-stack2-icon' width={115} height={50} title='' /></LazyLoad>
                    </Stack>
                </Stack>
            </Stack>
        </Element>
    );
}
