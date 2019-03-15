const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const queryFilter = products.filter(
      item => item.price >= req.query.price * 1
    );
    return res.status(200).send(queryFilter);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
