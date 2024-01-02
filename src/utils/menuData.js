import PropertyManagement from '@/components/dashboard-pages/owner/property-management'
import { LuHotel } from "react-icons/lu";






export let PropertyOwner = [{
  name: `Manage Hostels`,
  route: `manageProperty`,
  icon: <LuHotel />,
  displayComponent: <PropertyManagement />
}]



export function createMenu(text) {

  if (text == `admin`) {
    return PropertyOwner;

  }

  return []

}



export const hostelsData = [
  { "_id": "658f1bd414399f5290b954c1", "thumbnail": "ThumbnailURL", "title": "Adeli Hostel Service", "desc": "THis is Description", "price": 10, "location": "Hostel Location", "rating": 0, "date": "2023-12-29T19:19:48.310Z", "amentities": { "freeWifi": false, "privateBathroom": false, "freeParking": false, "helpDesk": false, "airCondition": true, "keyAccess": true, "transportation": true }, "reviews": null, "images": ["ThirdImageOFLastHostels", "LastImageOFLastHostel", "ThirdImageOFLastHostels", "LastImageOFLastHostel", "ThirdImageOFLastHostels", "LastImageOFLastHostel", "LastImageOFLastHostel"] },
  { "_id": "658f25c314399f5290b954e8", "thumbnail": "ThumbnailURL", "title": "Adeli Hosteliiii Service", "desc": "THis is Description", "price": 10, "location": "Hostel Location", "rating": 0, "date": "2023-12-29T20:02:11.252Z", "amentities": null, "reviews": null, "images": null },
  { "_id": "658f263814399f5290b954ec", "thumbnail": "ThumbnailURL", "title": "Adeli Hosteliiii Serviceiii", "desc": "THis is Description", "price": 10, "location": "Hostel Location", "rating": 0, "date": "2023-12-29T20:04:08.339Z", "amentities": { "freeWifi": true, "privateBathroom": true, "freeParking": false, "helpDesk": false, "airCondition": true, "keyAccess": true, "transportation": true }, "reviews": null, "images": null }, { "_id": "658f27f414399f5290b954f5", "thumbnail": "ThumbnailURL", "title": "Adeli Hosteliiii Servici", "desc": "THis is Description", "price": 10, "location": "Hostel Location", "rating": 5, "date": "2023-12-29T20:11:32.051Z", "amentities": null, "reviews": null, "images": null }
]