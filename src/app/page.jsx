import axios from "axios";

//Component
import HomePage from "@/components/template/home/HomePage";
import FullSpinner from "@/components/module/spinner/full-spinner/FullSpinner";

const Home = async () => {

  const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
  const categoriesData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`);

if ( !categoriesData.data.length ) return <FullSpinner />  

  return <HomePage productsData={productsData.data.products} categoriesData={categoriesData.data} />
};

export default Home;