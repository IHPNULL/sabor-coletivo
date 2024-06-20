export interface UserType {
  name: String;
  userCode?: number;
  _id?: string;
  profilePic: string;
  followers: UserType[];
  following: UserType[];
  age?: Number;
  token?: string;
}

export interface UserAuthType {
  senha: String;
  email: String;
}
