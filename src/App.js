import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'reactstrap';
import FriendCard from './components/daCard';

function App() {
  return (
   <div class="container">
      <Row className="primary">
        <Col>
      <h1> Chart me here </h1>
      </Col>
      </Row>
      <Row>
        <Col> 
       <FriendCard /> 
        {/* Table should dynamically populate here  */}
        </Col>
      </Row>
    </div>
  
  );
}

export default App;
