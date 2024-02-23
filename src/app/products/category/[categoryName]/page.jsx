import axios from 'axios';

//Component
import QueryPage from '@/components/template/query-page/QueryPage';

const Category = async ({ params: {categoryName} }) => {

    const products = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/${categoryName}`).then(res => res.data.products);

    return <QueryPage data={products} title={categoryName} />
};

export default Category;

//MetaData
export const generateMetadata = async ({params:{categoryName}}) => {

    return {
        title:categoryName,
        description:`${categoryName} products`,
    }
}