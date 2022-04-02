const {trip } = require('../../models');


exports.createTrip = async (req,res) => {
  try {
    const {title, country, price, duration, description,transpotation, accomodation ,date_trip, idcategory, quota } = req.body;
    let arr = [];
    for (let i = 0; i < req.files.imgTrip.length; i++) {
      let datas = req.files.imgTrip[i].filename;
      arr.push(datas);
    }
    const data = await trip.create({
      title: title,
      accomodation: accomodation,
      country: country,
      price: price,
      date_trip: date_trip,
      idcategory: idcategory,
      quota: quota,
      avilable: quota,
      transpotation: transpotation,
      duration: duration,
      sold: 0,
      description: description,
      photo: JSON.stringify(arr),
    })
    res.send({
      status: 'success',
      data
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}

exports.getTrip = async(req,res) => {
  try {
    const data = await trip.findAll({
      attributes: {
        exclude: ["createdAt"]
      }
    })
    res.send({
      status: 'success',
      data
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: 'internal server error'
    })
  }
}