const https = require("https");
const path = require("path");
const fs = require("fs");
const Book = require("../models/book");
const base_urls = [
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&category=871", // Sách tư duy, kỹ năng sống
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&category=853", // Kiến thức, bách khoa
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&category=844", // Tiểu thuyết
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&category=845", // Truyện ngắn, tản văn, tạp văn
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&category=1084", // Comic, manga, truyện tranh
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&publisher_vn=1849", // Sách Thái Hà
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&author=4107", // Sách Nguyễn Nhật Ánh
  "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&q=s%C3%A1ch&author=17557,188987", // Echiro Oda
];
const timeOut = 1000;
const fetchData = () => {
  base_urls.forEach((base_url) => {
    const dataPromist = new Promise((resolve, rejects) => {
      https.get(base_url, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            let respone = JSON.parse(body);
            resolve(respone);
          } catch (err) {
            console.log(err);
          }
        });
      });
    }).then((respone) => {
      for (id of respone.data.map((book) => book.id)) {
        const url = `https://tiki.vn/api/v2/products/${id}?platform=web&spid=${id}`;
        console.log(url);
        https.get(url, (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk;
          });
          res.on("end", () => {
            try {
              const obj = JSON.parse(body);
              const description = obj.description;
              const counterDescription = new Date().getTime();
              const pathDescription = path.join(
                process.mainModule.path,
                "publics",
                "descriptions",
                `description${counterDescription}.txt`
              );
              fs.writeFile(
                pathDescription,
                JSON.stringify(description),
                (err) => {
                  console.log(err);
                }
              );
              Book.create({
                title: obj.name,
                author: JSON.stringify(
                  obj.authors.map((author) => author.name)
                ),
                category: obj.categories.name,
                publisher: obj.specifications[0].attributes[0].value,
                price: obj.original_price,
                images: JSON.stringify(obj.images.map((i) => i.base_url)),
                amount: 50,
                quantity_sold: 0,
                description: pathDescription,
                short_description: obj.short_description,
                rate: obj.rating_average,
              });
              console.log("Add book sucess");
              return;
            } catch (err) {
              // console.log(err);
              console.log(`fail to fetch: ${url}`);
            }
          });
        });
      }
    });
  });
};

module.exports = fetchData;
