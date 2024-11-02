// functions/routes.js
import express from 'express';
const router = express.Router();

router.post('/contactus', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact request received from ${name} - ${email}: ${message}`);
  res.json({
    status: 'success',
    message: 'Thank you for reaching out! We have received your message and will get back to you soon.',
    data: { name, email, message },
  });
});

// Fallback route for undefined routes
router.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'The requested resource was not found on this server. Please check the URL and try again.',
  });
});

export default router;
