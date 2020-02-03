import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person.js';
 
/*${ } used to insert dynamic things in styled string */
//need add & before :hover
const StyledButton = styled.button`
      background-color: ${props =>  props.alt? 'red' : 'green'}; 
      color: White;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover { 
        background-color: ${props => props.alt? 'salmon': 'lightgreen'};
        color: black;
      }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'dsg23', name: 'Max', age: 28 },
      { id: 'fdsg2', name: 'Menu', age: 29 },
      { id: 'cgf6', name: 'SS', age: 26 }
    ], 
    otherStste: 'Some other value',
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); 
    // const persons = [...this.state.persons];
    persons.splice(personIndex, 1); 
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, index) =>{
    const personIndex = this.state.persons.findIndex(p => { return index === p.id});

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value; 

    const persons = [...this.state.persons]; 
    persons[personIndex] = person; 
    this.setState({persons: persons}); 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    let persons = null;

    if (this.state.showPerson){
      persons = (
      <div> 
        {this.state.persons.map( (person,index) => { 
          return <Person 
          name = {person.name} 
          age={person.age} 
          click = {() => this.deletePersonHandler(index)}
          key={person.id} 
          changed = {(event) => {this.changeNameHandler(event, person.id)}}/> 
        })}
      </div> )
    }

    const classes = []; 
    if(this.state.persons.length <=2)
      classes.push('red');
    if (this.state.persons.length <= 1) 
      classes.push('bold');

    return ( 
        <div className="App">
          <h1>Hi, Im react</h1>
          <p className={classes.join(' ')}>This is working</p> 
        <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>Toggle person</StyledButton> 
            {persons}
        </div>
    );
  }
}

export default App;