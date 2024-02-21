import { InfinitySpin, LineWave, MutatingDots } from "react-loader-spinner";

const InfinitySpinner = () => {
    return (
        <div className=" flex items-center justify-center  h-5">
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#2B6FCA"
                secondaryColor="#2B6FCA"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default InfinitySpinner;