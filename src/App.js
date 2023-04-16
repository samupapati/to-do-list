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
      if(modal === true){
        setModal(!modal)
      }
    }
    const [idSaved, setIdSaved] = useState(null);
    const [modal, setModal] = useState(false);
    function toggleModal(currentId){
      setIdSaved(currentId)
      setModal(!modal)
    }
    function modifyTask(newTaskName){
      let newTask = []
      let newTaskObj = {taskId: idSaved, taskName: newTaskName}
      tasks.forEach((taskObj) => {
        if(taskObj.taskId === idSaved){
          newTask.push(newTaskObj)
        } else{
          newTask.push(taskObj)
        }
      })
      setTask(newTask)
      setIdSaved(null)
      toggleModal()
    }
    function mouseOver(element){
      element.style.transform = 'scale(110%)'
      element.style.cursor = 'pointer'
    }
    function mouseOut(element){
      element.style.transform = 'scale(100%)'
    }

    return (
      <div className="container">
        <Menu addTask={addTask} mouseOver={mouseOver} mouseOut={mouseOut}/>
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleModal={toggleModal} mouseOver={mouseOver} mouseOut={mouseOut}/>
        {modal === true ? <Modal modifyTask={modifyTask} toggleModal={toggleModal} mouseOver={mouseOver} mouseOut={mouseOut}/> : ''}
      </div>
    );
}

export default App;