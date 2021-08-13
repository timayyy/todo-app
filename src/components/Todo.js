import React, { useEffect, useState } from 'react'
import styled from "styled-components";


const Styledli = styled.li`
position: relative;
font-size: 24px;
input + label {
    background-image: url('/images/unchecked.svg');
    background-repeat: no-repeat;
    background-position: center left;
}
input:checked + label {
    background-image: url('/images/checked.svg');
}
&.todo-completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}
&:hover button {
    display:block;
}
.editing-input label {
    display:none;
}
.editing-input .edit-input {
    display: block !important;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    position: relative;
    outline: none;
}
`
const CheckBox = styled.input`
text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;

`
const Label = styled.label`
word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
`

const Button = styled.button`
display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background: none;
    border:none;
    appearance: none;
    padding: 0;
    &:after {
        content: '×';
    }
    &:hover {
        color: #af5b5e;
    }
`

const Todo = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState(true)
    const [editedText, setEditedText] = useState('')


    useEffect(() => {
        setEditedText(todo.text)
    }, [])


    const deleteHandler = () => {
        setTodos(todos.filter(x => x.id !== todo.id))
    }



    const completeHandler = () => {

        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    const editHandler = (e) => {
        // console.log(e.key)
        if (e.key === 'Enter') {
            setTodos(todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item, text: editedText
                    }
                }
                return item;
            }))
            setEdit(true)
        }

    }

    const handleChange = (e) => {
        setEditedText(e.target.value)
    }
    const handleOnBlur = (e) => {
        setEdit(true)
        setEditedText(todo.text)
    }
    return (
        <Styledli className={todo.completed ? "todo-completed" : ""}>
            <div className={edit === false ? "editing-input" : ""}>
                <CheckBox onClick={completeHandler} type="checkbox" checked={todo.completed} />

                <Label onDoubleClick={() => setEdit(!edit)} htmlFor="todo">{todo.text}</Label>
                <Button onClick={deleteHandler}></Button>


                <input
                    onBlur={handleOnBlur}
                    style={{ display: "none" }}
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                    className="edit-input"
                    value={editedText}
                    type="text"
                    onChange={handleChange}
                    onKeyDown={editHandler}
                />
            </div>
        </Styledli>
    )
}

export default Todo
