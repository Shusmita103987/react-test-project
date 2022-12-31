import { useEffect, useState } from 'react'
import Data from './Data';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setTodos (data))
    },[])
    console.log(todos)

    return (
        <div>
            {
                todos.map((data)=><Data data={data}/>)
            }
        </div>
    )
}

export default Todos
