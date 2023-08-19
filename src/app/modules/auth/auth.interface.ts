import { ENUM_USER_ROLE } from '../../../enums/user';
import { IStudent } from '../student/student.interface';

export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  logInUserRole?: string;
  student?: IStudent;
  email?: string;
  name?: string | undefined;
};

export type IRefreshTokenResponse = {
  accessToken: string;
  role?: string;
};

export type IVerifiedLoginUser = {
  email: string;
  role: ENUM_USER_ROLE;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
