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
      location: "Cambridge, MA, USA",
    },
    {
      school: "Stanford University",
      degree: "Master of Science in Artificial Intelligence",
      startDate: "2019-09-01",
      endDate: "2021-06-15",
      location: "Stanford, CA, USA",
    },
  ]);

  const [experienceEntries, setExperienceEntries] = useState([
    {
      company: "Google",
      positionTitle: "Software Engineer",
      startDate: "2021-07-01",
      endDate: "2023-06-30",
      location: "Mountain View, CA, USA",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.",
    },
    {
      company: "Microsoft",
      positionTitle: "Senior Developer",
      startDate: "2019-08-01",
      endDate: "2021-06-30",
      location: "Redmond, WA, USA",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
  ]);

  const [school, setSchool] = useState(
    editIndex !== null ? educationEntries[editIndex]?.school || "" : ""
  );
  const [degree, setDegree] = useState(
    editIndex !== null ? educationEntries[editIndex]?.degree || "" : ""
  );
  const [startDate, setStartDate] = useState(
    editIndex !== null ? educationEntries[editIndex]?.startDate || "" : ""
  );
  const [endDate, setEndDate] = useState(
    editIndex !== null ? educationEntries[editIndex]?.endDate || "" : ""
  );
  const [location, setLocation] = useState(
    editIndex !== null ? educationEntries[editIndex]?.location || "" : ""
  );

  const [active, setActive] = useState("content");
  const [activeLayout, setActiveLayout] = useState("top");
  const [activeFont, setActiveFont] = useState("lato");
  const [selectedColor, setSelectedColor] = useState("slate-800");

  return (
    
    <div className="bg-slate-100 p-5">
      <p className="text-center text-sm text-blue-600 mt-2 font-bold block md:hidden">
  For the best experience, please turn on "Desktop site" mode in your browser settings.
</p>

      <AppContext.Provider
        value={{
          fullName,
          setFullName,
          email,
          setEmail,
          phone,
          setPhone,
          address,
          setAddress,
          school,
          setSchool,
          degree,
          setDegree,
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          location,
          setLocation,
          editIndex,
          setEditIndex,
          educationEntries,
          setEducationEntries,
          experienceEntries,
          setExperienceEntries,
          selectedColor,
          setSelectedColor,
          activeLayout,
        }}>
        <div className="flex flex-col lg:flex-row justify-between items-start relative gap-1">
          <div className="flex lg:flex-row justify-between gap-3 w-full lg:w-auto">
            <div className="w-full lg:w-auto sticky top-0">
              <HandleFormat active={active} setActive={setActive} />
            </div>
            <div className="w-full lg:w-auto">
              <HandleEditPage
                active={active}
                activeLayout={activeLayout}
                setActiveLayout={setActiveLayout}
                activeFont={activeFont}
                setActiveFont={setActiveFont}
              />
            </div>
          </div>
          <div id="user-cv" className="w-full max-w-[1000px]">
            <UserCv activeLayout={activeLayout} activeFont={activeFont} />
          </div>
        </div>
        <button
          onClick={() => {
            downloadPdf();
          }}
          className="fixed bottom-0 left-0 w-full bg-blue-600 text-white py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Download CV
        </button>
      </AppContext.Provider>
      
    </div>
  );
};

export default App;
