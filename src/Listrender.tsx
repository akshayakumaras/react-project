import { useState } from "react"

export default function Listrender() {

    const [data] = useState(["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"])

    const objectData = [
        { id: 1, name: "Person 1", age: 20 , Status: "false"},
        { id: 2, name: "Person 2", age: 25 , Status: "true"},
        { id: 3, name: "Person 3", age: 30 , Status: "false"},
        { id: 4, name: "Person 4", age: 35 , Status: "true"},
        { id: 5, name: "Person 5", age: 40 , Status: "false"}
    ]

    return (
        <>
            <h1>List render</h1>
            {
                data.map((value:any,index:any) => {
                    return <>
                    <p key={index} className={value === "Person 3" ? "text-danger" : undefined}>{value} {value === "Person 5" && <span className="text-success">*</span>}</p>
                    </>
                })
            }

            <hr />
            {
                objectData.map((value:any) => {
                    return <>
                    
                    <p key={value.id} className={value.Status === "true" ? "text-success" : undefined}>{value.name}</p>
                    </>
                }
                )
            }

            
        </>
    )
}