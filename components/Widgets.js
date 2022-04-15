import {VideoCameraIcon, SearchIcon, DotsHorizontalIcon} from "@heroicons/react/solid"
import Contact from "./Contact";
const contacts = [
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
  },
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',  },
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',  },
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',  },
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',  },
  {
      name: 'Cristiano Ronaldo',
      src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',  },
];
const Widgets = () => {
  return (
    <div className="hidden lg:flex w-60 p-2 mt-5 flex-col">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact)=> <Contact key={contact.src} src={contact.src} name={contact.name}/>)}
    </div>
  )
}

export default Widgets
