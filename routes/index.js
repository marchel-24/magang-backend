var express = require('express');
var geoDB = require ('../sevices/nonPersistentStorage');
var router = express.Router();

// hati hati typo
/* GET home page. */
// router.get('/listGeoJSON', function(req, res, next) {
//   res.status(200).json({test : 123})
// });

// router.get('/submitGeoJSON', function(req, res, next) {
//   res.status(200).json({test : 123})
// });

// router.get('/deleteGeoJSON', function(req, res, next) {
//   res.status(200).json({test : 123})
// });

router.get('/geojson', function(req, res, next) {
  // Buat list yang disimpan

  res.status(200).json(geoDB.getGeoJSONs())
});

router.post('/geojson', function(req, res, next) {
  //Perlu cek ada req.body.geoJSON, 
  console.log(req.body)
  geoDB.addGeoJSON(req.body.geoJSON)
  res.status(200).json({message :"Aman"})
});

//harusnya delete, gunakan ger biar gampang
router.get('/geojson/delete/:id', function(req, res, next) {
  // tidak ada id, object,dengan index id
  geoDB.deleteGeoJSONs(req.params.id)
  res.status(200).json({message : "Hilang"})
});


module.exports = router;
