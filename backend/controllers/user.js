import { uuid } from "uuidv4";
import User from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import sendEmail from "../utils/sendEmail.js";

// @desc    Login user
export const login = async (req, res, next) => {
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
  const { username, email, number, address, password } = req.body.user;

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
      .json({ sucess: true, data: "User successfully Registered" });
  } catch (err) {
    next(err);
  }
};

// @desc    Forgot Password Initialization
export const forgotpassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Reset User Password
export const resetpassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

export const getUserbyId = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const users = await User.find({ userId });
    res.status(200).json({ success: true, data: users });
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
