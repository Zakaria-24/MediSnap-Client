import CategoryCart from "../../../components/CategoryCart/CategoryCart";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from '@tanstack/react-query';

const Category = () => {
const axiosCommon = useAxiosCommon()

const { data: categories =[] } = useQuery({
queryKey: ["categories"],
queryFn: async () => {
    const {data} = await axiosCommon.get('/categories')
    return data
}
})


    return (
       <div className='py-8 px-4'>
        <h1 className=' flex justify-center text-3xl font-bold py-8'>MEDICINES CATEGORIES</h1>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {categories.map(category =>( 
            <CategoryCart
            key={category._id}
            category={category}
            />
        ))}
        </div>
       </div>
    );
};

export default Category;