import TodoList from "./components/TodoList";


function App() {
  return (
    <>
    <div className="container p-0 border-0" style={{width:"700px",height:"100vh",border:"0"}}>
      <div className="card">
        <div className="card-body">
        <TodoList/>
        </div>
      </div>
    
    </div>
      
    </>
  );
}

export default App;
