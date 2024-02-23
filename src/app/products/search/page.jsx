//Component
import SearchPage from "@/template/search/SearchPage";
import axios from "axios";

const Search = async ({searchParams:{ q }}) => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${q}`).then(res => res.data.products);

    return <SearchPage data={data} query={q} />
};

export default Search;

//MetaData
export const generateMetadata = async ({searchParams:{ q }}) => {

    return {
        title:`Searched for ${q}`,
        description:`Result of searched products for ${q}`,
    }
}