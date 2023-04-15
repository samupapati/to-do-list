import 'boxicons';

function Menu(props){
    let valueInput = ''
    
    function saveInput(value){
        valueInput = value
    }
    function handleInput(descTask){
        props.handleTask(valueInput)
        valueInput = ''
    }

    return(
        <div>
            <input onChange={event => saveInput(event.target.value)}/>
            <box-icon onClick={() => handleInput()} name='add-to-queue'></box-icon>

        </div>
    );
}

export default Menu;