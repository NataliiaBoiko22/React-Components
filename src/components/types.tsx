export interface IUser {
  name: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  file: Blob | undefined;
  support: string | undefined;
  duration: string | null;
  agreement: boolean;
}
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

export interface Card {
  name: string;
  surname: string;
  birthday: string;
  file: File | null;
  support: string;
  duration: string;
  agreement: boolean;
}
