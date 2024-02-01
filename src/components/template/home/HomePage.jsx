//Style
import styles from "./HomePage.module.scss";

//Component
import SliderSpecial from "@/module/slider-special/SliderSpecial";
import Banner from "@/module/banner/Banner";
import SliderCircle from "@/module/slider-circle/SliderCircle";
import SliderMain from "@/components/module/slider-main/SliderMain";
import BannerFlex from "@/components/module/banner-flex/BannerFlex";

const HomePage = ({ productsData, categoriesData }) => {
    return (
        <div className={ styles.container } >
           <SliderCircle categoriesData={categoriesData} />
            <Banner />
            <SliderSpecial productsData={productsData} />
            <SliderMain data={productsData}> New products </SliderMain>
            <SliderMain data={productsData}> Smartphones </SliderMain>
            <BannerFlex />
        </div>
    );
};

export default HomePage;