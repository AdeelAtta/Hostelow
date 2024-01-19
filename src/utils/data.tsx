import { FaParking } from "react-icons/fa";
import { FaBed, FaBowlRice, FaKey, FaPeopleRoof, FaShower, FaWifi } from "react-icons/fa6";
import { LuParkingSquare, LuUtensils } from "react-icons/lu";
import { MdCellWifi, MdOutlineFreeBreakfast, MdOutlineLocalLaundryService } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { WiSandstorm } from "react-icons/wi";
import { BiSolidCctv } from "react-icons/bi";
import { GiBroom, GiMagicBroom, GiPowerGenerator } from "react-icons/gi";
import { LiaSolarPanelSolid } from "react-icons/lia";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { IoMdChatboxes } from "react-icons/io";
import { ImBooks } from "react-icons/im";





export const AmenitiesInfo: any = {
    wifi: {
        icon: <FaWifi />,
        text: `Free wifi`,
        slug: `wifi`
    },
    airCondition: {
        icon: <TbAirConditioning />,
        text: `Air Conditioning`,
        slug: `airCondition`
    },
    helpDesk: {
        icon: <IoMdChatboxes />,
        text: `Help Desk`,
        slug: `helpDesk`
    },
    bikeParking: {
        icon: <FaParking />,
        text: `Bike Parking`,
        slug: `bikeParking`
    },
    carParking: {
        icon: <FaParking />,
        text: `Car Parking`,
        slug: `carParking`
    },
    furnishedRooms: {
        icon: <GiMagicBroom />,
        text: `Furnished Rooms`,
        slug: `furnishedRooms`
    },
    cctv: {
        icon: <BiSolidCctv />,
        text: `CCTV`,
        slug: `cctv`
    },
    keyAccess: {
        icon: <FaKey />,
        text: `Key Access`,
        slug: `keyAccess`
    },
    commonAreas: {
        icon: <FaPeopleRoof />,
        text: `Common Areas`,
        slug: `commonAreas`
    },
    studyArea: {
        icon: <ImBooks />,
        text: `Study Area`,
        slug: `studyArea`
    },
    laundry: {
        icon: <MdOutlineLocalLaundryService /> ,
        text: `Laundry`,
        slug: `laundry`
    },
    cleaningServices: {
        icon: <GiBroom />,
        text: `Cleaning Services`,
        slug: `cleaningServices`
    },
    privateBathroom: {
        icon: <FaShower /> ,
        text: `Private Bathroom`,
        slug: `privateBathroom`
    },
    internet: {
        icon: <MdCellWifi />,
        text: `Internet`,
        slug: `internet`
    },
    bed: {
        icon: <FaBed />,
        text: `Bed`,
        slug: `bed`
    },
    mattress: {
        icon: <LuParkingSquare />,
        text: `Mattress`,
        slug: `mattress`
    },
    lunch: {
        icon: <FaBowlRice />,
        text: `Lunch`,
        slug: `lunch`
    },
    dinner: {
        icon: <LuUtensils />,
        text: `Dinner`,
        slug: `dinner`
    },
    breakfast: {
        icon: <MdOutlineFreeBreakfast />,
        text: `Breakfast`,
        slug: `breakfast`
    },
    generator: {
        icon: <GiPowerGenerator />,
        text: `Generator`,
        slug: `generator`
    },
    ups: {
        icon: <LiaSolarPanelSolid />,
        text: `UPS`,
        slug: `ups`
    },
    geyser: {
        icon: <CgSmartHomeBoiler />        ,
        text: `Geyser`,
        slug: `geyser`
    },

}


