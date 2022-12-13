const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  authors: [
    {
      authorId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Author",
      },
      name: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    name: { type: String, require: true },
  },
  publisher: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  images: [
    {
      url: { type: String },
    },
  ],
  amount: {
    type: Number,
    require: true,
  },
  quantity_sold: {
    type: Number,
  },
  description: {
    type: String,
  },
  short_description: {
    type: String,
  },
  rate: {
    type: Number,
  },
});

bookSchema.methods.addAuthor = function (id, name) {
  this.authors.push({ authorId: id, name: name });
  return this.save();
};

module.exports = mongoose.model("Book", bookSchema);

// const getDB = require("../utils/database").getDB;

// class Book {
//   constructor(
//     title,
//     authors,
//     categories,
//     publisher,
//     price,
//     images,
//     amount,
//     quantity_sold,
//     description,
//     short_description,
//     rate
//   ) {
//     this.title = title;
//     this.authors = authors;
//     this.categories = categories;
//     this.publisher = publisher;
//     this.price = price;
//     this.images = images;
//     this.amount = amount;
//     this.quantity_sold = quantity_sold;
//     this.description = description;
//     this.short_description = short_description;
//     this.rate = rate;
//   }

//   save() {
//     const db = getDB();
//     return db
//       .collection("books")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static fetchAll() {
//     const db = getDB();
//     return db
//       .collection("books")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Book;
