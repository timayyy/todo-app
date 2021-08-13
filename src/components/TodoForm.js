import React from 'react'
import styled from "styled-components";


const StyledInput = styled.input`
    padding: 16px 16px 16px 60px;
    border: none !important;
    outline:none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    &:focus-visible {
        border:none;
    }
    &::placeholder {
        color: rgb(216,216,216);
        font-style: italic;
    }
`

const TodoForm = ({ todoInput, setTodoInput, setTodos, todos }) => {
    const todoTextHandler = e => {
        setTodoInput(e.target.value)
    }

    const submitTodoHandler = e => {
        if (e.key !== 'Enter') {
            return;
        }

        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.random() * 1000,
                text: todoInput,
                completed: false
            }
        ])
        setTodoInput("")
    }

    return (
        // <StyledForm>
        <div>

            <StyledInput placeholder="What needs to be done?" onChange={todoTextHandler} value={todoInput} type="text" onKeyDown={submitTodoHandler} />
        </div>
        // </StyledForm>
    )
}

export default TodoForm
