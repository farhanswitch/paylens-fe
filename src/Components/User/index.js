// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import '../../Styles/Components/UserTranscation/UserTranscation.css'

function UserTranscation(props) {
  // Props Data Users
  const { picture, name, transaction, nominal } = props;
  return (

    <Card className='UserTranscation-Comp mt-2'>
      <Card.Body className='d-flex justify-content-space-between align-items-center'>

        <img src={picture} alt='Profile' />
        <div className='d-flex flex-column align-items-center'>
          <h6>{name}</h6>
          <p>{transaction}</p>
        </div>
        <h6>{nominal}</h6>

      </Card.Body>
    </Card>
  );
}

export default UserTranscation;