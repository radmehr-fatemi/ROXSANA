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

const HomePage = (props) => {

    const { productsData, categoriesData ,smartphonesData ,mensShirtsData ,womensDressesData ,laptopsData } = props

    return (
        <div className={ styles.container } >
           <SliderCircle categoriesData={categoriesData} />
            <Banner />
            <SliderSpecial productsData={productsData} />
            <SliderMain data={filterFetch(productsData ,9 )}> New products </SliderMain>
            <SliderMain data={smartphonesData}> Smartphones </SliderMain>
            <BannerFlex />
            <SliderMain data={mensShirtsData}> Men`s shirts </SliderMain>
            <SliderMain data={womensDressesData}> Women`s dresses </SliderMain>
            <SliderMain data={laptopsData}> Laptops </SliderMain>
            <BannerFlex2 />
        </div>
    );
};

export default HomePage;