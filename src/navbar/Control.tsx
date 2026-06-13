import { useState } from "react"

function Control() {
  const [value, setValue] = useState('Hello')

  return (
    <div className="content">
      <h1>Control Component</h1>
      {/* <input type = "text" value={value}/> */}
      <input type="text" value = {value} onChange={(e) => setValue(e.target.value)} />
      
    </div>
  )
}

export default Control