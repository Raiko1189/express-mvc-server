// Home route
const home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server",
  });
};

// About route
const about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js MVC backend",
  });
};

// Contact route
const contact = (req, res) => {
  res.json({
    success: true,
    email: "contact@example.com",
  });
};

// Dynamic data route
const getTime = (req, res) => {
  res.json({
    success: true,
    time: new Date().toLocaleTimeString(),
  });
};

// POST request – echo JSON
const echoData = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No JSON data provided",
    });
  }

  res.json({
    success: true,
    receivedData: req.body,
  });
};

module.exports = {
  home,
  about,
  contact,
  getTime,
  echoData,
};
