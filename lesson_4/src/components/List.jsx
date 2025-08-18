import { useState } from "react"

export default function List() {

    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState([])
    const handelAdd = () => {
        setList([inputValue])
    }

    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handelAdd}>Add+</button>
            </div>
            <div>
                {list.map((listItem) => {
                    return <p>{listItem}</p>
                })}
            </div>
        </div>
    )
}
 