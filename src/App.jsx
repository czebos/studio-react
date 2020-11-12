import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="App">
                <header>
                    <p>
                        Welcome to the Shop!
                    </p>
                   
                </header>
                <ItemMenu>

                </ItemMenu>
            </div>
        );
    }
}

class ItemMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = { selected: null }


    }

    render() {
        const order = () => { alert("you bought item " + this.state.selected) }
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const listitems = numbers.map((number) => <ListGroup.Item action onClick={() => { this.state.selected = number }}>Item {number}</ListGroup.Item>)
        return (
            <ListGroup >
                {listitems}
            <ListGroup.Item action onClick={ order}> Buy Item</ListGroup.Item>

        </ListGroup>)
    }

}

