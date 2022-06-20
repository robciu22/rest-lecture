const Bar = require('../models/Bar.model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const bars = await Bar.find().populate('beers')
  res.json(bars)
})

router.get('/:barId', async (req, res, next) => {
  const { barId } = req.params

  const bar = await Bar.findById(barId).populate('beers')
  res.json(bar)
})

router.post('/', async (req, res, next) => {
  const { name, beers } = req.body
  try {
    const bar = await Bar.create({
      name: name.trim(),
      beers,
    })

    res.status(201).json({ message: 'New bar created', id: bar.id })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/:barId', async (req, res, next) => {
  const { barId } = req.params
  const { name, beers } = req.body

  const newData = { beers }

  if (name !== '') {
    newData.name = name.trim()
  }

  try {
    const bar = await Bar.findByIdAndUpdate(barId, newData)
    res.status(200).json({ message: 'Bar updated', id: bar.id })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:barId', async (req, res, next) => {
  const { barId } = req.params

  await Bar.findByIdAndDelete(barId)
  res.status(200).json({ message: 'Bar deleted' })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
