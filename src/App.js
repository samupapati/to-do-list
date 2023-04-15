import Menu from "./Components/Menu";
import Modal from "./Components/Modal";
import Tasks from "./Components/Tasks";
import { useState } from 'react'

function App() {

    const [id, setId] = useState(0)
    const [tasks, setTask] = useState([])
    const addTask = task => {
      let taskObj = {
        taskId: id,
        taskName: task
      }
      setId(id + 1)
      setTask([...tasks, taskObj])
    }
    function deleteTask(id){
      setTask(tasks.filter(taskObj => taskObj.taskId !== id))
    }
    const [modal, setModal] = useState(false);
    function toggleModal(){
      setModal(!modal)
    }
    function modifyTask(newTaskName, id){
      let newTaskObj = {taskId: id, taskName: newTaskName}
      setTask(tasks.forEach(taskObj => taskObj.taskId === id ? taskObj = newTaskObj : ''))
      console.log(tasks) // parei aqui 
    }

    return (
      <div className="container">
        <Menu handleTask={addTask}/>
        {/* <Tasks task={tasks}/> */}
        {tasks.map(taskObj => 
            <div>
              <span key={taskObj.taskId}>
                {taskObj.taskName}
                <box-icon onClick={() => deleteTask(taskObj.taskId)} type='solid' name='x-circle'></box-icon>
                <box-icon onClick={() => toggleModal()} name='cog' ></box-icon>
              </span>
              {modal === true ? <Modal handleModify={modifyTask} id={taskObj.taskId}/> : ''}
            </div>)}
      </div>
    );
}

export default App;
