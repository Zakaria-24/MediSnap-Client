import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedCarts = () => {
        const { user } = useAuth();
        const axiosSecure = useAxiosSecure();
      
        const { data: cartData = [], refetch } = useQuery({
          queryKey: ["CartData"],
          queryFn: async () => {
            const { data } = await axiosSecure(`/selectedCarts/${user?.email}`);
            return data;
      
            // const response = await fetch('http://localhost:8000/api/v1/medicines/cart');
            // const data = await response.json();
            // return data.data;
          },
        });
        return [ cartData, refetch ];
  
};

export default useSelectedCarts;