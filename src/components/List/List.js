import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import CardItem from '../CardItem/CardItem'

import './List.scss'

const List = ({el, doneToDo, removeToDo}) => {
  const {id, text, done} = el
  const isDone = done ? 'List List_done' : 'List'

  return (
    <CardItem>
      <div className={isDone}>
        {text}
        <div className={`List__buttons`}>
          <div className={`List__done`}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              onClick={()=>doneToDo(id)}
            />
          </div>
          <div className={`List__delete`}>
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={()=>removeToDo(id)}
            />
          </div>
        </div>
      </div>
    </CardItem>
  )
}

export default List