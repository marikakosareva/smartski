import React, {Component} from 'react';
import Arrow from "./Arrow";
import Button from "react-bootstrap/Button";
import BlockFirst from "./BlockFirst";
import BlockSecond from "./BlockSecond";
import BlockThird from "./BlockThird";
import Form from "react-bootstrap/Form";
import '../index.css';


class Calculator extends Component {

    constructor (props) {
        super(props);
        this.state = {
            blockNumber: 0,
            gender: 0,
            age: 0,
            height: 0,
            weight: 0,
            pulse1: 0,
            pulse2: 0,
            pulse3: 0,
            fit: 0,
            piste: 0,
            speed: 0,
            mountainHeight: 0,
            level: 0,
            ambitions: 0,
            length: 0,
            width: 0,
        }
        console.log("constructor");
    }

    setGender = (val) => {
        this.setState({gender: val[1]});
    }

    setAge = (val) => {
        this.setState({age: Number(val.target.value)});
    }

    setHeight = (val) => {
        this.setState({height: Number(val.target.value)});
    }

    setWeight = (val) => {
        this.setState({weight: Number(val.target.value)});
    }

    setFit = (val) => {
        this.setState({fit: Number(val.target.value)});
    }

    setPiste = (val) => {
        this.setState({piste: Number(val.target.value)});
    }

    setSpeed = (val) => {
        this.setState({speed: Number(val.target.value)});
    }

    setMountainHeight = (val) => {
        this.setState({mountainHeight: Number(val.target.value)});
    }

    setLevel = (val) => {
        this.setState({level: Number(val.target.value)});
    }

    setAmbitions = (val) => {
        this.setState({ambitions: Number(val.target.value)});
    }

    nextBlock = () => {
        this.setState({blockNumber: this.state.blockNumber + 1});
        //this.props.changeBlock(this.state.blockNumber);
    }

    prevBlock = () => {
        this.setState({blockNumber: this.state.blockNumber - 1});
        //this.props.changeBlock(this.state.blockNumber);
    }

    calculate = () => {
        this.state.length = this.state.height - 15;
        this.state.width = 65;
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isStart === true){
            props.changeStart();
            return {
                blockNumber: 0,
                gender: 0,
                age: 0,
                height: 0,
                weight: 0,
                pulse1: 0,
                pulse2: 0,
                pulse3: 0,
                fit: 0,
                piste: 0,
                speed: 0,
                mountainHeight: 0,
                level: 0,
                ambitions: 0,
                length: 0,
                width: 0,
            };
        }

    }

    render() {

        if (this.state.blockNumber === 0) {
            return <Button style={{fontSize: 30}} variant="outline-primary" onClick={this.nextBlock}>Start!</Button>
        } else if (this.state.blockNumber === 1) {
            return (
                <div>
                    <BlockFirst
                        gender={this.state.gender}
                        setGender={this.setGender}
                        age={this.state.age}
                        setAge={this.setAge}
                        height={this.state.height}
                        setHeight={this.setHeight}
                        weight={this.state.weight}
                        setWeight={this.setWeight}
                    />
                    <div className="arrowsBlock">
                        <Arrow disabled={true} side={"left"} onClickFun={this.prevBlock} />
                        <Arrow disabled={false} side={"right"} onClickFun={this.nextBlock} />
                    </div>
                </div>
            );
        } else if (this.state.blockNumber === 2) {
            return (
                <div>
                    <BlockSecond
                        fit={this.state.fit}
                        setFit={this.setFit}
                        piste={this.state.piste}
                        setPiste={this.setPiste}
                        speed={this.state.speed}
                        setSpeed={this.setSpeed}
                    />
                    <div className="arrowsBlock">
                        <Arrow disabled={false} side={"left"} onClickFun={this.prevBlock}/>
                        <Arrow disabled={false} side={"right"} onClickFun={this.nextBlock}/>
                    </div>
                </div>
            );
        } else if (this.state.blockNumber === 3) {
            return (
                <div>
                    <BlockThird
                        mountainHeight={this.state.mountainHeight}
                        setMountainHeight={this.setMountainHeight}
                        level={this.state.level}
                        setLevel={this.setLevel}
                        ambitions={this.state.ambitions}
                        setAmbitions={this.setAmbitions}
                    />
                    <div className="arrowsBlock">
                        <Arrow disabled={false} side={"left"} onClickFun={this.prevBlock}/>
                        <Arrow disabled={false} side={"right"} onClickFun={() =>  {
                            this.calculate();
                            this.setState({blockNumber: 4});
                        } }/>
                    </div>
                </div>
            );
        } else if (this.state.blockNumber === 4) {
            return (
                <div>
                    <h5>Thanks for your patience!</h5>
                    <h5>Skis with these parameters will suit you:</h5>
                    <h2>Length: {this.state.length} cm</h2>
                    <h2>Width: {this.state.width} mm</h2>
                </div>
            );
        }
    }
}

export default Calculator;