import PropertyManagement from '@/components/dashboard-pages/owner/property-management'
import ProfileSettings from '@/components/dashboard-pages/profile-settings'

import { FaTicket } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBedroomChild } from "react-icons/md";
import Tickets from '@/components/dashboard-pages/tickets';
import TicketsManagement from '@/components/dashboard-pages/owner/ticket-management'






let PropertyOwner = [{
  name: `Hostels Management`,
  route: `manageProperty`,
  icon: <LuHotel />,
  displayComponent: <PropertyManagement />
},
{
  name: `Profile Settings`,
  route: `profileSetting`,
  icon: <CgProfile /> ,
  displayComponent: <ProfileSettings />
},
{
  name: `Admin Tickets Management`,
  route: `adminTickets`,
  icon: <FaTicket />,
  displayComponent: <TicketsManagement />
},
{
  name: `user Tickets Management`,
  route: `userTickets`,
  icon: <FaTicket />,
  displayComponent: <Tickets />
}
]



export function createMenu(text) {

  if (text == `admin`) {
    return PropertyOwner;

  }

  return []

}



