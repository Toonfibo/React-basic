import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <div className="card">
    <img src={props.coverimage} alt={props.name} style={{ width:"100%"}} />
    <div className="container">
      <h4><b>{props.name}</b></h4>
      <p>{props.detail}</p>
    </div>
  </div>
  );
}

export default MyCard;