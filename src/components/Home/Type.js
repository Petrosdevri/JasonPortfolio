import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter options={{
            strings: ['Data Scientist',
                'Data Analyst',
                'Business Intelligence Specialist',
                'Data Engineer',],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }} />
    )
}