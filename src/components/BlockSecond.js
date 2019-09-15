import React, {Component} from 'react';
import Arrow from "./Arrow";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";


class BlockSecond extends Component {

    render () {

        return (
            <Container>
                <Row>
                    <Col sm={12} md={{span: 10, offset: 1}}>
                       <Form>
                            <Form.Group as={Row} value = {this.props.fit} onChange={this.props.setFit}>
                                <Form.Label column sm="2">
                                    Estimate how fit you are
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check inline type="radio" label="1" value={1} name="fit" checked={this.props.fit == 1} />
                                    <Form.Check inline type="radio" label="2" value={2} name="fit" checked={this.props.fit == 2} />
                                    <Form.Check inline type="radio" label="3" value={3} name="fit" checked={this.props.fit == 3} />
                                    <Form.Check inline type="radio" label="4" value={4} name="fit" checked={this.props.fit == 4} />
                                    <Form.Check inline type="radio" label="5" value={5} name="fit" checked={this.props.fit == 5} />
                                    <Form.Check inline type="radio" label="6" value={6} name="fit" checked={this.props.fit == 6} />
                                    <Form.Check inline type="radio" label="7" value={7} name="fit" checked={this.props.fit == 7} />
                                    <Form.Check inline type="radio" label="8" value={8} name="fit" checked={this.props.fit == 8} />
                                    <Form.Check inline type="radio" label="9" value={9} name="fit" checked={this.props.fit == 9} />
                                    <Form.Check inline type="radio" label="10" value={10} name="fit" checked={this.props.fit == 10} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} value = {this.props.piste} onChange={this.props.setPiste}>
                                <Form.Label column sm="2">
                                    Where you ski more often
                                </Form.Label>
                                <Col sm={10}>
                                    <span>on piste</span>
                                    <Form.Check inline type="radio" label="1" value={1} name="piste" checked={this.props.piste == 1} />
                                    <Form.Check inline type="radio" label="2" value={2} name="piste" checked={this.props.piste == 2} />
                                    <Form.Check inline type="radio" label="3" value={3} name="piste" checked={this.props.piste == 3} />
                                    <Form.Check inline type="radio" label="4" value={4} name="piste" checked={this.props.piste == 4} />
                                    <Form.Check inline type="radio" label="5" value={5} name="piste" checked={this.props.piste == 5} />
                                    <Form.Check inline type="radio" label="6" value={6} name="piste" checked={this.props.piste == 6} />
                                    <Form.Check inline type="radio" label="7" value={7} name="piste" checked={this.props.piste == 7} />
                                    <Form.Check inline type="radio" label="8" value={8} name="piste" checked={this.props.piste == 8} />
                                    <Form.Check inline type="radio" label="9" value={9} name="piste" checked={this.props.piste == 9} />
                                    <Form.Check inline type="radio" label="10" value={10} name="piste" checked={this.props.piste == 10} />
                                    <span>off piste</span>
                                </Col>
                            </Form.Group>

                           <Form.Group as={Row} value = {this.props.speed} onChange={this.props.setSpeed}>
                               <Form.Label column sm="2">
                                   How do you ski
                               </Form.Label>
                               <Col sm={10}>
                                   <span>maneuverable</span>
                                   <Form.Check inline type="radio" label="1" value={1} name="speed" checked={this.props.speed == 1} />
                                   <Form.Check inline type="radio" label="2" value={2} name="speed" checked={this.props.speed == 2} />
                                   <Form.Check inline type="radio" label="3" value={3} name="speed" checked={this.props.speed == 3} />
                                   <Form.Check inline type="radio" label="4" value={4} name="speed" checked={this.props.speed == 4} />
                                   <Form.Check inline type="radio" label="5" value={5} name="speed" checked={this.props.speed == 5} />
                                   <Form.Check inline type="radio" label="6" value={6} name="speed" checked={this.props.speed == 6} />
                                   <Form.Check inline type="radio" label="7" value={7} name="speed" checked={this.props.speed == 7} />
                                   <Form.Check inline type="radio" label="8" value={8} name="speed" checked={this.props.speed == 8} />
                                   <Form.Check inline type="radio" label="9" value={9} name="speed" checked={this.props.speed == 9} />
                                   <Form.Check inline type="radio" label="10" value={10} name="speed" checked={this.props.speed == 10} />
                                   <span>speed</span>
                               </Col>
                           </Form.Group>
                       </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BlockSecond;