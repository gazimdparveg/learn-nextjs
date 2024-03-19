import Newbutton from "../buttons/Newbutton";
import Image from "next/image";
import { Roboto_Serif } from "next/font/google";

const serif = Roboto_Serif({
  width:400,
  subsets:['latin'],
  display:'swap'
  
})
 
async function data (){
  let da = await   fetch('https://fakestoreapi.com/products')
               .then((ds)=>ds.json())
              
    return da;
}



export default  async function productlist() {
 
  const pro = await data();


  return (
    <div>
     <h2> Home  </h2> 
      <h1>Product List</h1>
      {pro.map((data)=>( 
       
       <div>
             <h1 className={serif.className}>{data.title}   </h1> 
             <Image 
             src={data.image}
             width={200}
             height={200}
             /> 
              <Newbutton price={data.price}/>
           
       </div>
       
       
   ))}
      
 
    </div>
  )
}


