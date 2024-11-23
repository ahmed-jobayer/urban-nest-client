
const Cart = () => {
    return (
        <div>
             <h2 className="text-center mt-6 mb-12 text-2xl font-semibold">
        <span className="border-b-2 border-black px-2">Cart</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-gray-100">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Cart;