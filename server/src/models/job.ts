import { Schema, model, type Document } from "mongoose";
import { IListing } from "./listing";
import { IUser } from "./user";

interface IJob extends Document {
  listing: Schema.Types.ObjectId | IListing;
  user: Schema.Types.ObjectId | IUser;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const jobSchema = new Schema<IJob>(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "cancelled"],
      default: "pending",
    },
  },

  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Job = model<IJob>('Job', jobSchema);

export { Job, IJob }