import axios from "axios";
import { jwtDecode } from "jwt-decode";
import type { CredentialResponse } from "@react-oauth/google";

import { IUser } from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (
  response: CredentialResponse,
  addUser: (user: IUser) => void,
) => {
  if (!response.credential) return;

  const decoded: { name: string; picture: string; sub: string } = jwtDecode(
    response.credential,
  );

  const { name, picture, sub } = decoded;

  const user: IUser = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  addUser(user);

  await axios.post(`${BASE_URL}/api/auth`, user);
};

