import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  console.log("Post", post)


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPost(data);
      };
    fetchData();
  }, []);



  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 style={{backgroundColor: "pink"}}>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>

      {
        post.map((post)=>{
            return(
                <div>
                    <h1 class>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        })
      }
    </div>
  );
}

export default Counter;
