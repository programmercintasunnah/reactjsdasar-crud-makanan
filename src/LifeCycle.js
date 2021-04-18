import React, { Component } from 'react';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            makanan: 'bakso',
            data: {}
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }

    render() {
        return (
            <div>
                <h2>{this.state.data.title}</h2>
            </div>

        )
    }
}