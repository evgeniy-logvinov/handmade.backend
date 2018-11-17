const express = require('express')
const { productsService } = requireRoot('./lib/services')

const router = express.Router()

router.get('/', async (req, res) => {
  res.json({
    content: await productsService.loadProductsList()
  })
})

module.exports = router