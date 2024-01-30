//Component
import SliderCircle from "@/components/module/slider-circle/SliderCircle";

const HomePage = ({ productsData, categoriesData }) => {

    return (
        <div>
            <SliderCircle data={categoriesData} />

        </div>
    );
};

export default HomePage;