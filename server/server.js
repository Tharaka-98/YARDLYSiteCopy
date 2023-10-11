const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {EmployeeModel, UserModel} = require('./models/Employee');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Secret key for JWT
const secretKey = 'your-secret-key';

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email: email });

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // Create a JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });

        res.json({ message: "Success", token });
      } else {
        res.status(401).json("The passwords do not match");
        
      }
    } else {
      res.status(401).json("No record exists for this email");
    }
  } catch (err) {
    res.status(500).json({ error: 'Error during login', details: err.message });
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newUser = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    const user = await UserModel.create(newUser);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({error: 'Error creating user message', details:err.message})
  }
})

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt factor of 10
    const newUser = {
      name: name,
      email: email,
      password: hashedPassword, // Store the hashed password in the database
    };
    const employee = await EmployeeModel.create(newUser);
    console.log("User data saved successfully");
    res.status(201).json(employee); // 201 indicates resource creation
  } catch (err) {
    console.error("An error occurred while saving the data:", err);
    res.status(500).json({ error: 'Error creating employee', details: err.message });
  }
});

// Protected route example
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard' });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json("Authentication failed");
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json("Invalid token");
    }
    req.user = user;
    next();
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
