/* eslint-disable react/prop-types */

import { IoMdSearch } from "react-icons/io";

const SearchBar = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch} className="flex  gap-[1px] rounded-l-md w-full">
        <input type="text"
        placeholder="Search Products"
        name="search"
        className="  p-[11px] border border-black rounded-l-md"
        />
        <button className="btn text-2xl text-white bg-[#5E5449] hover:bg-[#4A3137] border-none rounded-none rounded-r-md"><IoMdSearch/></button>
    </form>
    );
};

export default SearchBar;