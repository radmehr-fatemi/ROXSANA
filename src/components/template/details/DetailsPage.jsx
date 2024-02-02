const DetailsPage = ({data}) => {
    console.log("Hear-----------------" ,data)
    return (
        <div>
            {data.title}
        </div>
    );
};

export default DetailsPage;