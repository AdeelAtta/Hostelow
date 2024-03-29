import PropertyManagement from '@/components/dashboard-pages/owner/property-management'
import ProfileSettings from '@/components/dashboard-pages/profile-settings'

import { FaTicket } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBedroomChild } from "react-icons/md";
import Tickets from '@/components/dashboard-pages/customer/ticket-management';
import TicketsManagement from '@/components/dashboard-pages/owner/ticket-management'
import ReviewManagement from '@/components/dashboard-pages/customer/review-management'
import AdminReviewManagement from '@/components/dashboard-pages/owner/review-management'
import { SiCodereview } from "react-icons/si";



let user = [{
  name: `Hostel Reviews`,
  route: `userhostelsReview`,
  icon: <SiCodereview />,
  displayComponent: <ReviewManagement />
}, {
  name: `Tickets Management`,
  route: `userTickets`,
  icon: <FaTicket />,
  displayComponent: <Tickets />
}, {
  name: `Profile Settings`,
  route: `profileSetting`,
  icon: <CgProfile />,
  displayComponent: <ProfileSettings />
},]

let propertyOwner = [{
  name: `Hostels Management`,
  route: `manageProperty`,
  icon: <LuHotel />,
  displayComponent: <PropertyManagement />
},
{
  name: `Tickets Management`,
  route: `adminTickets`,
  icon: <FaTicket />,
  displayComponent: <TicketsManagement />
},
{
  name: `Hostel Reviews`,
  route: `adminhostelsReview`,
  icon: <CgProfile />,
  displayComponent: <AdminReviewManagement />
},
{
  name: `Profile Settings`,
  route: `profileSetting`,
  icon: <CgProfile />,
  displayComponent: <ProfileSettings />
},

]



let ProperOwner = [{
  name: `Hostels Management`,
  route: `manageProperty`,
  icon: <LuHotel />,
  displayComponent: <PropertyManagement />
},
{
  name: `user Hostel Reviews`,
  route: `userhostelsReview`,
  icon: <CgProfile />,
  displayComponent: <ReviewManagement />
},
{
  name: `admin Hostel Reviews`,
  route: `adminhostelsReview`,
  icon: <CgProfile />,
  displayComponent: <AdminReviewManagement />
},
{
  name: `Profile Settings`,
  route: `profileSetting`,
  icon: <CgProfile />,
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
    return propertyOwner;
  } else if (text == `user`) {
    return user;
  }

  return []

}



