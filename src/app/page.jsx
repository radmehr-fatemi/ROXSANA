import axios from "axios";

//Component
import HomePage from "@/template/home/HomePage";
import FullSpinner from "@/module/spinner/full-spinner/FullSpinner";

const Home = async () => {

  try {
    const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    const smartphonesData = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/smartphones`)).data.products;
    const mensShirtsData = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/mens-shirts`)).data.products;
    const womensDressesData = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/womens-dresses`)).data.products;
    const laptopsData = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/laptops`)).data.products;
    const categoriesData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`);
    
    if (!categoriesData.data.length) return <FullSpinner />

    return <HomePage
      productsData={productsData.data.products}
      smartphonesData={smartphonesData}
      mensShirtsData={mensShirtsData}
      womensDressesData={womensDressesData}
      laptopsData={laptopsData}
      categoriesData={categoriesData.data}
    />

  } catch (err) {
    console.log("Error in get data", err)
    return <HomePage productsData={[]} categoriesData={[]} />
  }
};

export default Home;