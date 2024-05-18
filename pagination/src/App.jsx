import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const fetchProducts = async () => {
//     const response = await fetch("https://dummyjson.com/products?limit=100");
//     const data = await response.json();
//     if (data && data.products) {
//       setProducts(data.products);
//     }
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const selectPageHandler=(selectedPage)=>{
//     if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage!==page){
//       setPage(selectedPage);
//     }
    
//   }

//   return (
//     <div className="App">
//       {products.length > 0 && (
//         <div className="products">
//           {products.slice(page * 10 - 10, page * 10).map((product) => {
//             return (
//               <span className="product_single" key={product.id}>
//                 <img src={product.thumbnail} alt={product.title} />
//                 <span>{product.title}</span>
//               </span>
//             );
//           })}
//         </div>
//       )}
//       {products.length > 0 && <div className="pagination">
//             <span 
//             className={page>1 ? "" : "pagination_disabled"}
//             onClick={()=>selectPageHandler(page-1)}>◀</span>
//             {
//               [...Array(products.length/10)].map((_,i)=>{
//                 return <span
//                 className={page==i+1 ? "pagination_selected" : ""}
//                  onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
//               })
//             }
//             <span
//             className={page<products.length/10 ? "" : "pagination_disabled"}
//             onClick={()=>selectPageHandler(page+1)}>▶</span>

//         </div>}
//     </div>
//   );
// }

// export default App;



// backend driven 
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages,setTotalPages]=useState(0);
  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total/10)
    }
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=totalPages && selectedPage!==page){
      setPage(selectedPage);
    }
    
  }

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <span className="product_single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && <div className="pagination">
            <span 
            className={page>1 ? "" : "pagination_disabled"}
            onClick={()=>selectPageHandler(page-1)}>◀</span>
            {
              [...Array(totalPages)].map((_,i)=>{
                return <span
                className={page==i+1 ? "pagination_selected" : ""}
                 onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
              })
            }
            <span
            className={page<totalPages ? "" : "pagination_disabled"}
            onClick={()=>selectPageHandler(page+1)}>▶</span>

        </div>}
    </div>
  );
}

export default App;
