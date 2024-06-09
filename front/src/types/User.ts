export interface UserType {
  userCode: Number;
  name: String;
  profilePic: string;
  followers: UserType[];
  following: UserType[];
  age: Number;
}

export type UserAuthType = {
  senha: String;
  email: String;
  userCode: Number;
};
