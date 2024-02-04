//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./DetailsPage.module.scss";
//Component

import BannerDetails from "@/module/banner-details/BannerDetails";
import SliderMain from "@/module/slider-main/SliderMain";
import Checkout from "@/module/checkout/Checkout";

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

    return (
        <div className={styles.container} >
            <div className={styles.flex} >
                <div className={styles.banner}>
                    <BannerDetails images={images} />
                    <Checkout data={data} styles={styles} />
                </div>

                <div className={styles.fieldContainer}>
                    <Title title={title} brand={brand} />
                    <Fields description={description} icons={icons} id={id} rating={rating} views={myComments.length} />
                </div>
            </div>

            <span id="banner_details_comments" />
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
                    <a href="#banner_details_comments"> {views} Views </a>
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
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto reprehenderit eius ipsam sed aspernatur expedita cupiditate laboriosam aperiam harum? Rem reiciendis consequatur quas labore! Libero tempora similique quidem repellendus, optio quaerat. Porro repudiandae, adipisci provident eaque corporis quod temporibus molestias consequatur in voluptatum voluptatibus debitis esse et! Expedita cupiditate sunt quasi porro temporibus? Eius debitis, nobis ullam rerum iste a inventore maiores, repudiandae est unde illum natus rem consequuntur eum vel modi? Enim inventore iure sit, autem cupiditate quia consequatur recusandae quibusdam amet nam voluptatum accusantium dolore suscipit repellendus aut facilis? Repudiandae, iste. Distinctio dolorem earum minus pariatur, alias commodi debitis nesciunt ex eius enim facere rerum nulla quibusdam quo quia neque dolorum quasi itaque inventore facilis. Fuga, alias ab! Non magnam impedit delectus numquam consequuntur commodi velit praesentium placeat facere. Nostrum culpa, atque quasi at laudantium consectetur tenetur ducimus tempora nihil libero vitae et eius quia a sint ullam eos inventore delectus quas, doloribus doloremque? Excepturi ullam et similique cupiditate, quia dolor velit tempore doloremque dicta architecto obcaecati consequatur, neque suscipit fugit, odio incidunt maxime non necessitatibus quos molestiae consequuntur explicabo! Rerum iusto laudantium non necessitatibus error doloremque deserunt reiciendis nam at illo eos odit quas, ipsum ad. </p>
            </div>
        </div>
    )
}

const Comments = ({ data }) => {
    return (
        <div className={styles.comments}>
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