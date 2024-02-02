//Component
import DetailsPage from "@/components/template/details/DetailsPage";
import FullSpinner from "@/components/module/spinner/full-spinner/FullSpinner";

const Details = async ({ params: { productId } }) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`, {
            next: { revalidate: 1 * (60 * 60 * 24) }
        });
        const data = await res.json();
        console.log(data)
        
        if ( !data.id ) return <FullSpinner />
        
        return <DetailsPage data={data} />

    } catch (err) {
        console.log("Error in get data", err)
        return <FullSpinner error={true} />
    }
};

export default Details;