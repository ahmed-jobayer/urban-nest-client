import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../Loader";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      //   console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    // console.log(id);
    const res = await axiosPublic.delete(`/deleteUser/${id}`);
    console.log(res.data)
    if (res?.data?.deletedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
   
  };
  const handleMakeSeller = (id) => {
    console.log(id);
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-center mt-6 mb-12 text-2xl font-semibold">
        <span className="border-b-2 border-black px-2">All Users</span>
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Make Seller</th>
            <th>Delet User</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          {users.map((user, indx) => (
            <tr
              key={user._id}
              className=" hover:bg-[#5E5449] hover:text-white "
            >
              <th>{indx + 1}</th>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td className=" text-xl pl-8 ">
                <GiProgression
                  className="hover:cursor-pointer"
                  onClick={() => handleMakeSeller(user._id)}
                />
              </td>

              <td className=" text-xl pl-8">
                <RiDeleteBinLine
                  className="hover:cursor-pointer"
                  onClick={() => handleDelete(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
