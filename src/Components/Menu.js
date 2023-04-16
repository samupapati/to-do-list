import 'boxicons';
import { useState } from 'react';

function Menu({addTask, mouseOver, mouseOut}){
    const [valueInput, setValueInput] = useState('')
    function handleInput(value){
        setValueInput(value)
    }
    function handleSubmit(){
        if(valueInput !== ''){
            addTask(valueInput)
            handleInput('')
        }
    }

    return(
        <div className='fundo' id='fundo-menu'>
            <div className='over-fundo' id='menu'>
                <h1>To Do List</h1>
                <div className='container-input'>
                    <input className='input' value={valueInput} onChange={event => handleInput(event.target.value)} placeholder='New task' autoFocus
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                handleSubmit()
                            }
                        }}
                    />
                    <box-icon onClick={() => handleSubmit()} className="btn" name='add-to-queue' color="var(--bg-btn)" 
                        onMouseOver={(e) => mouseOver(e.target)} onMouseOut={(e) => mouseOut(e.target)}>
                    </box-icon>
                </div>
            </div>
        </div>
    );
}

export default Menu;