import React from 'react';
import Axios from 'axios';
import Form from './Form';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            todos: [],
            completionDate: ''
        }

        //bind methods to instance here
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //event-handlers

    handleChange(e) {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }

    handleDateChange(e) {
        this.setState({
            completionDate: e.target.value
        })
    }

    handleSubmit() {
        Axios.post('/todos', {
            params: {
                newTodo: this.state.input,
                completionDate: this.state.completionDate
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h1>Enter a Todo</h1>
                <Form 
                handleChange={this.handleChange} 
                handleDateChange={this.handleDateChange}
                handleSubmit={this.handleSubmit}
                />
                <h3>Pending Todos</h3>
            </div>
        )
    }
}

export default App;