import { Schema, model, Document } from "mongoose";
import { IUser } from "./user";

interface IListing extends Document {
  title: string;
  description: string;
  price: number;
  userId: Schema.Types.ObjectId | IUser;
}

const listingSchema = new Schema<IListing>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 280,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},
{
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Listing = model<IListing>('Listing', listingSchema);

export { Listing, IListing };