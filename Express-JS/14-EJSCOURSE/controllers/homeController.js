const homeController = (req, res) => {
  const data = {
    name: "Ash",
    userId: 21,
  };

  res.render("Index", data);
};

export { homeController };
