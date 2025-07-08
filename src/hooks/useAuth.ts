import axios from "axios";

const useAuth = () => {
  const loginUser = async (username: string, password: string) => {
    const loginRoute = process.env.NEXT_PUBLIC_API_URL + "/login";
    try {
      const res = await axios.post(loginRoute, {
        username,
        password,
      });
      const data = await res.data;
      if (data.success) {
        localStorage.setItem("token", data.token);
        return { success: true, message: "Login successful" };
      }
    } catch (error) {
      console.log("Error logging in:", error);
      return { success: false, message: "Login failed" };
    }
  };
  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    const registerRoute = process.env.NEXT_PUBLIC_API_URL + "/register";
    try {
      const res = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      const data = await res.data;
      if (data.success) {
        return { success: true, message: "Registration successful" };
      }
    } catch (error) {
      console.log("Error registering:", error);
      return { success: false, message: "Registration failed" };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    return { success: true, message: "Logout successful" };
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if token exists, false otherwise
  };

  return {
    loginUser,
    registerUser,
    logoutUser,
    isAuthenticated,
  };
};

export default useAuth;
