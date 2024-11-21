import { Helmet } from "react-helmet-async";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="bg-[#EDE9E9] min-h-screen ">
      <Helmet>
        <title>Products - UrbanNest</title>
      </Helmet>
      {/* container */}
      <div className="container mx-auto ">
        <h1 className="py-6 text-center text-3xl">All Products</h1>
        {/* content and filter bar */}
        <div className="grid grid-cols-12 gap-4">
            {/* filterbar */}
          <div className="col-span-2">
          <FilterBar />
          </div>
          {/* product, searchbar and price sorting */}
          <div className="col-span-10 ">
          {/* searchbar and price sorting */}
            <div className="flex  justify-between">
              <SearchBar />
              <SortByPrice />
            </div>
            {/* all products */}
            <div className="min-h-screen mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
