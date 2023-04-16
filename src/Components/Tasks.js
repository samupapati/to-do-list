function Tasks({tasks, deleteTask, toggleModal, mouseOver, mouseOut}) {
    return (
        <div className="container-tasks">
                {tasks.map(taskObj => 
                    <div className="fundo">
                        <div className="over-fundo">
                          <div className="task" key={taskObj.taskId}>
                            <p className="taskName">{taskObj.taskName}</p>
                            <div>
                              <box-icon onClick={() => toggleModal(taskObj.taskId)} className="btn" name='cog' color="var(--bg-btn)"
                                onMouseOver={(e) => mouseOver(e.target)} onMouseOut={(e) => mouseOut(e.target)}>
                              </box-icon>
                              <box-icon onClick={() => deleteTask(taskObj.taskId)} className="btn" type='regular' name='task-x' color="var(--bg-btn)"
                                onMouseOver={(e) => mouseOver(e.target)} onMouseOut={(e) => mouseOut(e.target)}>
                              </box-icon>
                            </div>
                          </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Tasks;