const { model, Schema } = require("mongoose");

const CurrencySchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    rate_from_usd: {
      type: Number,
      required: false,
    },
  },
  { timestamps: { updatedAt: "updated_at", createdAt: "created_at" } }
);

module.exports = model("Currency", CurrencySchema);
