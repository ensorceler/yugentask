import * as jwt from "jsonwebtoken";

const secretKey = "andrew_tate_topG";

export const signJWTToken = (data: any) => {
  const token = jwt.sign(data, secretKey, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyJWTToken = (token: string): [boolean, any] => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return [true, decoded];
  } catch (err) {
    return [false, err];
  }
};
