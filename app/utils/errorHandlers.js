const handleDefault = (error, response) => {
  console.log(error.message);

  if (res) {
    response.status(400).send();
  }

  return;
};

module.exports = {
  handleDefault,
};
