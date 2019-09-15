import React, {Component} from 'react';
import Arrow from "./Arrow";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";


class BlockFirst extends Component {

    render () {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={{span: 6, offset: 3}}>
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm="2">
                                    Gender
                                </Form.Label>
                                <Col sm="10">
                                    <ToggleButtonGroup type="checkbox"  value = {this.props.gender} onChange={this.props.setGender}>
                                        <ToggleButton variant="outline-primary" value={1}>M</ToggleButton>
                                        <ToggleButton variant="outline-primary" value={2}>F</ToggleButton>
                                    </ToggleButtonGroup>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Age
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="number" value = {this.props.age === 0 ? '' : this.props.age} onChange={this.props.setAge} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Height
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="number" value = {this.props.height === 0 ? '' : this.props.height} onChange={this.props.setHeight}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Weight
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="number" value = {this.props.weight === 0 ? '' : this.props.weight} onChange={this.props.setWeight}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default BlockFirst;