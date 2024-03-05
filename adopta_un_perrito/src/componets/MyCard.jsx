import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = (props) => {
    return (
            <Card style={{ width: '17rem' }} className='card'>
                <Card.Img src={props.imagen}/>
                <Card.Body>
                    <Card.Title className='card_title' >{props.title}  </Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
                <Tags bg={props.bg} buttonText={props.buttonText} />
            </Card>
    )
};

export default MyCard;