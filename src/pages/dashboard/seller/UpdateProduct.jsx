import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const token = localStorage.getItem("access-token");
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const title = data.title;
    const image = data.image;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const description = data.description;
    const SellerEmail = user.email;

    const product = {
      title,
      image,
      brand,
      price,
      stock,
      category,
      description,
      SellerEmail,
    };
    axiosPublic
      .patch(`/updateProduct/${loadedProduct._id}`, product, {
        headers: {
          authorization: `Bearer ${token}`, 
        },
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.modifiedCount) {
          console.log(res.data)
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/my-products')
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl"> Add Products</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-2 gap-12">
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                defaultValue={loadedProduct.title}
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm font-light">
                  Title is required
                </p>
              )}
            </div>
            {/* image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                defaultValue={loadedProduct.image}
                className="input input-bordered"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm font-light">
                  Image is required
                </p>
              )}
            </div>
          </div>
          {/* brand and category */}
          <div className="grid grid-cols-2 gap-12">
            {/* brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                defaultValue={loadedProduct.brand}
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-red-500 text-sm font-light">
                  Brand is required
                </p>
              )}
            </div>
            {/* category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                defaultValue={loadedProduct.category}
                className="input input-bordered"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm font-light">
                  Title is required
                </p>
              )}
            </div>
          </div>
          {/* price and Stock */}
          <div className="grid grid-cols-2 gap-12">
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={loadedProduct.price}
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm font-light">
                  Price is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                defaultValue={loadedProduct.price}
                className="input input-bordered"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className="text-red-500 text-sm font-light">
                  Stock is required
                </p>
              )}
            </div>
          </div>
          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              defaultValue={loadedProduct.description}
              className="textarea textarea-bordered"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm font-light">
                Description is required
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
