import {useState} from "react";

function counter(){
    const [count, setCount] = useState(0);
    const increment =()=>{
        setCount((item)=> item+1)
    }
    const [count1, setCount1] = useState(0);
    const increment2=()=>{
        setCount1((item)=> item+2)
    }



    return(
        <div>
            <h1>count1: {count}</h1>
            <button onClick={increment}>Add</button>
            <h1>count2: {count1}</h1>
            <button onClick={increment2}>Add</button>
        </div>
    )
}
export default counter;