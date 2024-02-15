//Style
import styles from "./QueryPage.module.scss";

//Component
import PushBack from "@/element/back-push/PushBach";
import CardHome from "@/module/card-home/CardHome";

const QueryPage = ({ data, title }) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
            <h2
            style={{animation: "fadeInDown 1s"}}
            > {title} </h2>
            </div>
            
            <div className={ styles.cards }>
                {
                    data.map((i ,index) => (
                        <div 
                        style={{animation: `zoomIn .8s .${index + 2}s`}}
                        className={ styles.card }
                        key={i.id}>
                            <CardHome data={i} />
                        </div>
                    ))
                }
            </div>
            <PushBack />
        </div>
    );
};

export default QueryPage;