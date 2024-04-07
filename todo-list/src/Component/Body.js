
import React,{useState} from "react"
import "./Body.css"
import TodoList from "./TodoList"


const Body = () =>{
    const [textValue,setTextValue]=useState("");
    const [list,setList]=useState([]);

    const handleChange = (event) =>{
        setTextValue(event.target.value)
    }

    const addBtn = () => {
        if (textValue.trim() !== "") {
            setList([...list, { text: textValue}]);
            setTextValue("");
        }
    };

    const deleteItem = (index) =>{
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
       }
   
    return <div>
        <div className="list-container">
        <input type="text" placeholder="Add your List" className="textField" value={textValue} onChange={handleChange}/>
        <button className="btn" onClick={addBtn}>Add List</button>
        <ul>
        {list.map((item,index) => (
            <TodoList
                Key={index}
                item={item}
                index={index}
                deleteItem={deleteItem}
            />
        ))}
        
        </ul>
        
         </div>
    </div>

}
export default Body;
