import { useAuth0 } from "@auth0/auth0-react";
import RightContainer from "../components/RightContainer";
import SideBar from "../components/SideBar";
import { UserInterface } from "../interfaces/userInterface";
import { useEffect } from "react";
import axiosInstance from "../axios.config";

export const Home: React.FC = () => {
  const { isAuthenticated, user, getAccessTokenSilently } =
    useAuth0<UserInterface>();

  useEffect(() => {
    const registerUser = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently();
          const response = await axiosInstance.post(
            "/api/user/register",
            {
              email: user.email,
              name: user.name,
              auth0Id: user.sub,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return response.data;
        } catch (error) {
          console.error("Error singup:", error);
        }
      }
    };
    registerUser();
  }, [isAuthenticated, getAccessTokenSilently, user]);
  return (
    <>
      <SideBar />
      <RightContainer />
    </>
  );
};
