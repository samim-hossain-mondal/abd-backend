const AWS = require('aws-sdk');
const fs = require('fs');

const keys = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
};

if (process.env.AWS_REGION === undefined) {
  throw new Error('AWS_REGION environment variable not set');
}

if (process.env.AWS_S3_BUCKET_NAME_UPLOAD_IMAGE === undefined) {
  throw new Error('AWS_S3_BUCKET_NAME_UPLOAD_IMAGE environment variable not set');
}

if (process.env.AWS_ACCESS_KEY_ID === undefined) {
  throw new Error('AWS_ACCESS_KEY_ID environment variable not set');
}

if (process.env.AWS_SECRET_ACCESS_KEY === undefined) {
  throw new Error('AWS_SECRET_ACCESS_KEY environment variable not set');
}

//setting the credentials
//The region should be the region of the bucket that you created
//Visit this if you have any confusion - https://docs.aws.amazon.com/general/latest/gr/rande.html

AWS.config.update({
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

//Creating a new instance of S3:
const s3 = new AWS.S3();


//The uploadFile function
function uploadFile(source, targetName, res) {
  fs.readFile(source, function (err, filedata) {
    if (!err) {
      const putParams = {
        Bucket: process.env.AWS_S3_BUCKET_NAME_UPLOAD_IMAGE,
        Key: targetName,
        Body: filedata
      };
      // eslint-disable-next-line no-unused-vars
      s3.putObject(putParams, function (err, data) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Internal Server Error - Something Went Wrong'
          });
        }
        else {
          fs.unlink(source, console.error);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
          // need to send the url along with success
          return res.status(201).json({
            success: true,
            url: `http://${process.env.AWS_S3_BUCKET_NAME_UPLOAD_IMAGE}.s3.${process.env.AWS_REGION}.amazonaws.com/${targetName}`
          });
        }
      });
    }
    else {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error - Something Went Wrong'
      });
    }
  });
}

const upload = async (req, res, next) => {
  try {
    uploadFile(req.file.path, req.file.filename, res);
  }
  catch (err) {
    next(err);
  }
};

module.exports = {
  upload
};