export interface AddUserArgs {
  input: {
    username: string;
    email: string;
    password: string;
    role?: string;
    technologies?: string[];
    description?: string;
    links?: string[];
  };
}

export interface AddListingArgs {
  input: {
    title: string;
    description: string;
    price: number;
    userId: string;
  };
}

export interface AddJobArgs {
  input: {
    listingId: string;
    userId: string;
    status: string;
  };
}

export interface UpdateUserArgs {
  input: {
    _id: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    technologies?: string[];
    description?: string;
    links?: string[];
  };
}

export interface UpdateListingArgs {
  input: {
    _id: string;
    title: string;
    description: string;
    price: number;
  };
}

export interface UpdateJobArgs {
  input: {
    _id: string;
    status: string;
  };
}

export interface UserArgs {
  username: string;
}

export interface ListingArgs {
  _id: string;
}

export interface JobArgs {
  _id: string;
}

export interface LoginUserArgs {
  username: string;
  password: string;
}

export interface findApplicantsByListingIdArgs {
  _id: string;
}
