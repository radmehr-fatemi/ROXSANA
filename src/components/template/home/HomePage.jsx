//Component
import SliderSpecial from "@/module/slider-special/SliderSpecial";
import Banner from "@/module/banner/Banner";
import SliderCircle from "@/module/slider-circle/SliderCircle";

const HomePage = ({ productsData, categoriesData }) => {

    return (
        <div>
            <SliderCircle data={categoriesData} />
            <Banner />
            <SliderSpecial data={productsData} />
        </div>
    );
};

export default HomePage;