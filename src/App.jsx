import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      setProducts(json);
      
    };
    apiCall();
  },[]);

  console.log("product data is", products);

  return (
    <div>
      <button
        className="bg-red-700 px-4 py-2 rounded-lg"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase value
      </button>
    </div>
  );
};

export default App;
