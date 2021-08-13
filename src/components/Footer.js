import React from 'react'
import styled from "styled-components";


const StyledFooter = styled.footer`
color: #777;
padding: 10px 15px;
// height: 20px;
text-align: center;
border-top: 1px solid #e6e6e6;
display: flex;
justify-content: space-between;

.todo-nav {
    width: 200px;
    display:flex;
    justify-content: space-evenly;

    span {
        cursor: pointer;
        padding:5px;

        &:hover {
            border-color: rgba(175, 47, 47, 0.1);
            border: 1px solid
        }
    }
}

.todo-count{
    align-self:center;
    text-align: left;

    strong {
        font-weight: 300;
    }
}

// ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     position: absolute;
//     right: 0;
//     left: 0;

//     li {
//         display: inline;

//         span {
//             color: inherit;
//             margin: 3px;
//             padding: 3px 7px;
//             text-decoration: none;
//             border: 1px solid transparent;
//             border-radius: 3px;
//         }
//     }
// }

button {
    // float: right;
    // position: relative;
    // line-height: 20px;
    align-self:center;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
}

// &:before {
//     content: '';
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     height: 50px;
//     overflow: hidden;
//     box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
// }
`

const Footer = ({ count, completedTodoCount, status, setStatus, todos, setTodos }) => {
    const statusHandler = (status) => {
        setStatus(status)
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }
    return (
        <StyledFooter>
            <span className="todo-count">
                <strong>{count}</strong> {count > 1 ? 'items' : 'item'} left
            </span>
            <div className="todo-nav">

                <span onClick={() => statusHandler("all")}>All</span>


                <span onClick={() => statusHandler("active")}>Active</span>


                <span onClick={() => statusHandler("completed")}>Completed</span>

            </div>

            {completedTodoCount > 0 && (
                <div style={{ alignSelf: "center" }}>
                    <button onClick={clearCompleted}>
                        Clear completed
                    </button>
                </div>
            )}

        </StyledFooter>
    )
}

export default Footer
