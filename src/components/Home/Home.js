import './Home.css';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Type from "./Type"

export default function Home() {
    return (
        <div name='home'>
            <Stack className='hero' gap={3}>
                <h1>Jason <span className='name'>Kehagias</span></h1>
                <h2><Type /></h2>
                <Stack className='presentation-btns' direction='horizontal' gap={3}>
                    <Button className='presentation-btn' size='lg' variant='secondary'><Link smooth={true} to='about'>About Me</Link></Button>
                    <Button className='presentation-btn' size='lg' variant='secondary'><Link smooth={true} to='projects'>Projects</Link></Button>
                </Stack>
            </Stack>
        </div>
    )
}