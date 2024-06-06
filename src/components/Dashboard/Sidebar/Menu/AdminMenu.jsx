import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { TbCategory, TbPaywall, TbReportAnalytics } from 'react-icons/tb'
import { FcAdvertising } from 'react-icons/fc'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manageUsers' />
      <MenuItem icon={TbCategory} label='Category' address='category' />
      <MenuItem icon={TbPaywall} label='Payment Management' address='paymentManagement' />
      <MenuItem icon={TbReportAnalytics} label='Sales Report' address='salesReport' />
      <MenuItem icon={FcAdvertising} label='Advertise' address='advertise' />
    </>
  )
}

export default AdminMenu