import axios from "axios";

//Component
import HomePage from "@/template/home/HomePage";
import FullSpinner from "@/module/spinner/full-spinner/FullSpinner";

const Home = async () => {

  try {
    const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    const categoriesData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`);
    
    if ( !categoriesData.data.length ) return <FullSpinner />  
    
    return <HomePage productsData={productsData.data.products} categoriesData={categoriesData.data} />
    
  } catch (err) {
    console.log("Error in get data" ,err)
    return <HomePage productsData={[]} categoriesData={[]} />
  }
};

export default Home;