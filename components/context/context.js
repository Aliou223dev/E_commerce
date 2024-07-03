'use client'
import { createContext,useState,useContext } from "react";




 export const CategoryContext = createContext("")
 export default function  CategoryProvider({children},res){
    
    const [name,setname]=useState("")
    //fetching data
    const [categories,setcategories]= useState([])
    //updating and deleting data
    const [update,setupdate]=useState(null)
     
    return (
        <>
            <CategoryContext.Provider
            value={{
                name,
                setname,
                categories,
                setcategories,
                update,
                setupdate,

            }}
            >
                {children}
            </CategoryContext.Provider>
        
        </>
    )
}
//export default CategoryProvider
export const useCategory=()=>useContext(CategoryContext)
//  const fetchItems = async () => {
//     const response = await fetch("http://localhost:3000/api/category/categoryfetch");
//     const data = await response.json();
//     return data;
//   };
  
//  const createItem = async (itemData) => {
//     const response = await fetch("http://localhost:3000/api/admin/category/category", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(itemData),
//     });
  
//     const data = await response.json();
//     return data;
//   };
  
//   const updateItem = async (itemId, itemData) => {
//     const response = await fetch(`http://localhost:3000/api/admin/category/slug/${itemId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(itemData),
//     });
  
//     const data = await response.json();
//     return data;
//   };
  
//    const deleteItem = async (itemId) => {
//     const response = await fetch(`http://localhost:3000/api/admin/category/slug/${itemId}`, {
//       method: 'DELETE',
//     });
  
//     const data = await response.json();
//     return data;
//   };
  
   