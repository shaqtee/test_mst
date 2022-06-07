import axios from "axios";

const pullData = async ({ username, password, email, photo }) => {
  try {
    const res = await axios.post("/auth/register", {
      username,
      password,
      email,
      photo,
    });
    return { res };
  } catch (error) {
    return { error };
  }
};

export default pullData;
