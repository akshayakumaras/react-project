import { useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";
import { useEffect } from "react";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

function API() {
    const [data, setData] = useState<Post[]>([]);
    useEffect(() => {
        myFirstAPI()
    }, [])

    const myFirstAPI = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.data)
            .then((json) => setData(json))
    }
    
  return (
    <div className="content">
        
        <h1>API </h1>
      <h1>This is the API Page</h1>
      {data && data.map((item: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; body: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      }
        )}
    </div>
  )
}

export default API;