export const citiesData = [
    {
      "country": "PK",
      "name": "Abbottabad",
      "lat": "34.1463",
      "lng": "73.21168"
    },
    {
      "country": "PK",
      "name": "Adilpur",
      "lat": "27.93677",
      "lng": "69.31941"
    },
    {
      "country": "PK",
      "name": "Ahmadpur East",
      "lat": "29.14269",
      "lng": "71.25771"
    },
    {
      "country": "PK",
      "name": "Ahmadpur Sial",
      "lat": "30.67791",
      "lng": "71.74344"
    },
    {
      "country": "PK",
      "name": "Akora",
      "lat": "34.00337",
      "lng": "72.12561"
    },
    {
      "country": "PK",
      "name": "Aliabad",
      "lat": "36.30703",
      "lng": "74.61545"
    },
    {
      "country": "PK",
      "name": "Alik Ghund",
      "lat": "30.48976",
      "lng": "67.52177"
    },
    {
      "country": "PK",
      "name": "Alipur",
      "lat": "29.38242",
      "lng": "70.91106"
    },
    {
      "country": "PK",
      "name": "Alizai",
      "lat": "33.53613",
      "lng": "70.34607"
    },
    {
      "country": "PK",
      "name": "Alpurai",
      "lat": "34.92039",
      "lng": "72.63265"
    },
    {
      "country": "PK",
      "name": "Aman Garh",
      "lat": "34.00584",
      "lng": "71.92971"
    },
    {
      "country": "PK",
      "name": "Amirabad",
      "lat": "34.18729",
      "lng": "73.09078"
    },
    {
      "country": "PK",
      "name": "Arifwala",
      "lat": "30.29058",
      "lng": "73.06574"
    },
    {
      "country": "PK",
      "name": "Ashanagro Koto",
      "lat": "34.10773",
      "lng": "72.24517"
    },
    {
      "country": "PK",
      "name": "Athmuqam",
      "lat": "34.57173",
      "lng": "73.89724"
    },
    {
      "country": "PK",
      "name": "Attock City",
      "lat": "33.76671",
      "lng": "72.35977"
    },
    {
      "country": "PK",
      "name": "Awaran",
      "lat": "26.45677",
      "lng": "65.23144"
    },
    {
      "country": "PK",
      "name": "Baddomalhi",
      "lat": "31.99042",
      "lng": "74.6641"
    },
    {
      "country": "PK",
      "name": "Badin",
      "lat": "24.656",
      "lng": "68.837"
    },
    {
      "country": "PK",
      "name": "Baffa",
      "lat": "34.4377",
      "lng": "73.22368"
    },
    {
      "country": "PK",
      "name": "Bagarji",
      "lat": "27.75431",
      "lng": "68.75866"
    },
    {
      "country": "PK",
      "name": "Bagh",
      "lat": "33.98111",
      "lng": "73.77608"
    },
    {
      "country": "PK",
      "name": "Bahawalnagar",
      "lat": "29.99835",
      "lng": "73.25272"
    },
    {
      "country": "PK",
      "name": "Bahawalnagar",
      "lat": "30.55083",
      "lng": "73.39083"
    },
    {
      "country": "PK",
      "name": "Bahawalpur",
      "lat": "29.39779",
      "lng": "71.6752"
    },
    {
      "country": "PK",
      "name": "Bakhri Ahmad Khan",
      "lat": "30.73586",
      "lng": "70.83796"
    },
    {
      "country": "PK",
      "name": "Bandhi",
      "lat": "26.58761",
      "lng": "68.30215"
    },
    {
      "country": "PK",
      "name": "Bannu",
      "lat": "32.98527",
      "lng": "70.60403"
    },
    {
      "country": "PK",
      "name": "Barishal",
      "lat": "36.32162",
      "lng": "74.69502"
    },
    {
      "country": "PK",
      "name": "Barkhan",
      "lat": "29.89773",
      "lng": "69.52558"
    },
    {
      "country": "PK",
      "name": "Basirpur",
      "lat": "30.57759",
      "lng": "73.83912"
    },
    {
      "country": "PK",
      "name": "Basti Dosa",
      "lat": "30.78769",
      "lng": "70.86853"
    },
    {
      "country": "PK",
      "name": "Bat Khela",
      "lat": "34.6178",
      "lng": "71.97247"
    },
    {
      "country": "PK",
      "name": "Battagram",
      "lat": "34.67719",
      "lng": "73.02329"
    },
    {
      "country": "PK",
      "name": "Begowala",
      "lat": "32.43816",
      "lng": "74.26794"
    },
    {
      "country": "PK",
      "name": "Bela",
      "lat": "26.22718",
      "lng": "66.31178"
    },
    {
      "country": "PK",
      "name": "Berani",
      "lat": "25.78497",
      "lng": "68.80754"
    },
    {
      "country": "PK",
      "name": "Bhag",
      "lat": "29.04174",
      "lng": "67.82394"
    },
    {
      "country": "PK",
      "name": "Bhakkar",
      "lat": "31.62685",
      "lng": "71.06471"
    },
    {
      "country": "PK",
      "name": "Bhalwal",
      "lat": "32.26576",
      "lng": "72.89809"
    },
    {
      "country": "PK",
      "name": "Bhan",
      "lat": "26.55831",
      "lng": "67.72139"
    },
    {
      "country": "PK",
      "name": "Bhawana",
      "lat": "31.56884",
      "lng": "72.64917"
    },
    {
      "country": "PK",
      "name": "Bhera",
      "lat": "32.48206",
      "lng": "72.90865"
    },
    {
      "country": "PK",
      "name": "Bhimbar",
      "lat": "32.97465",
      "lng": "74.07846"
    },
    {
      "country": "PK",
      "name": "Bhiria",
      "lat": "26.91041",
      "lng": "68.19466"
    },
    {
      "country": "PK",
      "name": "Bhit Shah",
      "lat": "25.80565",
      "lng": "68.49143"
    },
    {
      "country": "PK",
      "name": "Bhopalwala",
      "lat": "32.42968",
      "lng": "74.3635"
    },
    {
      "country": "PK",
      "name": "Bozdar Wada",
      "lat": "27.183",
      "lng": "68.6358"
    },
    {
      "country": "PK",
      "name": "Bulri",
      "lat": "24.86667",
      "lng": "68.33333"
    },
    {
      "country": "PK",
      "name": "Būrewāla",
      "lat": "30.16667",
      "lng": "72.65"
    },
    {
      "country": "PK",
      "name": "Chak",
      "lat": "27.85838",
      "lng": "68.83378"
    },
    {
      "country": "PK",
      "name": "Chak Azam Sahu",
      "lat": "30.75202",
      "lng": "73.02834"
    },
    {
      "country": "PK",
      "name": "Chak Five Hundred Seventy-five",
      "lat": "31.54514",
      "lng": "73.82891"
    },
    {
      "country": "PK",
      "name": "Chak Jhumra",
      "lat": "31.56808",
      "lng": "73.18317"
    },
    {
      "country": "PK",
      "name": "Chak One Hundred Twenty Nine Left",
      "lat": "30.42919",
      "lng": "73.04522"
    },
    {
      "country": "PK",
      "name": "Chak Thirty-one -Eleven Left",
      "lat": "30.42388",
      "lng": "72.69737"
    },
    {
      "country": "PK",
      "name": "Chak Two Hundred Forty-nine Thal Development Authority",
      "lat": "31.17772",
      "lng": "71.2048"
    },
    {
      "country": "PK",
      "name": "Chakwal",
      "lat": "32.93286",
      "lng": "72.85394"
    },
    {
      "country": "PK",
      "name": "Chaman",
      "lat": "30.91769",
      "lng": "66.45259"
    },
    {
      "country": "PK",
      "name": "Chamber",
      "lat": "25.29362",
      "lng": "68.81176"
    },
    {
      "country": "PK",
      "name": "Charsadda",
      "lat": "34.14822",
      "lng": "71.7406"
    },
    {
      "country": "PK",
      "name": "Chawinda",
      "lat": "32.34434",
      "lng": "74.70507"
    },
    {
      "country": "PK",
      "name": "Chenab Nagar",
      "lat": "31.75511",
      "lng": "72.91403"
    },
    {
      "country": "PK",
      "name": "Cherat Cantonement",
      "lat": "33.82342",
      "lng": "71.89292"
    },
    {
      "country": "PK",
      "name": "Chhor",
      "lat": "25.5126",
      "lng": "69.78437"
    },
    {
      "country": "PK",
      "name": "Chichawatni",
      "lat": "30.5301",
      "lng": "72.69155"
    },
    {
      "country": "PK",
      "name": "Chilas",
      "lat": "35.41287",
      "lng": "74.10407"
    },
    {
      "country": "PK",
      "name": "Chiniot",
      "lat": "31.72091",
      "lng": "72.97836"
    },
    {
      "country": "PK",
      "name": "Chishtian",
      "lat": "29.79713",
      "lng": "72.85772"
    },
    {
      "country": "PK",
      "name": "Chitral",
      "lat": "35.8518",
      "lng": "71.78636"
    },
    {
      "country": "PK",
      "name": "Choa Saidan Shah",
      "lat": "32.71962",
      "lng": "72.98625"
    },
    {
      "country": "PK",
      "name": "Chowki Jamali",
      "lat": "28.01944",
      "lng": "67.92083"
    },
    {
      "country": "PK",
      "name": "Chuchar-kana Mandi",
      "lat": "31.75",
      "lng": "73.8"
    },
    {
      "country": "PK",
      "name": "Chuhar Jamali",
      "lat": "24.3944",
      "lng": "67.99298"
    },
    {
      "country": "PK",
      "name": "Chunian",
      "lat": "30.96621",
      "lng": "73.97908"
    },
    {
      "country": "PK",
      "name": "Dadhar",
      "lat": "29.47489",
      "lng": "67.65167"
    },
    {
      "country": "PK",
      "name": "Dadu",
      "lat": "26.73033",
      "lng": "67.7769"
    },
    {
      "country": "PK",
      "name": "Daggar",
      "lat": "34.51106",
      "lng": "72.48438"
    },
    {
      "country": "PK",
      "name": "Daira Din Panah",
      "lat": "30.57053",
      "lng": "70.93722"
    },
    {
      "country": "PK",
      "name": "Dajal",
      "lat": "29.55769",
      "lng": "70.37614"
    },
    {
      "country": "PK",
      "name": "Dalbandin",
      "lat": "28.88846",
      "lng": "64.40616"
    },
    {
      "country": "PK",
      "name": "Dandot RS",
      "lat": "32.64167",
      "lng": "72.975"
    },
    {
      "country": "PK",
      "name": "Daromehar",
      "lat": "24.79382",
      "lng": "68.17978"
    },
    {
      "country": "PK",
      "name": "Darya Khan",
      "lat": "31.78447",
      "lng": "71.10197"
    },
    {
      "country": "PK",
      "name": "Darya Khan Marri",
      "lat": "26.67765",
      "lng": "68.28666"
    },
    {
      "country": "PK",
      "name": "Daska Kalan",
      "lat": "32.32422",
      "lng": "74.35039"
    },
    {
      "country": "PK",
      "name": "Dasu",
      "lat": "35.29169",
      "lng": "73.2906"
    },
    {
      "country": "PK",
      "name": "Daud Khel",
      "lat": "32.87533",
      "lng": "71.57118"
    },
    {
      "country": "PK",
      "name": "Daulatpur",
      "lat": "26.50158",
      "lng": "67.97079"
    },
    {
      "country": "PK",
      "name": "Daultala",
      "lat": "33.19282",
      "lng": "73.14099"
    },
    {
      "country": "PK",
      "name": "Daur",
      "lat": "26.45528",
      "lng": "68.31835"
    },
    {
      "country": "PK",
      "name": "Dera Allahyar",
      "lat": "28.37353",
      "lng": "68.35078"
    },
    {
      "country": "PK",
      "name": "Dera Bugti",
      "lat": "29.03619",
      "lng": "69.15849"
    },
    {
      "country": "PK",
      "name": "Dera Ghazi Khan",
      "lat": "30.04587",
      "lng": "70.64029"
    },
    {
      "country": "PK",
      "name": "Dera Ismail Khan",
      "lat": "31.83129",
      "lng": "70.9017"
    },
    {
      "country": "PK",
      "name": "Dera Murad Jamali",
      "lat": "28.54657",
      "lng": "68.22308"
    },
    {
      "country": "PK",
      "name": "Dhanot",
      "lat": "29.57991",
      "lng": "71.75213"
    },
    {
      "country": "PK",
      "name": "Dhaunkal",
      "lat": "32.40613",
      "lng": "74.13706"
    },
    {
      "country": "PK",
      "name": "Dhoro Naro",
      "lat": "25.50484",
      "lng": "69.5709"
    },
    {
      "country": "PK",
      "name": "Digri",
      "lat": "25.15657",
      "lng": "69.11098"
    },
    {
      "country": "PK",
      "name": "Dijkot",
      "lat": "31.21735",
      "lng": "72.99621"
    },
    {
      "country": "PK",
      "name": "Dinan Bashnoian Wala",
      "lat": "29.76584",
      "lng": "73.26557"
    },
    {
      "country": "PK",
      "name": "Dinga",
      "lat": "32.64101",
      "lng": "73.72039"
    },
    {
      "country": "PK",
      "name": "Dipalpur",
      "lat": "30.66984",
      "lng": "73.65306"
    },
    {
      "country": "PK",
      "name": "Diplo",
      "lat": "24.46688",
      "lng": "69.58114"
    },
    {
      "country": "PK",
      "name": "Doaba",
      "lat": "33.4245",
      "lng": "70.73676"
    },
    {
      "country": "PK",
      "name": "Dokri",
      "lat": "27.37421",
      "lng": "68.09715"
    },
    {
      "country": "PK",
      "name": "Duki",
      "lat": "30.15307",
      "lng": "68.57323"
    },
    {
      "country": "PK",
      "name": "Dullewala",
      "lat": "31.83439",
      "lng": "71.43639"
    },
    {
      "country": "PK",
      "name": "Dunga Bunga",
      "lat": "29.74975",
      "lng": "73.24294"
    },
    {
      "country": "PK",
      "name": "Dunyapur",
      "lat": "29.80275",
      "lng": "71.74344"
    },
    {
      "country": "PK",
      "name": "Eidgah",
      "lat": "35.34712",
      "lng": "74.85632"
    },
    {
      "country": "PK",
      "name": "Eminabad",
      "lat": "32.04237",
      "lng": "74.25996"
    },
    {
      "country": "PK",
      "name": "Faisalabad",
      "lat": "31.41554",
      "lng": "73.08969"
    },
    {
      "country": "PK",
      "name": "Faqirwali",
      "lat": "29.46799",
      "lng": "73.03489"
    },
    {
      "country": "PK",
      "name": "Faruka",
      "lat": "31.88642",
      "lng": "72.41362"
    },
    {
      "country": "PK",
      "name": "Fazilpur",
      "lat": "32.17629",
      "lng": "75.06583"
    },
    {
      "country": "PK",
      "name": "Fort Abbas",
      "lat": "29.19344",
      "lng": "72.85525"
    },
    {
      "country": "PK",
      "name": "Gadani",
      "lat": "25.11853",
      "lng": "66.72985"
    },
    {
      "country": "PK",
      "name": "Gakuch",
      "lat": "36.17683",
      "lng": "73.76383"
    },
    {
      "country": "PK",
      "name": "Gambat",
      "lat": "27.3517",
      "lng": "68.5215"
    },
    {
      "country": "PK",
      "name": "Gandava",
      "lat": "28.61321",
      "lng": "67.48564"
    },
    {
      "country": "PK",
      "name": "Garh Maharaja",
      "lat": "30.83383",
      "lng": "71.90491"
    },
    {
      "country": "PK",
      "name": "Garhi Khairo",
      "lat": "28.06029",
      "lng": "67.98033"
    },
    {
      "country": "PK",
      "name": "Garhiyasin",
      "lat": "27.90631",
      "lng": "68.5121"
    },
    {
      "country": "PK",
      "name": "Gharo",
      "lat": "24.74182",
      "lng": "67.58534"
    },
    {
      "country": "PK",
      "name": "Ghauspur",
      "lat": "28.13882",
      "lng": "69.08245"
    },
    {
      "country": "PK",
      "name": "Ghotki",
      "lat": "28.00437",
      "lng": "69.31569"
    },
    {
      "country": "PK",
      "name": "Gilgit",
      "lat": "35.91869",
      "lng": "74.31245"
    },
    {
      "country": "PK",
      "name": "Gojra",
      "lat": "31.14926",
      "lng": "72.68323"
    },
    {
      "country": "PK",
      "name": "Goth Garelo",
      "lat": "27.43521",
      "lng": "68.07572"
    },
    {
      "country": "PK",
      "name": "Goth Phulji",
      "lat": "26.88099",
      "lng": "67.68239"
    },
    {
      "country": "PK",
      "name": "Goth Radhan",
      "lat": "27.19846",
      "lng": "67.95348"
    },
    {
      "country": "PK",
      "name": "Gujar Khan",
      "lat": "33.25411",
      "lng": "73.30433"
    },
    {
      "country": "PK",
      "name": "Gujranwala",
      "lat": "32.15567",
      "lng": "74.18705"
    },
    {
      "country": "PK",
      "name": "Gujrat",
      "lat": "32.5742",
      "lng": "74.07542"
    },
    {
      "country": "PK",
      "name": "Gulishah Kach",
      "lat": "32.67087",
      "lng": "70.33917"
    },
    {
      "country": "PK",
      "name": "Gwadar",
      "lat": "25.12163",
      "lng": "62.32541"
    },
    {
      "country": "PK",
      "name": "Hadali",
      "lat": "32.64043",
      "lng": "74.56898"
    },
    {
      "country": "PK",
      "name": "Hafizabad",
      "lat": "32.07095",
      "lng": "73.68802"
    },
    {
      "country": "PK",
      "name": "Hala",
      "lat": "25.81459",
      "lng": "68.42198"
    },
    {
      "country": "PK",
      "name": "Hangu",
      "lat": "33.53198",
      "lng": "71.0595"
    },
    {
      "country": "PK",
      "name": "Haripur",
      "lat": "33.99783",
      "lng": "72.93493"
    },
    {
      "country": "PK",
      "name": "Harnai",
      "lat": "30.10077",
      "lng": "67.93824"
    },
    {
      "country": "PK",
      "name": "Harnoli",
      "lat": "32.27871",
      "lng": "71.55429"
    },
    {
      "country": "PK",
      "name": "Harunabad",
      "lat": "29.61206",
      "lng": "73.13802"
    },
    {
      "country": "PK",
      "name": "Hasilpur",
      "lat": "29.69221",
      "lng": "72.54566"
    },
    {
      "country": "PK",
      "name": "Hattian Bala",
      "lat": "34.1691",
      "lng": "73.7432"
    },
    {
      "country": "PK",
      "name": "Haveli Lakha",
      "lat": "30.45097",
      "lng": "73.69371"
    },
    {
      "country": "PK",
      "name": "Havelian",
      "lat": "34.05348",
      "lng": "73.15993"
    },
    {
      "country": "PK",
      "name": "Hazro City",
      "lat": "33.9099",
      "lng": "72.49179"
    },
    {
      "country": "PK",
      "name": "Hingorja",
      "lat": "27.21088",
      "lng": "68.41598"
    },
    {
      "country": "PK",
      "name": "Hujra Shah Muqim",
      "lat": "30.74168",
      "lng": "73.82327"
    },
    {
      "country": "PK",
      "name": "Hyderabad",
      "lat": "25.39242",
      "lng": "68.37366"
    },
    {
      "country": "PK",
      "name": "Islamabad",
      "lat": "33.72148",
      "lng": "73.04329"
    },
    {
      "country": "PK",
      "name": "Islamkot",
      "lat": "24.69904",
      "lng": "70.17982"
    },
    {
      "country": "PK",
      "name": "Jacobabad",
      "lat": "28.28187",
      "lng": "68.43761"
    },
    {
      "country": "PK",
      "name": "Jahanian Shah",
      "lat": "31.80541",
      "lng": "72.2774"
    },
    {
      "country": "PK",
      "name": "Jalalpur Jattan",
      "lat": "32.64118",
      "lng": "74.20561"
    },
    {
      "country": "PK",
      "name": "Jalalpur Pirwala",
      "lat": "29.5051",
      "lng": "71.22202"
    },
    {
      "country": "PK",
      "name": "Jampur",
      "lat": "29.64235",
      "lng": "70.59518"
    },
    {
      "country": "PK",
      "name": "Jamshoro",
      "lat": "25.43608",
      "lng": "68.28017"
    },
    {
      "country": "PK",
      "name": "Jand",
      "lat": "33.43304",
      "lng": "72.01877"
    },
    {
      "country": "PK",
      "name": "Jandiala Sher Khan",
      "lat": "31.82098",
      "lng": "73.91815"
    },
    {
      "country": "PK",
      "name": "Jaranwala",
      "lat": "31.3332",
      "lng": "73.41868"
    },
    {
      "country": "PK",
      "name": "Jati",
      "lat": "24.35492",
      "lng": "68.26732"
    },
    {
      "country": "PK",
      "name": "Jatoi Shimali",
      "lat": "29.51827",
      "lng": "70.84474"
    },
    {
      "country": "PK",
      "name": "Jauharabad",
      "lat": "32.29016",
      "lng": "72.28182"
    },
    {
      "country": "PK",
      "name": "Jhang City",
      "lat": "31.30568",
      "lng": "72.32594"
    },
    {
      "country": "PK",
      "name": "Jhang Sadr",
      "lat": "31.26981",
      "lng": "72.31687"
    },
    {
      "country": "PK",
      "name": "Jhawarian",
      "lat": "32.36192",
      "lng": "72.62275"
    },
    {
      "country": "PK",
      "name": "Jhelum",
      "lat": "32.93448",
      "lng": "73.73102"
    },
    {
      "country": "PK",
      "name": "Jhol",
      "lat": "25.95533",
      "lng": "68.88871"
    },
    {
      "country": "PK",
      "name": "Jiwani",
      "lat": "25.04852",
      "lng": "61.74573"
    },
    {
      "country": "PK",
      "name": "Johi",
      "lat": "26.69225",
      "lng": "67.61431"
    },
    {
      "country": "PK",
      "name": "Jām Sāhib",
      "lat": "26.29583",
      "lng": "68.62917"
    },
    {
      "country": "PK",
      "name": "Kabirwala",
      "lat": "30.40472",
      "lng": "71.86269"
    },
    {
      "country": "PK",
      "name": "Kadhan",
      "lat": "24.48041",
      "lng": "68.98551"
    },
    {
      "country": "PK",
      "name": "Kahna Nau",
      "lat": "31.36709",
      "lng": "74.36899"
    },
    {
      "country": "PK",
      "name": "Kahror Pakka",
      "lat": "29.6243",
      "lng": "71.91437"
    },
    {
      "country": "PK",
      "name": "Kahuta",
      "lat": "33.59183",
      "lng": "73.38736"
    },
    {
      "country": "PK",
      "name": "Kakad Wari Dir Upper",
      "lat": "34.99798",
      "lng": "72.07295"
    },
    {
      "country": "PK",
      "name": "Kalabagh",
      "lat": "32.96164",
      "lng": "71.54638"
    },
    {
      "country": "PK",
      "name": "Kalaswala",
      "lat": "32.20081",
      "lng": "74.64858"
    },
    {
      "country": "PK",
      "name": "Kalat",
      "lat": "29.02663",
      "lng": "66.59361"
    },
    {
      "country": "PK",
      "name": "Kaleke Mandi",
      "lat": "31.97597",
      "lng": "73.59999"
    },
    {
      "country": "PK",
      "name": "Kallar Kahar",
      "lat": "32.77998",
      "lng": "72.69793"
    },
    {
      "country": "PK",
      "name": "Kalur Kot",
      "lat": "32.15512",
      "lng": "71.26631"
    },
    {
      "country": "PK",
      "name": "Kamalia",
      "lat": "30.72708",
      "lng": "72.64607"
    },
    {
      "country": "PK",
      "name": "Kamar Mushani",
      "lat": "32.84318",
      "lng": "71.36192"
    },
    {
      "country": "PK",
      "name": "Kambar",
      "lat": "27.58753",
      "lng": "68.00066"
    },
    {
      "country": "PK",
      "name": "Kamoke",
      "lat": "31.97526",
      "lng": "74.22304"
    },
    {
      "country": "PK",
      "name": "Kamra",
      "lat": "33.74698",
      "lng": "73.51229"
    },
    {
      "country": "PK",
      "name": "Kandhkot",
      "lat": "28.24574",
      "lng": "69.17974"
    },
    {
      "country": "PK",
      "name": "Kandiari",
      "lat": "26.9155",
      "lng": "68.52193"
    },
    {
      "country": "PK",
      "name": "Kandiaro",
      "lat": "27.05918",
      "lng": "68.21022"
    },
    {
      "country": "PK",
      "name": "Kanganpur",
      "lat": "30.76468",
      "lng": "74.12286"
    },
    {
      "country": "PK",
      "name": "Karachi",
      "lat": "24.8608",
      "lng": "67.0104"
    },
    {
      "country": "PK",
      "name": "Karak",
      "lat": "33.11633",
      "lng": "71.09354"
    },
    {
      "country": "PK",
      "name": "Karaundi",
      "lat": "26.89709",
      "lng": "68.40643"
    },
    {
      "country": "PK",
      "name": "Kario Ghanwar",
      "lat": "24.80817",
      "lng": "68.60483"
    },
    {
      "country": "PK",
      "name": "Karor",
      "lat": "31.2246",
      "lng": "70.95153"
    },
    {
      "country": "PK",
      "name": "Kashmor",
      "lat": "28.4326",
      "lng": "69.58364"
    },
    {
      "country": "PK",
      "name": "Kasur",
      "lat": "31.11866",
      "lng": "74.45025"
    },
    {
      "country": "PK",
      "name": "Keshupur",
      "lat": "32.26",
      "lng": "72.5"
    },
    {
      "country": "PK",
      "name": "Keti Bandar",
      "lat": "24.14422",
      "lng": "67.45094"
    },
    {
      "country": "PK",
      "name": "Khadan Khak",
      "lat": "30.75236",
      "lng": "67.71133"
    },
    {
      "country": "PK",
      "name": "Khadro",
      "lat": "26.14713",
      "lng": "68.71777"
    },
    {
      "country": "PK",
      "name": "Khairpur",
      "lat": "28.06437",
      "lng": "69.70363"
    },
    {
      "country": "PK",
      "name": "Khairpur Mir’s",
      "lat": "27.52948",
      "lng": "68.75915"
    },
    {
      "country": "PK",
      "name": "Khairpur Nathan Shah",
      "lat": "27.09064",
      "lng": "67.73489"
    },
    {
      "country": "PK",
      "name": "Khairpur Tamewah",
      "lat": "29.58139",
      "lng": "72.23804"
    },
    {
      "country": "PK",
      "name": "Khalabat",
      "lat": "34.05997",
      "lng": "72.88963"
    },
    {
      "country": "PK",
      "name": "Khandowa",
      "lat": "32.74255",
      "lng": "72.73478"
    },
    {
      "country": "PK",
      "name": "Khanewal",
      "lat": "30.30173",
      "lng": "71.93212"
    },
    {
      "country": "PK",
      "name": "Khangah Dogran",
      "lat": "31.83294",
      "lng": "73.62213"
    },
    {
      "country": "PK",
      "name": "Khangarh",
      "lat": "29.91446",
      "lng": "71.16067"
    },
    {
      "country": "PK",
      "name": "Khanpur",
      "lat": "28.64739",
      "lng": "70.65694"
    },
    {
      "country": "PK",
      "name": "Khanpur Mahar",
      "lat": "27.84088",
      "lng": "69.41302"
    },
    {
      "country": "PK",
      "name": "Kharan",
      "lat": "28.58459",
      "lng": "65.41501"
    },
    {
      "country": "PK",
      "name": "Kharian",
      "lat": "32.81612",
      "lng": "73.88697"
    },
    {
      "country": "PK",
      "name": "Khewra",
      "lat": "32.6491",
      "lng": "73.01059"
    },
    {
      "country": "PK",
      "name": "Khurrianwala",
      "lat": "31.49936",
      "lng": "73.26763"
    },
    {
      "country": "PK",
      "name": "Khushāb",
      "lat": "32.29667",
      "lng": "72.3525"
    },
    {
      "country": "PK",
      "name": "Khuzdar",
      "lat": "27.81193",
      "lng": "66.61096"
    },
    {
      "country": "PK",
      "name": "Kohat",
      "lat": "33.58196",
      "lng": "71.44929"
    },
    {
      "country": "PK",
      "name": "Kohlu",
      "lat": "29.89651",
      "lng": "69.25324"
    },
    {
      "country": "PK",
      "name": "Kot Addu",
      "lat": "30.46907",
      "lng": "70.96699"
    },
    {
      "country": "PK",
      "name": "Kot Diji",
      "lat": "27.34156",
      "lng": "68.70821"
    },
    {
      "country": "PK",
      "name": "Kot Ghulam Muhammad",
      "lat": "32.33311",
      "lng": "74.54694"
    },
    {
      "country": "PK",
      "name": "Kot Malik Barkhurdar",
      "lat": "30.20379",
      "lng": "66.98723"
    },
    {
      "country": "PK",
      "name": "Kot Mumin",
      "lat": "32.18843",
      "lng": "73.02987"
    },
    {
      "country": "PK",
      "name": "Kot Radha Kishan",
      "lat": "31.17068",
      "lng": "74.10126"
    },
    {
      "country": "PK",
      "name": "Kot Rajkour",
      "lat": "32.41208",
      "lng": "74.62855"
    },
    {
      "country": "PK",
      "name": "Kot Samaba",
      "lat": "28.55207",
      "lng": "70.46837"
    },
    {
      "country": "PK",
      "name": "Kot Sultan",
      "lat": "30.7737",
      "lng": "70.93125"
    },
    {
      "country": "PK",
      "name": "Kotli",
      "lat": "33.51836",
      "lng": "73.9022"
    },
    {
      "country": "PK",
      "name": "Kotli Loharan",
      "lat": "32.58893",
      "lng": "74.49466"
    },
    {
      "country": "PK",
      "name": "Kotri",
      "lat": "25.36566",
      "lng": "68.30831"
    },
    {
      "country": "PK",
      "name": "Kulachi",
      "lat": "31.93058",
      "lng": "70.45959"
    },
    {
      "country": "PK",
      "name": "Kundian",
      "lat": "32.45775",
      "lng": "71.47892"
    },
    {
      "country": "PK",
      "name": "Kunjah",
      "lat": "32.52982",
      "lng": "73.97486"
    },
    {
      "country": "PK",
      "name": "Kunri",
      "lat": "25.17874",
      "lng": "69.56572"
    },
    {
      "country": "PK",
      "name": "Lachi",
      "lat": "33.38291",
      "lng": "71.33733"
    },
    {
      "country": "PK",
      "name": "Ladhewala Waraich",
      "lat": "32.15692",
      "lng": "74.11564"
    },
    {
      "country": "PK",
      "name": "Lahore",
      "lat": "31.558",
      "lng": "74.35071"
    },
    {
      "country": "PK",
      "name": "Lakhi",
      "lat": "27.84884",
      "lng": "68.69972"
    },
    {
      "country": "PK",
      "name": "Lakki",
      "lat": "32.60724",
      "lng": "70.91234"
    },
    {
      "country": "PK",
      "name": "Lala Musa",
      "lat": "32.70138",
      "lng": "73.95746"
    },
    {
      "country": "PK",
      "name": "Lalian",
      "lat": "31.82462",
      "lng": "72.80116"
    },
    {
      "country": "PK",
      "name": "Landi Kotal",
      "lat": "34.0988",
      "lng": "71.14108"
    },
    {
      "country": "PK",
      "name": "Larkana",
      "lat": "27.55898",
      "lng": "68.21204"
    },
    {
      "country": "PK",
      "name": "Layyah",
      "lat": "30.96128",
      "lng": "70.93904"
    },
    {
      "country": "PK",
      "name": "Liliani",
      "lat": "32.20393",
      "lng": "72.9512"
    },
    {
      "country": "PK",
      "name": "Lodhran",
      "lat": "29.5339",
      "lng": "71.63244"
    },
    {
      "country": "PK",
      "name": "Loralai",
      "lat": "30.37051",
      "lng": "68.59795"
    },
    {
      "country": "PK",
      "name": "Mach",
      "lat": "29.86371",
      "lng": "67.33018"
    },
    {
      "country": "PK",
      "name": "Madeji",
      "lat": "27.75314",
      "lng": "68.45166"
    },
    {
      "country": "PK",
      "name": "Mailsi",
      "lat": "29.80123",
      "lng": "72.17398"
    },
    {
      "country": "PK",
      "name": "Malakand",
      "lat": "34.56561",
      "lng": "71.93043"
    },
    {
      "country": "PK",
      "name": "Malakwal",
      "lat": "32.55449",
      "lng": "73.21274"
    },
    {
      "country": "PK",
      "name": "Malakwal City",
      "lat": "32.55492",
      "lng": "73.2122"
    },
    {
      "country": "PK",
      "name": "Malir Cantonment",
      "lat": "24.94343",
      "lng": "67.20591"
    },
    {
      "country": "PK",
      "name": "Mamu Kanjan",
      "lat": "30.83044",
      "lng": "72.79943"
    },
    {
      "country": "PK",
      "name": "Mananwala",
      "lat": "31.58803",
      "lng": "73.68927"
    },
    {
      "country": "PK",
      "name": "Mandi Bahauddin",
      "lat": "32.58704",
      "lng": "73.49123"
    },
    {
      "country": "PK",
      "name": "Mangla",
      "lat": "31.89306",
      "lng": "72.38167"
    },
    {
      "country": "PK",
      "name": "Mankera",
      "lat": "31.38771",
      "lng": "71.44047"
    },
    {
      "country": "PK",
      "name": "Mansehra",
      "lat": "34.33023",
      "lng": "73.19679"
    },
    {
      "country": "PK",
      "name": "Mardan",
      "lat": "34.19794",
      "lng": "72.04965"
    },
    {
      "country": "PK",
      "name": "Mastung",
      "lat": "29.79966",
      "lng": "66.84553"
    },
    {
      "country": "PK",
      "name": "Matiari",
      "lat": "25.59709",
      "lng": "68.4467"
    },
    {
      "country": "PK",
      "name": "Matli",
      "lat": "25.0429",
      "lng": "68.65591"
    },
    {
      "country": "PK",
      "name": "Mehar",
      "lat": "27.18027",
      "lng": "67.82051"
    },
    {
      "country": "PK",
      "name": "Mehmand Chak",
      "lat": "32.78518",
      "lng": "73.82306"
    },
    {
      "country": "PK",
      "name": "Mehrabpur",
      "lat": "28.10773",
      "lng": "68.02554"
    },
    {
      "country": "PK",
      "name": "Mian Channun",
      "lat": "30.44067",
      "lng": "72.35679"
    },
    {
      "country": "PK",
      "name": "Mianke Mor",
      "lat": "31.2024",
      "lng": "73.94857"
    },
    {
      "country": "PK",
      "name": "Mianwali",
      "lat": "32.57756",
      "lng": "71.52847"
    },
    {
      "country": "PK",
      "name": "Minchianabad",
      "lat": "30.16356",
      "lng": "73.56858"
    },
    {
      "country": "PK",
      "name": "Mingora",
      "lat": "34.7795",
      "lng": "72.36265"
    },
    {
      "country": "PK",
      "name": "Miran Shah",
      "lat": "33.00059",
      "lng": "70.07117"
    },
    {
      "country": "PK",
      "name": "Miro Khan",
      "lat": "27.75985",
      "lng": "68.09195"
    },
    {
      "country": "PK",
      "name": "Mirpur Bhtoro",
      "lat": "24.72852",
      "lng": "68.2601"
    },
    {
      "country": "PK",
      "name": "Mirpur Khas",
      "lat": "25.5276",
      "lng": "69.01255"
    },
    {
      "country": "PK",
      "name": "Mirpur Mathelo",
      "lat": "28.02136",
      "lng": "69.54914"
    },
    {
      "country": "PK",
      "name": "Mirpur Sakro",
      "lat": "24.54692",
      "lng": "67.62797"
    },
    {
      "country": "PK",
      "name": "Mirwah Gorchani",
      "lat": "25.30981",
      "lng": "69.05019"
    },
    {
      "country": "PK",
      "name": "Mitha Tiwana",
      "lat": "32.2454",
      "lng": "72.10615"
    },
    {
      "country": "PK",
      "name": "Mithi",
      "lat": "24.73701",
      "lng": "69.79707"
    },
    {
      "country": "PK",
      "name": "Moro",
      "lat": "26.66317",
      "lng": "68.00016"
    },
    {
      "country": "PK",
      "name": "Moza Shahwala",
      "lat": "30.80563",
      "lng": "70.84911"
    },
    {
      "country": "PK",
      "name": "Multan",
      "lat": "30.19679",
      "lng": "71.47824"
    },
    {
      "country": "PK",
      "name": "Muridke",
      "lat": "31.80258",
      "lng": "74.25772"
    },
    {
      "country": "PK",
      "name": "Murree",
      "lat": "33.90836",
      "lng": "73.3903"
    },
    {
      "country": "PK",
      "name": "Musa Khel Bazar",
      "lat": "30.85944",
      "lng": "69.82208"
    },
    {
      "country": "PK",
      "name": "Mustafābād",
      "lat": "30.89222",
      "lng": "73.49889"
    },
    {
      "country": "PK",
      "name": "Muzaffargarh",
      "lat": "30.07258",
      "lng": "71.19379"
    },
    {
      "country": "PK",
      "name": "Muzaffarābād",
      "lat": "34.37002",
      "lng": "73.47082"
    },
    {
      "country": "PK",
      "name": "Nabisar",
      "lat": "25.06717",
      "lng": "69.6434"
    },
    {
      "country": "PK",
      "name": "Nankana Sahib",
      "lat": "31.4501",
      "lng": "73.70653"
    },
    {
      "country": "PK",
      "name": "Narang Mandi",
      "lat": "31.90376",
      "lng": "74.51587"
    },
    {
      "country": "PK",
      "name": "Narowal",
      "lat": "32.10197",
      "lng": "74.87303"
    },
    {
      "country": "PK",
      "name": "Nasirabad",
      "lat": "27.38137",
      "lng": "67.91644"
    },
    {
      "country": "PK",
      "name": "Naudero",
      "lat": "27.66684",
      "lng": "68.3609"
    },
    {
      "country": "PK",
      "name": "Naukot",
      "lat": "24.85822",
      "lng": "69.40153"
    },
    {
      "country": "PK",
      "name": "Naushahra Virkan",
      "lat": "31.96258",
      "lng": "73.97117"
    },
    {
      "country": "PK",
      "name": "Naushahro Firoz",
      "lat": "26.8401",
      "lng": "68.12265"
    },
    {
      "country": "PK",
      "name": "Nawabshah",
      "lat": "26.23939",
      "lng": "68.40369"
    },
    {
      "country": "PK",
      "name": "Nazir Town",
      "lat": "33.30614",
      "lng": "73.4833"
    },
    {
      "country": "PK",
      "name": "New Bādāh",
      "lat": "27.34167",
      "lng": "68.03194"
    },
    {
      "country": "PK",
      "name": "New Mirpur",
      "lat": "33.14782",
      "lng": "73.75187"
    },
    {
      "country": "PK",
      "name": "Noorabad",
      "lat": "34.25195",
      "lng": "71.96656"
    },
    {
      "country": "PK",
      "name": "Nowshera",
      "lat": "34.01583",
      "lng": "71.98123"
    },
    {
      "country": "PK",
      "name": "Nowshera Cantonment",
      "lat": "33.99829",
      "lng": "71.99834"
    },
    {
      "country": "PK",
      "name": "Nushki",
      "lat": "29.55218",
      "lng": "66.02288"
    },
    {
      "country": "PK",
      "name": "Okara",
      "lat": "30.81029",
      "lng": "73.45155"
    },
    {
      "country": "PK",
      "name": "Ormara",
      "lat": "25.2088",
      "lng": "64.6357"
    },
    {
      "country": "PK",
      "name": "Pabbi",
      "lat": "34.00968",
      "lng": "71.79445"
    },
    {
      "country": "PK",
      "name": "Pad Idan",
      "lat": "26.77455",
      "lng": "68.30094"
    },
    {
      "country": "PK",
      "name": "Paharpur",
      "lat": "32.10502",
      "lng": "70.97055"
    },
    {
      "country": "PK",
      "name": "Pakpattan",
      "lat": "30.34314",
      "lng": "73.38944"
    },
    {
      "country": "PK",
      "name": "Panjgur",
      "lat": "26.97186",
      "lng": "64.09459"
    },
    {
      "country": "PK",
      "name": "Pano Aqil",
      "lat": "27.85619",
      "lng": "69.11111"
    },
    {
      "country": "PK",
      "name": "Parachinar",
      "lat": "33.89968",
      "lng": "70.10012"
    },
    {
      "country": "PK",
      "name": "Pasni",
      "lat": "25.26302",
      "lng": "63.46921"
    },
    {
      "country": "PK",
      "name": "Pasrur",
      "lat": "32.26286",
      "lng": "74.66327"
    },
    {
      "country": "PK",
      "name": "Pattoki",
      "lat": "31.02021",
      "lng": "73.85333"
    },
    {
      "country": "PK",
      "name": "Peshawar",
      "lat": "34.008",
      "lng": "71.57849"
    },
    {
      "country": "PK",
      "name": "Phalia",
      "lat": "32.43104",
      "lng": "73.579"
    },
    {
      "country": "PK",
      "name": "Pind Dadan Khan",
      "lat": "32.58662",
      "lng": "73.04456"
    },
    {
      "country": "PK",
      "name": "Pindi Bhattian",
      "lat": "31.89844",
      "lng": "73.27339"
    },
    {
      "country": "PK",
      "name": "Pindi Gheb",
      "lat": "33.24095",
      "lng": "72.2648"
    },
    {
      "country": "PK",
      "name": "Pir Jo Goth",
      "lat": "27.59178",
      "lng": "68.61848"
    },
    {
      "country": "PK",
      "name": "Pir Mahal",
      "lat": "30.76663",
      "lng": "72.43455"
    },
    {
      "country": "PK",
      "name": "Pishin",
      "lat": "30.58176",
      "lng": "66.99406"
    },
    {
      "country": "PK",
      "name": "Pithoro",
      "lat": "25.51122",
      "lng": "69.37803"
    },
    {
      "country": "PK",
      "name": "Qadirpur Ran",
      "lat": "30.29184",
      "lng": "71.67164"
    },
    {
      "country": "PK",
      "name": "Qila Abdullah",
      "lat": "30.72803",
      "lng": "66.66117"
    },
    {
      "country": "PK",
      "name": "Qila Saifullah",
      "lat": "30.70077",
      "lng": "68.35984"
    },
    {
      "country": "PK",
      "name": "Quetta",
      "lat": "30.18414",
      "lng": "67.00141"
    },
    {
      "country": "PK",
      "name": "Rahim Yar Khan",
      "lat": "28.41987",
      "lng": "70.30345"
    },
    {
      "country": "PK",
      "name": "Raiwind",
      "lat": "31.24895",
      "lng": "74.21534"
    },
    {
      "country": "PK",
      "name": "Raja Jang",
      "lat": "31.22078",
      "lng": "74.25483"
    },
    {
      "country": "PK",
      "name": "Rajanpur",
      "lat": "29.10408",
      "lng": "70.32969"
    },
    {
      "country": "PK",
      "name": "Rajo Khanani",
      "lat": "24.98391",
      "lng": "68.8537"
    },
    {
      "country": "PK",
      "name": "Ranipur",
      "lat": "27.2872",
      "lng": "68.50623"
    },
    {
      "country": "PK",
      "name": "Rasulnagar",
      "lat": "32.32794",
      "lng": "73.7804"
    },
    {
      "country": "PK",
      "name": "Ratodero",
      "lat": "27.80227",
      "lng": "68.28902"
    },
    {
      "country": "PK",
      "name": "Rawala Kot",
      "lat": "33.85782",
      "lng": "73.76043"
    },
    {
      "country": "PK",
      "name": "Rawalpindi",
      "lat": "33.59733",
      "lng": "73.0479"
    },
    {
      "country": "PK",
      "name": "Renala Khurd",
      "lat": "30.87878",
      "lng": "73.59857"
    },
    {
      "country": "PK",
      "name": "Risalpur Cantonment",
      "lat": "34.06048",
      "lng": "71.99276"
    },
    {
      "country": "PK",
      "name": "Rohri",
      "lat": "27.69203",
      "lng": "68.89503"
    },
    {
      "country": "PK",
      "name": "Rojhan",
      "lat": "28.68735",
      "lng": "69.9535"
    },
    {
      "country": "PK",
      "name": "Rustam",
      "lat": "27.96705",
      "lng": "68.80386"
    },
    {
      "country": "PK",
      "name": "Saddiqabad",
      "lat": "28.3091",
      "lng": "70.12652"
    },
    {
      "country": "PK",
      "name": "Sahiwal",
      "lat": "31.97386",
      "lng": "72.33109"
    },
    {
      "country": "PK",
      "name": "Sahiwal",
      "lat": "30.66595",
      "lng": "73.10186"
    },
    {
      "country": "PK",
      "name": "Saidu Sharif",
      "lat": "34.74655",
      "lng": "72.35568"
    },
    {
      "country": "PK",
      "name": "Sakrand",
      "lat": "26.13845",
      "lng": "68.27444"
    },
    {
      "country": "PK",
      "name": "Samaro",
      "lat": "25.28143",
      "lng": "69.39623"
    },
    {
      "country": "PK",
      "name": "Sambrial",
      "lat": "32.47835",
      "lng": "74.35338"
    },
    {
      "country": "PK",
      "name": "Sanghar",
      "lat": "26.04694",
      "lng": "68.94917"
    },
    {
      "country": "PK",
      "name": "Sangla Hill",
      "lat": "31.71667",
      "lng": "73.38333"
    },
    {
      "country": "PK",
      "name": "Sanjwal",
      "lat": "33.76105",
      "lng": "72.43315"
    },
    {
      "country": "PK",
      "name": "Sann",
      "lat": "26.0403",
      "lng": "68.13763"
    },
    {
      "country": "PK",
      "name": "Sarai Alamgir",
      "lat": "32.90495",
      "lng": "73.75518"
    },
    {
      "country": "PK",
      "name": "Sarai Naurang",
      "lat": "32.82581",
      "lng": "70.78107"
    },
    {
      "country": "PK",
      "name": "Sarai Sidhu",
      "lat": "30.59476",
      "lng": "71.9699"
    },
    {
      "country": "PK",
      "name": "Sargodha",
      "lat": "32.08586",
      "lng": "72.67418"
    },
    {
      "country": "PK",
      "name": "Sehwan",
      "lat": "26.42495",
      "lng": "67.86126"
    },
    {
      "country": "PK",
      "name": "Setharja Old",
      "lat": "27.2127",
      "lng": "68.46883"
    },
    {
      "country": "PK",
      "name": "Shabqadar",
      "lat": "34.21599",
      "lng": "71.5548"
    },
    {
      "country": "PK",
      "name": "Shahdad Kot",
      "lat": "27.84726",
      "lng": "67.90679"
    },
    {
      "country": "PK",
      "name": "Shahdadpur",
      "lat": "25.92539",
      "lng": "68.6228"
    },
    {
      "country": "PK",
      "name": "Shahkot",
      "lat": "31.5709",
      "lng": "73.48531"
    },
    {
      "country": "PK",
      "name": "Shahpur",
      "lat": "32.2682",
      "lng": "72.46884"
    },
    {
      "country": "PK",
      "name": "Shahpur Chakar",
      "lat": "26.15411",
      "lng": "68.65013"
    },
    {
      "country": "PK",
      "name": "Shahr Sultan",
      "lat": "29.57517",
      "lng": "71.02209"
    },
    {
      "country": "PK",
      "name": "Shakargarh",
      "lat": "32.26361",
      "lng": "75.16008"
    },
    {
      "country": "PK",
      "name": "Sharqpur Sharif",
      "lat": "31.46116",
      "lng": "74.10091"
    },
    {
      "country": "PK",
      "name": "Shekhupura",
      "lat": "31.71287",
      "lng": "73.98556"
    },
    {
      "country": "PK",
      "name": "Shikarpur",
      "lat": "27.95558",
      "lng": "68.63823"
    },
    {
      "country": "PK",
      "name": "Shingli Bala",
      "lat": "34.67872",
      "lng": "72.98491"
    },
    {
      "country": "PK",
      "name": "Shinpokh",
      "lat": "34.32959",
      "lng": "71.17852"
    },
    {
      "country": "PK",
      "name": "Shorkot",
      "lat": "31.91023",
      "lng": "70.87757"
    },
    {
      "country": "PK",
      "name": "Shujaabad",
      "lat": "29.88092",
      "lng": "71.29344"
    },
    {
      "country": "PK",
      "name": "Sialkot",
      "lat": "32.49268",
      "lng": "74.53134"
    },
    {
      "country": "PK",
      "name": "Sibi",
      "lat": "29.54299",
      "lng": "67.87726"
    },
    {
      "country": "PK",
      "name": "Sillanwali",
      "lat": "31.82539",
      "lng": "72.54064"
    },
    {
      "country": "PK",
      "name": "Sinjhoro",
      "lat": "26.03008",
      "lng": "68.80867"
    },
    {
      "country": "PK",
      "name": "Skardu",
      "lat": "35.29787",
      "lng": "75.63372"
    },
    {
      "country": "PK",
      "name": "Sobhodero",
      "lat": "27.30475",
      "lng": "68.39715"
    },
    {
      "country": "PK",
      "name": "Sodhri",
      "lat": "32.46211",
      "lng": "74.18207"
    },
    {
      "country": "PK",
      "name": "Sohbatpur",
      "lat": "28.52038",
      "lng": "68.54298"
    },
    {
      "country": "PK",
      "name": "Sukheke Mandi",
      "lat": "31.86541",
      "lng": "73.50875"
    },
    {
      "country": "PK",
      "name": "Sukkur",
      "lat": "27.70323",
      "lng": "68.85889"
    },
    {
      "country": "PK",
      "name": "Surab",
      "lat": "28.49276",
      "lng": "66.25999"
    },
    {
      "country": "PK",
      "name": "Surkhpur",
      "lat": "32.71816",
      "lng": "74.44773"
    },
    {
      "country": "PK",
      "name": "Swabi",
      "lat": "34.12018",
      "lng": "72.46982"
    },
    {
      "country": "PK",
      "name": "Sīta Road",
      "lat": "27.03333",
      "lng": "67.85"
    },
    {
      "country": "PK",
      "name": "Talagang",
      "lat": "32.92766",
      "lng": "72.41594"
    },
    {
      "country": "PK",
      "name": "Talamba",
      "lat": "30.52693",
      "lng": "72.24079"
    },
    {
      "country": "PK",
      "name": "Talhar",
      "lat": "24.88454",
      "lng": "68.81437"
    },
    {
      "country": "PK",
      "name": "Tandlianwala",
      "lat": "31.03359",
      "lng": "73.13268"
    },
    {
      "country": "PK",
      "name": "Tando Adam",
      "lat": "25.76818",
      "lng": "68.66196"
    },
    {
      "country": "PK",
      "name": "Tando Allahyar",
      "lat": "25.4605",
      "lng": "68.71745"
    },
    {
      "country": "PK",
      "name": "Tando Bago",
      "lat": "24.78914",
      "lng": "68.96535"
    },
    {
      "country": "PK",
      "name": "Tando Jam",
      "lat": "25.42813",
      "lng": "68.52923"
    },
    {
      "country": "PK",
      "name": "Tando Mitha Khan",
      "lat": "25.99625",
      "lng": "69.20251"
    },
    {
      "country": "PK",
      "name": "Tando Muhammad Khan",
      "lat": "25.12384",
      "lng": "68.53677"
    },
    {
      "country": "PK",
      "name": "Tangi",
      "lat": "34.3009",
      "lng": "71.65238"
    },
    {
      "country": "PK",
      "name": "Tangwani",
      "lat": "28.27886",
      "lng": "68.9976"
    },
    {
      "country": "PK",
      "name": "Tank",
      "lat": "32.21707",
      "lng": "70.38315"
    },
    {
      "country": "PK",
      "name": "Taunsa",
      "lat": "30.70358",
      "lng": "70.65054"
    },
    {
      "country": "PK",
      "name": "Thal",
      "lat": "35.47836",
      "lng": "72.24383"
    },
    {
      "country": "PK",
      "name": "Tharu Shah",
      "lat": "26.9423",
      "lng": "68.11759"
    },
    {
      "country": "PK",
      "name": "Thatta",
      "lat": "24.74745",
      "lng": "67.92353"
    },
    {
      "country": "PK",
      "name": "Thul",
      "lat": "28.2403",
      "lng": "68.7755"
    },
    {
      "country": "PK",
      "name": "Timargara",
      "lat": "34.82659",
      "lng": "71.84423"
    },
    {
      "country": "PK",
      "name": "Toba Tek Singh",
      "lat": "30.97127",
      "lng": "72.48275"
    },
    {
      "country": "PK",
      "name": "Topi",
      "lat": "34.07034",
      "lng": "72.62147"
    },
    {
      "country": "PK",
      "name": "Turbat",
      "lat": "26.00122",
      "lng": "63.04849"
    },
    {
      "country": "PK",
      "name": "Ubauro",
      "lat": "28.16429",
      "lng": "69.73114"
    },
    {
      "country": "PK",
      "name": "Umarkot",
      "lat": "25.36329",
      "lng": "69.74184"
    },
    {
      "country": "PK",
      "name": "Upper Dir",
      "lat": "35.2074",
      "lng": "71.8768"
    },
    {
      "country": "PK",
      "name": "Usta Muhammad",
      "lat": "28.17723",
      "lng": "68.04367"
    },
    {
      "country": "PK",
      "name": "Uthal",
      "lat": "25.80722",
      "lng": "66.62194"
    },
    {
      "country": "PK",
      "name": "Utmanzai",
      "lat": "34.18775",
      "lng": "71.76274"
    },
    {
      "country": "PK",
      "name": "Vihari",
      "lat": "30.0445",
      "lng": "72.3556"
    },
    {
      "country": "PK",
      "name": "Wana",
      "lat": "32.29889",
      "lng": "69.5725"
    },
    {
      "country": "PK",
      "name": "Warah",
      "lat": "27.44805",
      "lng": "67.79654"
    },
    {
      "country": "PK",
      "name": "Wazirabad",
      "lat": "32.44324",
      "lng": "74.12"
    },
    {
      "country": "PK",
      "name": "Yazman",
      "lat": "29.12122",
      "lng": "71.74459"
    },
    {
      "country": "PK",
      "name": "Zafarwal",
      "lat": "32.34464",
      "lng": "74.8999"
    },
    {
      "country": "PK",
      "name": "Zahir Pir",
      "lat": "28.81284",
      "lng": "70.52341"
    },
    {
      "country": "PK",
      "name": "Zaida",
      "lat": "34.0595",
      "lng": "72.4669"
    },
    {
      "country": "PK",
      "name": "Zhob",
      "lat": "31.34082",
      "lng": "69.4493"
    },
    {
      "country": "PK",
      "name": "Ziarat",
      "lat": "30.38244",
      "lng": "67.72562"
    }
  ]