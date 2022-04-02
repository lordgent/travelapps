const {categories} = require('../../models');

exports.CreateCategory = async(req,res) => {
  try {
    const data = await categories.create({
      name: req.body.name
    });
    res.send({
      status: 'succes',
      message: 'create caetegory success',
      name: data.name,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}

exports.getCategories = async(req,res) => {
  try {
    const data = await categories.findAll({
      attributes: {
        exclude: ["createdAt"]
      }
    });

    res.send({
      status: 'success',
      data
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}