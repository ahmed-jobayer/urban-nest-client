import { Helmet } from "react-helmet-async";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "./Loader";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  // console.log(sort)

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axiosPublic
        .get(
          `/all-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalproducts / 9));
          setLoading(false);
          console.log(res.data);
        });
    };
    fetch();
  }, [search, sort, brand, category, page, axiosPublic]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
    console.log(e.target.search.value);
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#EDE9E9] min-h-screen">
    <Helmet>
      <title>Products - UrbanNest</title>
    </Helmet>
 
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="py-6 text-center text-2xl md:text-3xl">All Products</h1>

      {/* filter  for mobile */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          className="btn btn-outline bg-[#5E5449] text-white hover:bg-[#4A3137]"
          onClick={() => setShowFilter(true)}
        >
          Filter
        </button>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8">

        <div className="hidden lg:block lg:col-span-3">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>

        {/* product  */}
        <div className="lg:col-span-9 col-span-1">
          {/* Search Bar Price Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <SearchBar handleSearch={handleSearch} />
            <SortByPrice setSort={setSort} />
          </div>
          {/* products */}
          {loading ? (
            <Loader />
          ) : (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          {/* pagination */}
          <div className="flex justify-center items-center gap-4 my-8">
            <button
              disabled={page === 1}
              className="btn btn-outline text-xl disabled:opacity-50"
              onClick={() => handlePageChange(page - 1)}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button
              className="btn btn-outline text-xl"
              onClick={() => handlePageChange(page + 1)}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* mobile filter */}
    {showFilter && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white w-11/12 sm:w-3/4 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button
              className="text-red-500 font-bold"
              onClick={() => setShowFilter(false)}
            >
              Close
            </button>
          </div>
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
          <button
            className="btn btn-outline bg-[#5E5449] text-white hover:bg-[#4A3137] w-full mt-4"
            onClick={() => setShowFilter(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Products;
