export interface FormState {
  nameError: null | string;
  surnameError: null | string;
  birthdayError: null | string;
  durationError: null | string;
  supportError: null | string;
  fileError: null | string;
  agreementError: null | string;
  isSaved: boolean;
}
export interface IUser {
  name: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  file: Blob | undefined;
  support: string | undefined;
  duration: string | null;
}

export default interface IFormCard {
  name: string;
  birthday: string;
  country: string;
  file: string;
  gender: string;
}
export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
