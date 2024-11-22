// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useUsersInfo = (email) => {
//   const axiosPublic = useAxiosPublic();

//   const {
//     data: users = [],
//     isLoading: loading,
//     refetch,
//   } = useQuery({
//     queryKey: ["users", email,], 
//     queryFn: async () => {
     
//         const res = await axiosPublic.get(`/users/${email}`);
//         return res.data;
      
//     },
//     enabled: !!email 
//   });

//   return [users, loading, refetch];
// };

// export default useUsersInfo;
