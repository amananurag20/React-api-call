import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      setProducts(json);
    };
    apiCall();
  }, []);

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
      <h1>{count}</h1>

      <div className="flex flex-wrap">
       
        {products.map((item) => {
          return (
            <div key={item.id} className="w-[300px] h-[600px] bg-slate-600 m-4 rounded-2xl p-5">
              <img
                src={item.image}
                alt="img"
                className="w-[200px] h-[200px] ml-12"
              ></img>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <h1 className="font-bold text-xl bg-red-700">Price RS {item.price}</h1>
              <p className="text-lg">{item.description}</p>
              <h1 className="font-bold">Rating: {item.rating.rate}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
