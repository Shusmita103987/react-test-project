import React, { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTods] = useState([])

    const addTodo = () => {
        setTods([...todos, todo])
    }


    // const datas = [1,2,3,6,4,]
    // const datas2 = [...datas,9,666,366,1654,98]
    // console.log(datas2)
    return (
        <>
            <div className='d-flex'>
                <input className='form-control' onChange={(e) => setTodo(e.target.value)} />
                <button className='btn btn-primary ms-3' onClick={addTodo}>Add Todo</button>
            </div>

            <div>
                <ul>
                    {
                        todos.map(data=><li>{data}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList
