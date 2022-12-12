const base_url =
  "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&category=8322&page=1&urlKey=nha-sach-tiki";
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

const fetchItems = async () => {
  const respone = await fetch(item_urls[i]);
  const bookinfo = await respone.json();
  if (bookinfo.authors){

  }
  items.push({
    title: bookinfo.name,
    amount: 50,
    authors: bookinfo.authors,
    categories: bookinfo.categories,
    description: bookinfo.description,
    images: bookinfo.images.map(i => i.base_url),
    price: bookinfo.price,
    publisher: bookinfo.specifications[0].attributes[0].value,
    quantity_sold: 0,
    rate: 0,
    short_description: bookinfo.short_description,
  });
  sleep(1000);
  console.log(i);
  i = i + 1;
  if (i < item_urls.length) {
    fetchItems();
  } else {
    fs.writeFileSync("./data.json", JSON.stringify(items), (err) => {
      console.log(err);
    });
  }
};

const getItemUrls = async () => {
  const respone = await fetch(base_url);
  const data = await respone.json();
  data.data.forEach((item) => {
    const url = `https://tiki.vn/api/v2/products/${item.id}?platform=web&spid=${item.id}`;
    item_urls.push(url);
  });
  fetchItems();
};

getItemUrls();
