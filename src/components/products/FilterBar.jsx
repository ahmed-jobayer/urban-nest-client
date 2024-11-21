/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({
    setBrand,
    setCategory,
    handleReset,
    uniqueBrand,
    uniqueCategory,
  }) => {
    return (
        <div className="min-h-screen bg-[#5E5449] rounded-xl p-4 text-white">
               <div className="flex items-center gap-1">
        <TbFilter className="text-xl" />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className="my-4 flex flex-col gap-4">
        <div>
          <select
            className="select select-bordered w-full max-w-xs bg-[#4A3137]"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option>Brand</option>
            {/* {uniqueBrand.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))} */}
          </select>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs bg-[#4A3137]"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option> Category </option>
            {/* {uniqueCategory.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))} */}
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="btn w-full btn-sm text-white bg-[#4A3137] hover:bg-[#5E5449] border-none">
        <GrPowerReset /> Reset
      </button>
        </div>
    );
};

export default FilterBar;