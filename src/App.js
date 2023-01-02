
import Counter from './Component/Counter';
import TodoList from './Component/TodoList';
import Todos from './Component/Todos';

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      {/* <Todos/> */}
      {/* <Counter /> */}
      <TodoList />
    </div>
  );
}

export default App;
