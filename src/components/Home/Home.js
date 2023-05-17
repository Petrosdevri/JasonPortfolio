import './Home.css';
import { Button, Stack } from 'react-bootstrap';
import Type from "./Type"

export default function Home() {
    return (
        <div name='home'>
            <Stack className='hero' gap={3}>
                <h1>Jason <span className='name'>Kehagias</span></h1>
                <h2><Type /></h2>
                <Stack className='presentation-btns' direction='horizontal' gap={3}>
                    <Button className='presentation-btn' href='/about' size='lg' variant='secondary'>About Me</Button>
                    <Button className='presentation-btn' href='/projects' size='lg' variant='secondary'>Projects</Button>
                </Stack>
            </Stack>
        </div>
    )
}