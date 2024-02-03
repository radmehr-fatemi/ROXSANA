//Component
import BannerDetails from "@/module/banner-details/BannerDetails";

//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./DetailsPage.module.scss";
import SliderMain from "@/components/module/slider-main/SliderMain";

const DetailsPage = async ({ data }) => {

    const { title,
        description,
        price,
        discountPercentage: dis,
        rating,
        stock,
        brand,
        category,
        images,
        id
    } = data;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`);
    const { comments } = await res.json();
    const myComments = comments.filter(i => i.postId == id);


    const res2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/${category}`);
    const productsCategory = await res2.json();
    console.log(myComments)

    return (
        <div className={styles.container} >
            <div className={styles.banner}>
                <BannerDetails images={images} />
            </div>
            <div className={styles.fieldContainer}>
                <Title title={title} brand={brand} />
                <Fields description={description} icons={icons} id={id} rating={rating} views={myComments.length} />
            </div>
            <SliderMain data={productsCategory.products} > Same products </SliderMain>
            <Comments data={myComments} />
        </div>
    );
};

export default DetailsPage;

const Title = ({ title, brand }) => {
    return (
        <div className={styles.title}>
            <h2> {title} </h2>
            <span> {brand} </span>
        </div>
    )
}

const Fields = ({ id, rating, icons, views, description }) => {
    return (
        <div className={styles.fields}>
            <div className={styles.field1}>
                <div className={styles.field1_1}>
                    <p> Product ID : </p>
                    <span> {id + `22`} </span>
                </div>
                <div className={styles.field1_2}>
                    <span>
                        {icons.star}
                        {rating}
                    </span>
                    <a href="#"> {views} Views </a>
                </div>
            </div>
            <div className={styles.field2}>
                <div>
                    {icons.carFast}
                    <p>Immediate delivery</p>
                </div>

                <div>
                    {icons.map}
                    <p>Shipping nationwide</p>
                </div>

                <div>
                    {icons.guarantee}
                    <p>7 days of your time</p>
                </div>

                <div>
                    {icons.lowest}
                    <p>the lowest price</p>
                </div>
            </div>
            <div className={styles.field3} >
                <h4> Description : </h4>
                <p> {description} </p>
            </div>
        </div>
    )
}

const Comments = ({ data }) => {
    return (
        <div className={styles.comments} >
            <h2>User comments :</h2>
            {
                data.map(i => (
                    <div
                        key={i.id}
                        className={styles.comment}
                    >
                        <h4> {i.user.username} </h4>
                        <p> {i.body} </p>
                    </div>
                ))
            }
        </div>
    )
}