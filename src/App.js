import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import Footer from "./components/Footer";


const Container = styled.section`
background: #fff;
max-width: 550px;
margin-left: auto;
margin-right: auto;
`

const App = () => {
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState('');
  const [completedTodoCount, setCompletedTodoCount] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([])
  const [status, setStatus] = useState('all')

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  useEffect(() => {
    filterHandler()
    saveToLocalStorage()
  }, [todos, status])

  useEffect(() => {
    window.scrollTo(0, 0)
    const todoCount = todos.reduce(function (total, todo) {
      return todo.completed ? total : total + 1;
    }, 0);
    const completedTodoCount = todos.length - todoCount;
    setTodoCount(todoCount)
    setCompletedTodoCount(completedTodoCount)
  }, [todos])

  const filterHandler = () => {
    switch (status) {
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("my-todos", JSON.stringify(todos))
  }

  const getFromLocalStorage = () => {
    if (localStorage.getItem("my-todos") === null) {
      localStorage.setItem("my-todos", JSON.stringify([]))
    } else {
      const savedTodos = JSON.parse(localStorage.getItem("my-todos"))
      setTodos(savedTodos)
    }
  }

  return (
    <Container className="todo-app">
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} todoInput={todoInput} setTodoInput={setTodoInput} />
      <TodoList todos={filteredTodos} setTodos={setTodos} todoInput={todoInput} setTodoInput={setTodoInput} setFilteredTodos={setFilteredTodos} />

      {
        todos.length > 0 && <Footer count={todoCount} completedTodoCount={completedTodoCount} status={status} setStatus={setStatus} todos={todos} setTodos={setTodos} />
      }
    </Container>
  );
}

export default App;
