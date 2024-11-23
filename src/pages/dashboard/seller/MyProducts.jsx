import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../Loader";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SellerProductCard from "./SellerProductCard";

const MyProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`seller-products?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data);
      return res.data;
    },
  });
  console.log(products);

// delete product
  const handleDelete = async (id) => {
    // console.log(id);
    const res = await axiosPublic.delete(`/deleteProduct/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    if (res?.data?.deletedCount) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  const handleUpdate = async (id) => {
    // console.log(id);
    const res = await axiosPublic.patch(`//${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    if (res?.data?.modifiedCount) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Role Updated to Seller Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-center mt-6 mb-12 text-2xl font-semibold">
        <span className="border-b-2 border-black px-2">All Products</span>
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        {products?.map((product) => (
          <SellerProductCard 
          key={product._id} 
          product={product}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}  />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
