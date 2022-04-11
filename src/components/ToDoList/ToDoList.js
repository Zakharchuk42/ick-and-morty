import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '../Card/Card'
import List from '../List/List'

import './ToDoList.scss'


const ToDoList = () => {
  const [item, setItem] = useState('')
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])

  useEffect(()=>localStorage.setItem('todo', JSON.stringify(todo)), [todo])

  const newToDo = () => {
    const newItem = {
      id: Date.now(),
      text: item,
      done: false,
    }
    setTodo((todo) => [...todo, newItem])
    setItem('')
  }

  const removeToDo = (id) => {
    setTodo(todo.filter(item=>item.id !== id))
  }


  const doneToDo = (id) => {
    let index = todo.map(el=>el.id).indexOf(id)
    todo[index].done = !todo[index].done
    setTodo([...todo])
  }

  return (
    <div className={`ToDoList`}>
      <div className={`ToDoList__wrapper`}>
        <Card>
          <div className={`ToDoList__header`}>
            <div className={`ToDoList__title`}>
              To-Do List
            </div>
            <div className={`ToDoList__functional`}>
              <TextField
                label="Add To-Do"
                value={item}
                onChange={(e)=>setItem(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={()=>newToDo()}
              >
                Add
              </Button>
            </div>
          </div>
          <div className={`ToDoList__body`}>
            {todo.map(el => <List key={el.id} el={el} removeToDo={removeToDo} doneToDo={doneToDo} />)}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ToDoList