import { Button, Card } from 'react-bootstrap';
import { GitHub } from 'react-feather';

export default function ProjectCard(props) {
  return (
    <Card style={{ background: '#9AA5B1', width: '18rem' }}>
      <Card.Img variant="top" src={props.picture} width={260} height={160} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button className="card-btn" variant="secondary">
          <a href={props.code} target="_blank" rel="noreferrer">
            <GitHub /> Code
         </a>
        </Button>
      </Card.Body>
    </Card>
  );
}