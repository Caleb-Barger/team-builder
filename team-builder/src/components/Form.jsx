import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    width: 500px;
    align-items: flex-start;
    padding: 10px;
    button{
        margin-top: 10px;
        width: 100px;
    }
    label{
        margin: 5px;
    }
`

const Form = props => {
    const {values, onInputChange, onSubmit} = props
    return (
        <StyledForm>
            <label>
                Username: <input
                type='text'
                name='username'
                value={values.username}
                onChange={onInputChange}
                />
            </label>
            <label>
                Email: <input 
                type='text'
                name='email'
                value={values.email}
                onChange={onInputChange}
                />
            </label>
            <label>
                Role: <input 
                type='text'
                name='role'
                value={values.role}
                onChange={onInputChange}
                />
            </label>
            <label>
                Favorite Food: <input 
                type='text'
                name='favFood'
                value={values.favFood}
                onChange={onInputChange}
                />
            </label>
            <button onClick={onSubmit}>Submit</button>
        </StyledForm>
    )
}

export default Form