import { Component } from "react";

type ClasscomState = {
    name: string;
    age: number;
    place: string;
}

class Classcom extends Component<{}, ClasscomState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: 'Akshay Kumar',
            age: 19,
            place: "Chennai"
        }
    }

    changeState() {
        // alert('Hello')
        this.setState({
            name: 'akshay',
            age: 20
        })
    }

    render() {
        return (
            <>
                <h1>Class Component</h1>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <button className="btn btn-primary" onClick={() => this.changeState()}>Change name</button>
            </>
        )
    }
}

export default Classcom