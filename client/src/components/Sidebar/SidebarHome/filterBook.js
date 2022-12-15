const filterBook = (allFilters, allProducts) => {
  let result = allProducts;
  // console.log(allFilters);

  if (allFilters.category !== null && allFilters.category.length !== 0) {
    let filtered = [];
    if (result.length > 0) {
      allFilters.category.forEach((condition) => {
        filtered = filtered.concat(
          result.filter((book) => book.category === condition)
        );
      });
      result = filtered;
    }
  }

  if (allFilters.authors !== null && allFilters.authors.length !== 0) {
    let filtered = [];
    if (result.length > 0) {
      allFilters.authors.forEach((condition) => {
        filtered = filtered.concat(
          result.filter((book) => {
            const authors = book.authors.map((author) => author.name);
            return authors.includes(condition);
          })
        );
      });
      result = filtered;
    }
  }

  if (allFilters.publisher !== null && allFilters.publisher.length !== 0) {
    let filtered = [];
    if (result.length > 0) {
      allFilters.publisher.forEach((condition) => {
        filtered = filtered.concat(
          result.filter((book) => book.publisher === condition)
        );
      });
      result = filtered;
    }
  }

  if (allFilters.cost !== null) {
    let filtered = [];
    if (result.length > 0) {
      result.forEach((book) => {
        if (
          book.price >= allFilters.cost.minPrice &&
          book.price <= allFilters.cost.maxPrice
        ) {
          filtered.push(book);
        }
      });
      result = filtered;
    }
  }

  if (allFilters.rate !== null) {
    let filtered = [];
    if (result.length > 0) {
      result.forEach((book) => {
        if (book.rate >= allFilters.rate) {
          filtered.push(book);
        }
      });
    }
    result = filtered;
  }

  return result;
};

export default filterBook;
