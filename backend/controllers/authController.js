import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register new user
export const register = async (req, res) => {
  try {
    const { username, photo, email, password } = req.body
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ email, username, photo, password: hashedPassword });
    await user.save();

    // Create and sign JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Set cookie with JWT
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(201).json({ message: 'User registered successfully', user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create and sign JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);

    // Set cookie with JWT
    const cook = res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });
    res.json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Logout user
export const logout = async (req, res) => {
  try {
    // Clear cookie
    res.clearCookie('token');
    res.json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get logged in user
export const current = async (req, res) => {
  try {
    // Get user ID from JWT
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET );

    const userId = decoded.userId;
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message:  "User Active..."});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//  Get All User ...
export const allUser = async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status.json({user})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};