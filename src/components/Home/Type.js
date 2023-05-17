import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter options={{
            strings: ['Aspiring Data Analyst',
                'Business Intelligence Specialist',
                'Data Scientist',
                'Data Engineer',],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }} />
    )
}