//Component
import SliderSpecial from "@/module/slider-special/SliderSpecial";
import Banner from "@/module/banner/Banner";
import SliderCircle from "@/module/slider-circle/SliderCircle";

const HomePage = ({ productsData, categoriesData }) => {

    return (
        <div>
           <SliderCircle data={JSON.parse(JSON.stringify(categoriesData))} />
            <Banner />
            <SliderSpecial data={JSON.parse(JSON.stringify(productsData))} />
        </div>
    );
};

export default HomePage;