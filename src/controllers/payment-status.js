const {paymentstatus} = require('../../models');


exports.createStatus = async(req,res) => {
  try {
     await paymentstatus.create({
      name: req.body.name
    })
    if(!req.body.name) {
      res.status(400).send({
        status: 'request error',
        message: 'please input name'
      })
    }
    res.send({
      status: 'success',
      message: 'created new status payment',
    })

  } catch (error) {
      res.status(500).send({
        status: 'error'
      })
  }
}

exports.getPaymentStatus = async(req,res) => {
  try {
    const data = await paymentstatus.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    })
    res.send({
      status: 'success',
      message: 'list payment',
      data
    })

  } catch (error) {
    res.status(500).send({
      status: 'error'
    })

  }
}

