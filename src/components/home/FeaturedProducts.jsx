import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../pages/Loader";

const FeaturedProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axiosPublic.get(`/all-products?page=1&limit=6`).then((res) => {
        setProducts(res.data.products);
        setLoading(false);
        // console.log(res.data);
      });
    };
    fetch();
  }, [axiosPublic]);

  return (
    <div className="my-4 ">
      <h2 className="text-2xl border-b-2">Featured Products</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="my-4 grid lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
