import { useState, createContext } from "react";
import HandleFormat from "./Components/HandleFormat";
import UserCv from "./Components/UserCv";
import HandleEditPage from "./Components/HandleEditPage";
import downloadPdf from "../utils/downloadPdf";
export const AppContext = createContext();

const App = () => {
  const [fullName, setFullName] = useState("John Smith");
  const [email, setEmail] = useState("johnsmith@yahoo.mail");
  const [phone, setPhone] = useState("+99 456 9854 234");
  const [address, setAddress] = useState("Liverpool, England");
  const [editIndex, setEditIndex] = useState(null);
  const [educationEntries, setEducationEntries] = useState([
    {
      school: "Harvard University",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2015-09-01",
      endDate: "2019-05-15",
      location: "Cambridge, MA, USA"
    },
    {
      school: "Stanford University",
      degree: "Master of Science in Artificial Intelligence",
      startDate: "2019-09-01",
      endDate: "2021-06-15",
      location: "Stanford, CA, USA"
    }
  ]);

  const [experienceEntries, setExperienceEntries] = useState([
    {
      company: "Google",
      positionTitle: "Software Engineer",
      startDate: "2021-07-01",
      endDate: "2023-06-30",
      location: "Mountain View, CA, USA",
      description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android."
    },
    {
      company: "Microsoft",
      positionTitle: "Senior Developer",
      startDate: "2019-08-01",
      endDate: "2021-06-30",
      location: "Redmond, WA, USA",
      description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
    }
  ]);

  const [school, setSchool] = useState(editIndex !== null ? educationEntries[editIndex]?.school || "" : "");
  const [degree, setDegree] = useState(editIndex !== null ? educationEntries[editIndex]?.degree || "" : "");
  const [startDate, setStartDate] = useState(editIndex !== null ? educationEntries[editIndex]?.startDate || "" : "");
  const [endDate, setEndDate] = useState(editIndex !== null ? educationEntries[editIndex]?.endDate || "" : "");
  const [location, setLocation] = useState(editIndex !== null ? educationEntries[editIndex]?.location || "" : "");

  const [active, setActive] = useState("content");
  const [activeLayout, setActiveLayout] = useState("top");
  const [activeFont, setActiveFont] = useState("lato");
  const [selectedColor, setSelectedColor] = useState("slate-800");

  return (
    <div className="bg-slate-100 p-7">
      <AppContext.Provider value={{
        fullName, setFullName, email, setEmail, phone, setPhone, address, setAddress,
        school, setSchool, degree, setDegree, startDate, setStartDate, endDate, setEndDate,
        location, setLocation, editIndex, setEditIndex, educationEntries, setEducationEntries,
        experienceEntries, setExperienceEntries, selectedColor, setSelectedColor
      }}>
        <div className="flex flex-col lg:flex-row justify-between items-start relative">
          <div className="w-1/12 sticky top-0">
            <HandleFormat active={active} setActive={setActive} />
          </div>
          <div className="w-3/10">
            <HandleEditPage
              active={active}
              activeLayout={activeLayout}
              setActiveLayout={setActiveLayout}
              activeFont={activeFont}
              setActiveFont={setActiveFont}
            />
          </div>
          <div id="user-cv" className="w-[793px] h-[842px]">
            <UserCv activeLayout={activeLayout} activeFont={activeFont} />
          </div>
        </div>
        <button onClick={()=>{downloadPdf()}}>Download Cv</button>
      </AppContext.Provider>
    </div>
  );
};

export default App;
