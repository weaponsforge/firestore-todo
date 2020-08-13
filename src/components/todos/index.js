import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from '../add_todo'
import { useFirestoreConnect } from 'react-redux-firebase'
import { FIRESTORE_COLLECTIONS } from '../../firebase'
import ToDoItem from '../todo_item'

const Todos = () => {
  const { displayName, uid } = useSelector((state) => state.firebase.auth)

  useFirestoreConnect({
    collection: `${FIRESTORE_COLLECTIONS.USERS}/${uid}/${FIRESTORE_COLLECTIONS.TODOS}`,
    storeAs: FIRESTORE_COLLECTIONS.TODOS,
  })

  const todos = useSelector((state) => state.firestore.data.todos)
  console.log(todos)
  return (
    <div>
      <h3>Hello {displayName}</h3>
      <h4>Todos</h4>
      <AddTodo />
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {todos &&
          Object.values(todos).map((todo) => (
            <li>
              <ToDoItem
                title={todo.title}
                isDone={todo.isDone}
                todoID={todo.todoID}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Todos