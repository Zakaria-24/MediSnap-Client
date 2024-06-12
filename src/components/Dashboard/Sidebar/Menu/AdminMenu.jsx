import { FaHome, FaUsersCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { TbCategory2, TbPaywall, TbReportAnalytics } from "react-icons/tb";
import { FcAdvertising } from "react-icons/fc";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaHome} label="Admin Home" address="adminHome" />
      <MenuItem icon={FaUsersCog} label="Manage Users" address="manageUsers" />
      <MenuItem icon={TbCategory2} label="Category" address="category" />
      <MenuItem
        icon={TbPaywall}
        label="Payment Management"
        address="paymentManagement"
      />
      <MenuItem
        icon={TbReportAnalytics}
        label="Sales Report"
        address="salesReport"
      />
      <MenuItem icon={FcAdvertising} label="Advertise" address="advertise" />
    </>
  );
};

export default AdminMenu;
