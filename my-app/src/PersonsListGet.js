import React from 'react';

import axios from 'axios';

const serverUrl = 'http://192.168.0.10:5000';
const http = axios.create({baseUrl: serverUrl,});
const url = `https://jsonplaceholder.typicode.com/users`;

export default class PersonList extends React.Component {
  state = { 
    persons: []
  }

  componentDidMount() {
    //const http1 = axios.create({baseUrl: url,});
    //http1.get()
    axios.get('https://jsonplaceholder.typicode.com/users').
    //axios.get('http://192.168.0.10:5000').
    //axios.get(serverUrl).
          then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons }); 
      })  
      .catch((err) => { console.log(err)});
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key ={person.id}>{person.name}</li>)}
      </ul>
        //<p> {this.state.persons} </p>
    )   
  }
}
