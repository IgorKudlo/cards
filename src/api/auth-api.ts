import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

// api
export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post('auth/login', data);
  },
  register(data: RegisterParamsType) {
    return instance.post('auth/register', data);
  },
  me() {
    return instance.post('auth/me');
  },
  updateUserData(data: updateUserDataParamsType) {
    return instance.put('auth/me', data);
  },
  logOut() {
    return instance.delete('auth/login');
  },
  forgotPassword(data: forgotPasswordParamsType) {
    return instance.post('auth/forgot', data);
  },
  setNewPassword(data: setNewPasswordParamsType) {
    return instance.post('auth/set-new-password', data);
  },
};

// types
export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegisterParamsType = {
  email: string
  password: string
}

export type updateUserDataParamsType = {
  name: string
  avatar: string
}

export type forgotPasswordParamsType = {
  email: string
  from: string
  message: string
}

export type setNewPasswordParamsType = {
  password: string
  resetPasswordToken: string
}
