//Component
import Banner from "@/components/module/banner/Banner";
import SliderCircle from "@/components/module/slider-circle/SliderCircle";

const HomePage = ({ productsData, categoriesData }) => {

    return (
        <div>
            <SliderCircle data={categoriesData} />
            <Banner />

        </div>
    );
};

export default HomePage;