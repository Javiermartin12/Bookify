import React, { useEffect } from "react";
import RightContainer from "../components/RightContainer";
import SideBar from "../components/SideBar";
import { useAuth0 } from "@auth0/auth0-react";
import axiosInstance from "../axios.config";

export const Home: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const createOrFetchUser = async () => {
      try {
        const token = await getAccessTokenSilently();
        await axiosInstance.post(
          "/user",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Error creating/fetching user", error);
      }
    };
    createOrFetchUser();
  }, [getAccessTokenSilently]);
  return (
    <>
      <SideBar />
      <RightContainer />
    </>
  );
};
