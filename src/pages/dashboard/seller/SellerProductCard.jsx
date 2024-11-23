import { Link } from 'react-router-dom';

const SellerProductCard = ({ product,handleDelete, handleUpdate }) => {
    return (
       
      <div className="card bg-[#EDE9E9] max-h-80 shadow-xl">
        <figure>
          <img src="/register.avif" alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-[#4A3137] font-semibold">${product.price}</p>
          <h2 className="card-title">{product.title}</h2>

          <div className="flex justify-between gap-4">
            <button onClick={()=>handleDelete(product._id)} className=" btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
              Delete
            </button>
            <button onClick={()=>handleUpdate(product._id)} className=" btn btn-sm text-white bg-[#4A3137] hover:bg-[#5E5449] border-none">
              Edit
            </button>
            <Link to={`/product/${product._id}`}>
            <button  onClick={()=>handleUpdate(product._id)} className=" btn btn-sm text-white bg-[#5E5449] hover:bg-[#5E5449] border-none">
              Details
            </button>
            </Link>
          </div>
        </div>
      </div>
  
    );
};

export default SellerProductCard;