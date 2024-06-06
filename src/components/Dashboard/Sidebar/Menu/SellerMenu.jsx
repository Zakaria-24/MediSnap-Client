import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdOutlinePayment} from 'react-icons/md'
import MenuItem from './MenuItem'
import { AiFillMedicineBox } from 'react-icons/ai'
import { FcAdvertising } from 'react-icons/fc'
const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Seller Home' address='sellerHome' />
      <MenuItem icon={AiFillMedicineBox} label='Manage Medicines' address='manageMedicines' />
      <MenuItem icon={MdOutlinePayment} label='Payment History' address='paymentHistory' />
      <MenuItem icon={FcAdvertising} label='Ask For Advertisement' address='askForAdvertisement' />
    </>
  )
}

export default SellerMenu;