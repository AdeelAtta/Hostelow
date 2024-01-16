import PropertyManagement from '@/components/dashboard-pages/owner/property-management'
import ProfileSettings from '@/components/dashboard-pages/profile-settings'

import { LuHotel } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBedroomChild } from "react-icons/md";






let PropertyOwner = [{
  name: `Hostels Management`,
  route: `manageProperty`,
  icon: <LuHotel />,
  displayComponent: <PropertyManagement />
},
// {
//   name: `Rooms Management`,
//   route: `manageRooms`,
//   icon: <MdOutlineBedroomChild />  ,
//   displayComponent: <PropertyManagement />
// },
{
  name: `Profile Settings`,
  route: `profileSetting`,
  icon: <CgProfile />,
  displayComponent: <ProfileSettings />
}
]



export function createMenu(text) {

  if (text == `admin`) {
    return PropertyOwner;

  }

  return []

}



