export interface FormUserType {
    firstName: string;
    lastName: string;
    category: string
    email: string;
    password: string;
    password2: string;
  }
  
  export interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
  }
  
  export const ACTION_TYPES = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
  };
  
  export interface FormType {
    title: string;
    desc: string;
    price: number;
    category: string;
    tags: any[];
    images: Images;
    quantity: number;
  }
  
  export interface Images {
    sm: string;
    md: string;
    lg: string;
  }
  
  export interface FormInputType {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage?: string;
    label: string;
    pattern?: string;
    required?: boolean;
  }
  