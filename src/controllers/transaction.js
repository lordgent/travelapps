const {transaction, trip, users} = require('../../models');

exports.createtTransaction = async(req,res) => {
  try {
    const { 
      idtrip,
      quota,
      ktp,
      payment, 
    } = req.body
    const code = Math.floor(100000000 + Math.random() * 100000000000);
    const dat = await trip.findOne({
      where: {
        id: idtrip
      }
    })
    const data = await transaction.create({
      idtrip: idtrip,
      fullname: req.userid.fullname,
      quota: quota,
      price: dat.price,
      subtotal: parseInt(dat.price) * quota,
      ktp: ktp,
      iduser: req.userid.id,
      payment: payment,
      kode: `TRVL${code}`,
      payment_statusid: 2,
    })
  
    await trip.update({
      sold: dat.sold + quota,
      avilable: dat.avilable - quota
    },
    {
      where: {
        id: idtrip,
      }
    }
    )
    res.send({
      status: 'sucess',
      message: 'created Transaction',
      data: data.kode,
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}


exports.getTransactionByIduser = async(req,res) => {
  try {
    const data = await transaction.findAll({
      include: [
        {
          model: users,
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "password",
              "id",
              "email",
            ],
          },
        },
        {
          model: trip,
          as: 'trips',
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "id",
              "description",
              "avilable",
              "quota",
              "sold",
              "photo",
              "long",
              "lat",
              "price"
            ],
          },
        },
      ],
      where: {
        iduser: req.userid.id
      },
    })
    res.send({
      status: 'sucess',
      message: 'created Transaction',
      data: data,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}