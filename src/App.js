import logo from './logo.svg';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import FriendCard from './components/daCard';
import Head from './components/header'

function App() {
  return (
    <>
      <Head />
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

        <footer>
          <h3 className="text-center"> Sticky footer here </h3>
        </footer>
      </div>
    </>
  );
}

export default App;
