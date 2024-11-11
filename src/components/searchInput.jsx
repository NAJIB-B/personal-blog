import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="flex justify-center my-[2rem] flex-col">
      <div className="relative w-[50%] m-auto">
        <input
          type="text"
          value={value}
          name="search"
          onChange={handleChange}
          placeholder="Search this blog"
          className="border-[1px] border-[#D3D3D3] p-4 rounded-xl w-full bg-[#E5E4E2] outline-none"
        ></input>
        <button className="absolute bg-[#0096FF] px-4 py-2 rounded-xl right-2 top-[50%] translate-y-[-50%] text-white ">
       
		  <FontAwesomeIcon icon={faMagnifyingGlass} inverse className="px-1" />Search
        </button>
      </div>
    </div>
  );
}
