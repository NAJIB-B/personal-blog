/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList, faThLarge } from "@fortawesome/free-solid-svg-icons";



const activeTab = {
  home: "HOME",
  tech: "TECH",
  quran: "QURAN",
  workout: "WORKOUT",
};
const CategoryBar = ({isList, toggleView, setActiveTab, isActive }) => {

	

  return (
    <>
      <hr />
      <div className="flex flex-row justify-between items-center mt-2 mb-4">
        <div className="flex justify-between gap-4">
          <p
            className={
              isActive === activeTab.home ? "border-b-2 border-[#4169E1] cursor-pointer" : "cursor-pointer"
            }
            onClick={()=> setActiveTab(activeTab.home)}
          >
            Home
          </p>
          <p
            className={
              isActive === activeTab.tech ? "border-b-2 border-[#4169E1] cursor-pointer" : "cursor-pointer"
            }
            onClick={()=> setActiveTab(activeTab.tech)}
          >
            Tech
          </p>
          <p
            className={
              isActive === activeTab.quran ? "border-b-2 border-[#4169E1] cursor-pointer" : "cursor-pointer"
            }
            onClick={()=> setActiveTab(activeTab.quran)}
          >
            Quran
          </p>
          <p
            className={
              isActive === activeTab.workout ? "border-b-2 border-[#4169E1] cursor-pointer" : "cursor-pointer"
            }
            onClick={()=> setActiveTab(activeTab.workout)}
          >
            Workout
          </p>
        </div>
        <div>
          <button
            className="border-[1px] px-3 py-2 rounded-xl  flex items-center gap-2"
            onClick={toggleView}
          >
            {isList ? (
              <FontAwesomeIcon icon={faThLarge} />
            ) : (
              <FontAwesomeIcon icon={faThList} />
            )}
            <span>View</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryBar;
