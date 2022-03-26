const { users } = require('../../models');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');

exports.SignUp = async (req, res) => {
    const schema = Joi.object({
        fullname: Joi.string().min(4).required(),
        phone: Joi.string().min(4).required(),
        email: Joi.string().email().min(4).required(),
        password: Joi.string().min(6),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            error: {
                message: error.details[0].message,
            },
        });
    }
    try {
        const { fullname, email, phone, password } = req.body
        const cekMail = await users.findOne({
            where: {
                email: email
            }
        })
        if (cekMail) {
            return res.status(400).send({
                status: 'bad requests',
                message: 'Email is Already Exist!'
            });
        }
        const transporter = nodemailer.createTransport(smtp({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
          }
        }));
        const otp = Math.floor(1000 + Math.random() * 9000);

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);
        const data = await users.create({
            fullname: fullname,
            email: email,
            phone: phone,
            password: hashpass,
            role: 2,
            otp: otp,
            isactive: 0,
        })
        const token = jwt.sign(
            { id: data.id, role: data.role, email: data.email, isactive: data.isactive },
            process.env.SECRET
        );
        let messagemail = {
          from: process.env.EMAIL,
          to: email,
          subject: 'otp travel apps',
          text: `otp: ${otp}`,
        };
        await transporter.sendMail(messagemail)
        res.send({
            status: 'success',
            message: 'register is success!',
            data: {
                fullname: data.fullname,
                token: token,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'server error',
            message: 'ERROR'
        });
    }
}

exports.signIn = async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(4).required(),
        password: Joi.string().min(5).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            error: {
                message: error.details[0].message,
            },
        });
    }

    try {
        const { email, password } = req.body;
        const data = await users.findOne({
            where: {
                email: email,
            },
        });

        if (!data) {
            return res.status(400).send({
                status: "failed",
                message: "username/password incorrect",
            });
        }

        const validd = await bcrypt.compare(password, data.password);
        if (!validd) {
            return res.status(400).send({
                status: "failed",
                message: "username/password incorrect",
            });
        }

        const token = jwt.sign(
            { id: data.id, role: data.role, email: data.email, isactive: data.isactive },
            process.env.SECRET
        );
        res.send({
            status: "success",
            user: {
                email: data.email,
                token: token,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "SERVER ERROR",
            message: "ERROR",
        });
    }
};

exports.verifyAccount = async (req,res) => {
    try {
        const data = await users.findOne({
            where: {
                email: req.userid.email,
            }
        })
        if(req.body.otp !== data.otp) {
        return res.status(400).send({
                status: "failed",
                message: 'otp failed'
            });
        }
         await users.update({
            isactive: 1,
        },{
            where: { email: req.userid.email }
        }
        )
        res.send({
            status: "success",
            message: 'verify account success'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "SERVER ERROR",
            message: "ERROR",
        });
    }
}