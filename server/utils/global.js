const URI =
  "mongodb+srv://owwibookstore:password@cluster0.o5luvip.mongodb.net/OwwiBookstore?retryWrites=true&w=majority";

const BASE_URL =
  "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=aa33bbb9-af49-f45b-d644-8834cff413be&category=8322&page=1&urlKey=nha-sach-tiki";

const SECRET_KEY = "owwi-bookstore";

function sleep(ms) {
  var start = new Date().getTime(),
    expire = start + ms;
  while (new Date().getTime() < expire) {}
  return;
}

exports.URI = URI;
exports.BASE_URL = BASE_URL;
exports.SECRET_KEY = SECRET_KEY;
exports.sleep = sleep;
