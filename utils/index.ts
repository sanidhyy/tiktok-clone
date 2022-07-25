import axios from "axios";
import jwtDecode from "jwt-decode";

// base url
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// create or get user
export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: { name: string; picture: string; sub: string } = jwtDecode(
    response.credential
  );

  const { name, picture, sub } = decoded;

  // user
  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  // add user
  addUser(user);

  // insert user
  await axios.post(`${BASE_URL}/api/auth`, user);
};
