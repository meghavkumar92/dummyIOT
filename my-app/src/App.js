import  React from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PersonsListPost from './PersonsListPost';
import PersonsListGet from './PersonsListGet';

const serverUrl = 'http://192.168.56.1:5000';
const http = axios.create({baseUrl: serverUrl,});

export default class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = {counter : 0, temperature : [], persons: []};
    }

    updateState(data)
    {
        const {counter, temperature} = this.state;
        alert(data.temperature)
        this.setState({counter: data.counter});
        //this.setState({temperature : data.temperature});
        temperature.push(data.temperature);
    }


    onMessageSend()
    {
        const {counter, username} = this.state;
        //http.post('/', {counter})
        axios.post(serverUrl,{counter})
        .then((response) => this.updateState(response.data))
        .catch((err) => console.log(err))
        //this.setState({counter: counter+1}))
    }
    onMessageReceive()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {console.log(res); this.setState({persons: res.data});});
    }

    render()
    {
        const {temperature} = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Welcome to React, happy reacting!!! </h1>
            <p>
              This is an example page. I want to run some code to display temperature.
             </p>
            <p> Click counts: {this.state.counter}         </p>
            <p> Temperature: {this.state.temperature}         </p>
          <button
            className="App"
            onClick={() => this.onMessageSend()}>
        {this.state.counter}
      </button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      <ul>
        { this.state.temperature.map(temp => <li>{temp}</li>)}
      </ul>
      </div>
      );
    }
}
