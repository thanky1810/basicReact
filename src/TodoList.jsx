import { useState } from "react";

function TodoList(){
    
    const [list, setList] = useState([]);
    
    const [work, setWork] = useState();

    const handleAdd = () => {
        if (work.trim() !== "") {
        setList([...list, work]);
        setWork(""); 
        }
    };

    const handleWork = (e) =>{
        setWork(e.target.value)
    }

    const handleDelete = (work) =>{
        if(list.includes(work)){
            const index = list.findIndex(num => num === work);
            list.splice(index,1)
            setList([...list]);
        }
    }

    const handleFix = (work) =>{
        if(list.includes(work)){
            const text = prompt("Change value");
            console.log(text);
            const index = list.findIndex(num => num === work);
            list.splice(index, 1, text);
             setList([...list]);
        }
    }

    return (
        <>
            <input type="text" value={work || ""} onChange = {handleWork} />
            <button
                onClick = {handleAdd}
            >Add</button>

        <ul> 
            {
                list.map((work, index)=>{

                    return(
                    <div key = {index}> 
                        <li>{work}</li>
                        <button onClick = {() => handleDelete(work)}>Delete</button>
                        <button onClick = {() => handleFix(work)}>Fix</button>
                    </div>
                    )
                })
            }
        </ul>
        </>
    )
}


export default TodoList;