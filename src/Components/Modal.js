function Modal(prop1, taskId){

    let valueInput = ''
    
    function saveInput(value){
        valueInput = value
    }

    function handleInput(){
        prop1.handleModify(valueInput, taskId)

        valueInput = ''
    }

    return(
        <div>
            <input onChange={event => saveInput(event.target.value)}/>
            <button onClick={() => handleInput()}>ok</button>
        </div>
    )
}

export default Modal;