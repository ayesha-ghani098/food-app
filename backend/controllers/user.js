import { uuid } from "uuidv4";
import User from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import { validationResult } from "express-validator";

//controllers
export const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

   // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};





// @desc    Register user
export const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { username, email, number, address, password } = req.body;

  try {
    const user = await User.create({
      id: uuid(),
      username,
      email,
      number,
      address,
      password,
    });

    res
      .status(200)
      .json({ success: true, data: "User successfully Registered" });
  } catch (err) {
    next(err);
  }
};








export const authenticateToken = async (req, res) => {
  const user = req.user;

  if (Boolean(user)) {
    return res.status(200).json({ user });
  }

  return res.status(400).json({ Message: "Not Authorized" });
};



const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token, user });
};
