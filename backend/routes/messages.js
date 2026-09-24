const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const requireAdmin = require("../middleware/auth");

// PUBLIC — visitors can send messages
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email and message are required",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

// ADMIN — get messages
router.get("/", requireAdmin, async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// ADMIN — mark read/unread
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: req.body.read },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        error: "Message not found",
      });
    }

    res.json(message);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

// ADMIN — delete message
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;

