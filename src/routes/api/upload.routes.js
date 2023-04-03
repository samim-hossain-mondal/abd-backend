const express = require('express');
const multer = require('multer');
const uploadController = require('../../controllers/upload.controller');

const router = express.Router();

// configuring the DiskStorage engine.
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

//POST method route for uploading file
router.post('/', upload.single('upload'), uploadController.upload);

module.exports = router;