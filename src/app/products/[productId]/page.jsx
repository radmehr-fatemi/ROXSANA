import axios from "axios";

//Component
import DetailsPage from "@/components/template/details/DetailsPage";
import FullSpinner from "@/components/module/spinner/full-spinner/FullSpinner";

const Details = async ({ params: { productId } }) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`);
        const data = await res.json();

        if (!data.id) return <FullSpinner />

        return <DetailsPage data={data} />

    } catch (err) {
        console.log("Error in get data", err)
        return <FullSpinner error={true} />
    }
};

export default Details;

// export const generateStaticParams = async () => {
//     const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`).then(res => res.data.products);
//     const data = productsData.splice(0 ,10)
    
//     const paths = data.map(i => { productId: String(i.id) })
//     return paths
// }