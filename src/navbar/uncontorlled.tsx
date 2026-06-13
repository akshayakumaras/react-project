import { useRef } from "react"
function Uncontrolled() {
    const userText:any = useRef('')
    const getValue = () => {
        console.log(userText.current.value)
    }

  return (
    <div className="content">
      <h1>Uncontrolled Section</h1>
        <input type="text" ref={userText} />
        <button onClick={() => getValue()}>Submit</button>

    </div>
  )
}

export default Uncontrolled