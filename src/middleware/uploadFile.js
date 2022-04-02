const multer = require('multer');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


exports.uploadFile = (imgTrip, imgPhoto) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.fieldname === imgTrip &&
      file.fieldname === imgPhoto
    ) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
        req.fileValidationError = "only file images..";
        return cb(new Error("Only image files are allowed!"), false);
      }
    }
    cb(null, true);
  };
  const sizeInMB = 50;
  const maxSize = sizeInMB * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize,
    },
  }).fields([
    {
      name: imgTrip,
      maxCount: 5,
    },
    {
      name: imgPhoto,
      maxCount: 1,
    }
  ]);

  return (req, res, next) => {
    upload(req, res, (err) => {
      if (req.fileValidationError) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: req.fileValidationError,
        });
      }

      if (!req.files && !err) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: "Please upload file!",
        });
      }

      if (err) {
        console.log(err);
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            status: "Upload Failed!",
            message: "Max file sized 10mb",
          });
        }
        return res.status(400).send(err);
      }

      return next();
    });
  };
}