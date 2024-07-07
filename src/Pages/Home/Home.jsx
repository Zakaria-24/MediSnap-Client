import { Helmet } from "react-helmet-async";
import CategoryCard from "./CategorySection/Category";
import Discount from "./DiscountSection/Discount";
import CustomarsReview from "./ExtraSection/CustomarsReview";
import Carousel from "./SliderSection/Carousel";
import FrequentlyAskQuestion from "./ExtraSection/FrequentlyAskQuestion";


const Home = () => {
    return (
        <>
        <Helmet>
        <title>MediSnap | multi-vendor medicine seller</title>
      </Helmet>
            {/* slider */}
            <Carousel/>

            {/* Category Card Section */}
            <CategoryCard/>

            {/* Discount products */}
            <Discount/>


            {/* extra sections */}
            <CustomarsReview />
            <FrequentlyAskQuestion/>
            
        </>
    );
};

export default Home;