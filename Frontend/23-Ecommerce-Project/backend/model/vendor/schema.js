const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      localAddress: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },
    documents: {
      aadhar_card_path: {
        type: String,
        required: true,
      },
      gst: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        images: [
          {
            id: {
              type: String,
              required: true,
            },
            path: {
              type: String,
              required: true,
            },
          },
        ],
        prices: {
          type: String,
          required: true,
        },
        reviews: [
          {
            user_id: {
              type: String,
              required: true,
            },
            review: {
              type: String,
              required: true,
            },
            rating: {
              type: Number,
              required: true,
            },
          },
        ],
        faq: [
          {
            question: {
              type: String,
              required: true,
            },
            answer: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
);

const vendor = mongoose.model("vendors", vendorSchema);
module.exports = vendor;
