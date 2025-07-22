import { useState } from "react";

function TodoList(){
    
    const [list, setList] = useState([]);
    
    const [work, setWork] = useState();

    const handleAdd = () =>{
        setList([...list, work]);
    }

    const handleWork = (e) =>{
        setWork(e.target.value)
    }

    return (
        <>
            <input type="text" onChange = {handleWork}/>
            <button
                onClick = {handleAdd}
            >Add</button>

        <ul> 
            {
                list.map((work, index)=>{
                    return(
                    <li key={index}>{work}</li>
                    )
                })
            }
        </ul>
        </>
    )
}


export default TodoList;