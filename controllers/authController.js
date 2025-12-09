import User from "../models/User.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "6d",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    expire: new Date(
      Date.now() + 6 * 24 * 60 * 60 * 1000 //Tambah 6 Hari
    ),
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
    httpOnly: true,
    security: false,
  };

  res.cookie("jwt", token, cookieOption);
  user.password = undefined;
  res.status(statusCode).json({
    data: user,
  });
};

export const RegisterUser = asyncHandler(async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  const role = isFirstAccount ? "superadmin" : "admin";

  const createUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role,
  });
  createSendToken(createUser, 201, res);
});

export const LoginUser = asyncHandler(async (req, res) => {
  // validasi jika email dan password tidak diisi
  if (!req.body.email && !req.body.password) {
    res.status(400);
    throw new Error("Inputan email dan password tidak boleh kosong");
  }

  // Check jika email yang diinput sudah terdaftar di database
  const userData = await User.findOne({
    email: req.body.email,
  });
  if (userData && (await userData.comparePassword(req.body.password))) {
    createSendToken(userData, 200, res);
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

export const LogoutUser = (req, res) => {
  res.cookie("jwt", "", {
    expire: new Date(0),
    httpOnly: true,
    security: false,
  });

  res.status(200).json({
    message: "Logout Berhasil",
  });
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.user.id).select({ password: 0 }); // select kecuali password

  if (user) {
    return res.status(200).json({
      user,
    });
  }
  return res.status(401).json({
    message: "User tidak ditemukan",
  });
};
