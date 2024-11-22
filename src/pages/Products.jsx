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
  console.log(sort)

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
    <div className="bg-[#EDE9E9] min-h-screen ">
      <Helmet>
        <title>Products - UrbanNest</title>
      </Helmet>
      {/* container */}
      <div className="container mx-auto ">
        <h1 className="py-6 text-center text-3xl">All Products</h1>
        {/* content and filter bar */}
        <div className="grid grid-cols-12 gap-4 py-8">
          {/* filterbar */}
          <div className="col-span-2 ">
            <FilterBar 
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
            />
          </div>
          {/* product, searchbar and price sorting */}
          <div className="col-span-10 ">
            {/* searchbar and price sorting */}
            <div className="flex  justify-between">
              <SearchBar handleSearch={handleSearch} />
              <SortByPrice setSort={setSort}/>
            </div>
            {/* all products */}
            {loading ? (
              <Loader />
            ) : (
              <div className="min-h-screen mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            )}
             <div className="flex justify-center items-center gap-2 my-8 w-full">
            <button disabled={ page ===1} className="btn btn-outline text-xl" onClick={() => handlePageChange(page - 1)}>
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button className="btn btn-outline text-xl" onClick={() => handlePageChange(page + 1)}>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default Products;
