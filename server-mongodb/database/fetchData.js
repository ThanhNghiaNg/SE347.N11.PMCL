const mongoose = require("mongoose");

const URI = require("../utils/global").URI;
const BASE_URL = require("../utils/global").BASE_URL;

const Author = require("../models/author");
const Book = require("../models/book");

const item_urls = [];
const items = [];

const fs = require("fs");

function sleep(ms) {
  var start = new Date().getTime(),
    expire = start + ms;
  while (new Date().getTime() < expire) {}
  return;
}

let i = 0;
let fetchNumber = 0;

const fetchItems = async () => {
  const respone = await fetch(item_urls[i]);
  const bookinfo = await respone.json();
  if (bookinfo.authors) {
    console.log(item_urls[i]);
    // Create new book
    const newBook = new Book({
      title: bookinfo.name,
      amount: 50,
      authors: [],
      categories: bookinfo.categories,
      description: bookinfo.description,
      images: bookinfo.images.map((i) => {
        return {
          url: i.base_url,
        };
      }),
      price: bookinfo.price,
      publisher: bookinfo.specifications[0].attributes[0].value,
      quantity_sold: 0,
      rate: 0,
      short_description: bookinfo.short_description,
    });

    // Add author if not in database
    bookinfo.authors.forEach((author) => {
      Author.findOne({ name: author.name, pseudonym: author.pseudonym }).then(
        (authorFounded) => {
          if (!authorFounded) {
            const newAuthor = new Author({
              name: author.name,
              pseudonym: author.pseudonym,
            });
            console.log(newAuthor);
            return newAuthor
              .save()
              .then(() => {
                fetchNumber += 1;
                return newBook.addAuthor(newAuthor._id, newAuthor.name);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      );
    });
  }

  sleep(1000);
  console.log(i);
  i = i + 1;
  if (i < item_urls.length) {
    fetchItems();
  } else {
    console.log(
      `Successfully fetch ${fetchNumber} books, and related authors, categories`
    );
    fs.writeFileSync("./data.json", JSON.stringify(items), (err) => {
      console.log(err);
    });
  }
};

const getItemUrls = async () => {
  const respone = await fetch(BASE_URL);
  const data = await respone.json();
  data.data.forEach((item) => {
    const url = `https://tiki.vn/api/v2/products/${item.id}?platform=web&spid=${item.id}`;
    item_urls.push(url);
  });
  fetchItems();
};

mongoose.connect(URI).then((res) => {
  return getItemUrls();
});
