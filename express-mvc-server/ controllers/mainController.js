
exports.home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server",
  });
};


exports.about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js backend using MVC pattern",
  });
};


exports.contact = (req, res) => {
  res.json({
    success: true,
    email: "contact@example.com",
    phone: "+1234567890",
  });
};


exports.getTime = (req, res) => {
  res.json({
    success: true,
    currentTime: new Date().toLocaleTimeString(),
  });
};


exports.echoData = (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "JSON body is required",
    });
  }

  res.json({
    success: true,
    receivedData: data,
  });
};
