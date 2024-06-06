import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Manage Medicines' address='manageMedicines' />
      <MenuItem icon={MdHomeWork} label='Payment History' address='paymentHistory' />
      <MenuItem icon={BsFillHouseAddFill} label='Ask For Advertisement' address='askForAdvertisement' />
    </>
  )
}

export default SellerMenu;