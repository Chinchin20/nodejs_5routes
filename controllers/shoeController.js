let shoes = [];

exports.getAllShoes = (req, res) => {
  res.render('index', { shoes });
};

exports.getAddShoe = (req, res) => {
  res.render('add');
};

exports.postAddShoe = (req, res) => {
  const { name, size, price } = req.body;
  shoes.push({ id: Date.now(), name, size, price });
  res.redirect('/shoes');
};

exports.getEditShoe = (req, res) => {
  const shoe = shoes.find((shoe) => shoe.id === parseInt(req.params.id));
  res.render('edit', { shoe });
};

exports.postEditShoe = (req, res) => {
  const { id } = req.params;
  const { name, size, price } = req.body;
  const shoeIndex = shoes.findIndex((shoe) => shoe.id === parseInt(id));
  shoes[shoeIndex] = { id: parseInt(id), name, size, price };
  res.redirect('/shoes');
};

exports.deleteShoe = (req, res) => {
  shoes = shoes.filter((shoe) => shoe.id !== parseInt(req.params.id));
  res.redirect('/shoes');
};
