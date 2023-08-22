const express = require('express')
const app = express()
const port = 3002

const teams = [
  {
    name: 'Touchtribe',
    score: 42,
    id: 1,
  },
  {
    name: 'Webflight',
    score: 24,
    id: 2,
  },
]

const getMatchData = () => [
  {
    id: 3,
    date: new Date(),
    teams: [
      {
        name: 'TouchTribe',
        id: 1,
        score: 42,
      },
      {
        name: 'Webflight',
        score: 24,
        id: 2,
      },
    ],
  },
]

const sleep = async (delay) => new Promise((resolve) => setTimeout(resolve, delay))

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Received a GET request at ${req.url}`)
  next()
})

app.get('/teams', async (req, res) => {
  await sleep(1500)
  res.json(teams)
})

app.get('/teams/:id', async (req, res) => {
  const id = req.params.id
  const team = teams.find((team) => String(team.id) === id)
  const matchData = getMatchData()

  if (!team) {
    return res.sendStatus(404)
  }
  await sleep(3000)
  res.json({ ...team, matchData })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
