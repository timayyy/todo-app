import React from 'react'
import Todo from './Todo'
import styled from "styled-components";


const StyledUl = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`

const TodoList = ({ todos, setTodos, handleuncomplete, todoInput, setTodoInput, setFilteredTodos }) => {
    return (
        <div>
            <StyledUl>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} handleuncomplete={handleuncomplete} todoInput={todoInput} setTodoInput={setTodoInput} setFilteredTodos={setFilteredTodos} />
                ))}
            </StyledUl>

        </div>
    )
}

export default TodoList
