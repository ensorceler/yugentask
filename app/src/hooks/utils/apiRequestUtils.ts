import axios from "axios";
import useAuthStore from "../../store/useAuthStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getApi = async (url: string) => {
  try {
    const response = await axios(`${process.env.AWS_BE_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getApiAuth = async (url: string) => {
  try {
    const AuthState = await AsyncStorage.getItem("AuthToken");
    let authToken = "0";
    if (AuthState != null) {
      const state = JSON.parse(AuthState!);
      authToken = state.state.authToken;
    }
    const res = await axios(`${process.env.AWS_BE_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: authToken,
      },
    });
    return res;
  } catch (err: any) {
    return { err, ...err.response };
  }
};

export const postApiAuth = async (url: string, body: Object) => {
  try {
    const response = await axios(`${process.env.AWS_BE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYjM1MWE0LTc4ZGQtNDA5NS04YzQ0LTBlMjVmOTU2N2FlZiIsImlhdCI6MTY4MTU0NDk1MSwiZXhwIjoxNjgxNjMxMzUxfQ.dwtssyBorY_kJ6qrEeFUa9nZCSCDeKbMp8g8xkQUhMk",
      },
      data: body,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const postApi = async (url: string, body: Object) => {
  try {
    const res = await axios(`${process.env.AWS_BE_URL}/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: body,
    });
    return res;
  } catch (err: any) {
    return { err, ...err.response };
  }
};
export const putApiAuth = async (url: string) => {
  try {
    const res = await fetch(`${process.env.AWS_BE_URL}/${url}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYjM1MWE0LTc4ZGQtNDA5NS04YzQ0LTBlMjVmOTU2N2FlZiIsImlhdCI6MTY4MTU0NDk1MSwiZXhwIjoxNjgxNjMxMzUxfQ.dwtssyBorY_kJ6qrEeFUa9nZCSCDeKbMp8g8xkQUhMk",
      },
    });
    const response = res.json();
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteApiAuth = async (url: string) => {
  try {
    const res = await fetch(`${process.env.AWS_BE_URL}/${url}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhYjM1MWE0LTc4ZGQtNDA5NS04YzQ0LTBlMjVmOTU2N2FlZiIsImlhdCI6MTY4MTU0NDk1MSwiZXhwIjoxNjgxNjMxMzUxfQ.dwtssyBorY_kJ6qrEeFUa9nZCSCDeKbMp8g8xkQUhMk",
      },
    });
    const response = res.json();
    return response;
  } catch (err) {
    return err;
  }
};
