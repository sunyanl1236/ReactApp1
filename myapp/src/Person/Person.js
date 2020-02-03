import React from 'react';
import styled from 'styled-components';

//styled.后面可跟HTML TAG, styled.div``is already a component. div`` is a method not using (), can pass text
//do not use .Person selector in div``
const StyledDiv = styled.div` 
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) { 
        width: 450px;
    }
`;

const person = (props)=> {

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/> 
        </StyledDiv>
    )
}

export default person;