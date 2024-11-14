import { Schema, model, type Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  technologies: string[];
  description: string;
  links: string[];
  listings: Schema.Types.ObjectId[];
  jobs: Schema.Types.ObjectId[];
  isCorrectPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            v
          ),
        message:
          "Password must be at least 8 characters long, contain at least one letter, one number, and one speical character.",
      },
    },
    role: {
      type: String,
      required: false,
    },
    technologies: {
      type: [String],
      required: false,
    },
    description: {
      type: String,
      required: false,
      maxLength: 800,
    },
    links: {
      type: [String],
      required: false,
      validate: {
        validator: (v: string[]) =>
          v.every((url) =>
            /^(https?:\/\/[^\s/$.?#].[^\s]*$)|(^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/\w \.-]*)*\/?$)/.test(
              url
            )
          ),
        message: "Each link must be a valid URL.",
      },
    },
    listings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

userSchema.pre<IUser>("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", userSchema);

export { User, IUser };
