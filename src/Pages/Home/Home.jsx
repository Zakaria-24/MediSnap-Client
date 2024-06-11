import CategoryCard from "./CategorySection/Category";
import Discount from "./DiscountSection/Discount";
import Carousel from "./SliderSection/Carousel";


const Home = () => {
    return (
        <>
            {/* slider */}
            <Carousel/>

            {/* Category Card Section */}
            <CategoryCard/>

            {/* Discount products */}
            <Discount/>


            {/*  two extra sections */}
        </>
    );
};

export default Home;