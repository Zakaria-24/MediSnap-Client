import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const Invoice = () => {
    const { user } = useAuth();
    console.log(user.email)
    const axiosSecure = useAxiosSecure()

    // Get invoice data from API by specific user email and display it here.
const {
    data: invoiceData = [], isLoading
} = useQuery({
    queryKey: ["invoice", user?.email ],
    queryFn: async () => {
        const {data} = await axiosSecure(`/invoice/${user?.email}`)
        return data;
    }
})
console.log(invoiceData)

if (isLoading) return <LoadingSpinner />;
    return (
        <div>
            
        </div>
    );
};

export default Invoice;