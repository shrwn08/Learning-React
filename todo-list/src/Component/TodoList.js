import React from "react"
 import "./Body.css";
const TodoList =(item,index,deleteItem)=>{


    return (
        <div className="List"  key={index}>
               <div> <li className="item-List">
                <span className="item">{item.text}</span>
            </li></div>
               <div><button className="btnD"onClick={() => deleteItem(index)}>Delete </button> </div></div>
    );
}
export default TodoList;