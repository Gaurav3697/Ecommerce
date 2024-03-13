import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the product name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the product description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price"],
  },
  rating: {
    type: Number,
    required: [true, "Please Enter the rating"],
  },
  image: [
    //image will be object of many images
    {
      public_id: {
        //the website we will use will give the public_Id of the image
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter stock"],
    default:1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("productSchema", schema);
