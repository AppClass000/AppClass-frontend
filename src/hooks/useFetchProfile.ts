import { useEffect } from "react";
import { getProfileUserID } from "../services/api";
import { useUserData } from "../contexts/UserDataContext";
import { ProfileData } from "../types/type";

const useFetchProfile = () => {
  const { setProfile } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileUserID<ProfileData>();
        console.log("profile:", response.name);

        setProfile(prevProfile => ({
          ...prevProfile,
          name: response.name,
          email: response.email
        }));
      } catch (error) {
        console.error("Error in getProfile:", error);
      }
    };

    fetchData();
  }, [setProfile]);
};

export default useFetchProfile;
