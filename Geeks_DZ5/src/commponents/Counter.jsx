import { useCallback, useState } from "react"
import ChildButton from "./ChildButton";

export default function Counter() {
        const [count,setCount] = useState(0);

        const headClikChild = useCallback(() => {
            console.log("render ChildButton ");
        },[]);
    
        console.log("render Count");
        
return (
    <div>
        <span>{count}</span>
        <button onClick={() => setCount((c) => c+1) }>"Count"</button>
        <ChildButton onClick={headClikChild}/>
    </div>
)
}
