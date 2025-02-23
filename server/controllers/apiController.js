import Contact from '../models/Contact.js';
import { sendConfirmationEmail } from '../utils/emailService.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();

    // Send confirmation email
    await sendConfirmationEmail(email);

    res.status(201).json({
      success: true,
      message: 'Message received successfully'
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};