import {useState} from "react"

const Counter = () =>{
    let [count,setCount] = useState(0);

    const addNum =()=>{
        setCount(count+1);
    }
    const subNum=()=>{
        (count<=0)?setCount(0):setCount(count-1)
    }
    return<>
        <h1>{count}</h1>
        <button onClick={addNum}>add</button>
        <button onClick={subNum}>sub</button>
    </>
}
export default Counter;