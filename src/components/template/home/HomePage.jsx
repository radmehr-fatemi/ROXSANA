//Component
import SliderSpecial from "@/module/slider-special/SliderSpecial";
import Banner from "@/module/banner/Banner";
import SliderCircle from "@/module/slider-circle/SliderCircle";

const HomePage = ({ productsData, categoriesData }) => {
    return (
        <div>
           <SliderCircle categoriesData={categoriesData} />
            <Banner />
            <SliderSpecial productsData={productsData} />
        </div>
    );
};

export default HomePage;