//Style
import styles from "./HomePage.module.scss";

//Component
import SliderSpecial from "@/module/slider-special/SliderSpecial";
import Banner from "@/module/banner/Banner";
import SliderCircle from "@/module/slider-circle/SliderCircle";
import SliderMain from "@/module/slider-main/SliderMain";
import BannerFlex from "@/module/banner-flex/BannerFlex";
import BannerFlex2 from "@/module/banner-flex-2/BannerFlex2";

//function
import { filterFetch } from "@/utils/functions";

const HomePage = ({ productsData, categoriesData }) => {
    return (
        <div className={ styles.container } >
           <SliderCircle categoriesData={categoriesData} />
            <Banner />
            <SliderSpecial productsData={filterFetch(productsData ,1 )} />
            <SliderMain data={productsData}> New products </SliderMain>
            <SliderMain data={productsData}> Smartphones </SliderMain>
            <BannerFlex />
            <SliderMain data={productsData}> Men`s shirts </SliderMain>
            <SliderMain data={productsData}> Women`s dresses </SliderMain>
            <SliderMain data={productsData}> Laptops </SliderMain>
            <BannerFlex2 />
        </div>
    );
};

export default HomePage;