const express = require('express');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports = () => {
  const router = express.Router();

  router.get('/:key', async (req, res) => {
    console.log('bird photo route called')
    const { key } = req.params;
   
    try {
      console.log('Fetching object:', key);
      const params = {
        Bucket: 'bird-photos-collection', 
        Key: key                          
      };

      const data = await s3.getObject(params).promise();
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(data.Body);
    } catch (err) {
      console.error('Error fetching object:', err);
      res.status(500).json({ 
        error: 'Error fetching the image',
        message: err.message 
      });
    }
  });

  return router;
};