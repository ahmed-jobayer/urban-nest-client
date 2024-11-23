import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState({});
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axiosPublic.get(`/user/${user.email}`);
      setUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading, axiosPublic]);
  return userData;
};

export default useUserData;
