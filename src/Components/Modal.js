import { useState } from "react"

function Modal({modifyTask, toggleModal, mouseOver, mouseOut}){
    const [valueInput, setValueInput] = useState('')
    function handleInput(value){
        setValueInput(value)
    }
    function handleSubmit(){
        if(valueInput !== ''){
            modifyTask(valueInput)
            handleInput('')
        }
    }

    return(
        <div id="container-modal">
            <div id="fundo-modal" onClick={() => toggleModal()}></div>
            <div className="fundo" id="modal">
                <div className="over-fundo">
                    <input className="input" onChange={event => handleInput(event.target.value)} autoFocus placeholder="Edit task" onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                handleSubmit()
                            }
                        }}
                    />
                    <box-icon onClick={() => handleSubmit()} className="btn" name="check" color="var(--bg-btn)" size="md"
                        onMouseOver={(e) => mouseOver(e.target)} onMouseOut={(e) => mouseOut(e.target)}>
                    </box-icon>
                </div>
            </div>
        </div>
    )
}

export default Modal;