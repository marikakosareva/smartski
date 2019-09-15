import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Calculator from './components/Calculator.js';

class App extends Component{

  state = {
    isStart: true
  }

  fromStart = () => {
    this.setState({isStart: true});
  }

  notFromStart = () => {
    this.setState({isStart: false});
  }

  render () {
    console.log("Render App", this.state.isStart);

    return (

        <div className="App">
          <header className="App-header">
            <Container>
              <Row>
                <Col sm={12} md={2}>
                  <Button id="logoTitle" variant="link" onClick={this.fromStart}>SmartSki</Button>
                </Col>
                <Col xs={12} md={{span: 3, offset: 7}}>
                  <ButtonGroup id="langButton">
                    <Button variant="outline-primary" onClick={() => alert("comeback to rus")}>Ru</Button>
                    <Button variant="outline-primary" onClick={() => alert("comeback to en")}>En</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Container>
            <p>We will help you to choose your ideal skis!</p>
          </header>
          <div style={{"marginTop": "10%"}}>
            <Calculator changeStart={this.notFromStart} isStart={this.state.isStart} />
          </div>
        </div>
    );
  }
}

export default App;
