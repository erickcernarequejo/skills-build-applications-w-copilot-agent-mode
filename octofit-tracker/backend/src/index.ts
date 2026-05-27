import app, { connectDatabase } from './app.js'

const port = Number(process.env.PORT ?? 8000)

async function start() {
  await connectDatabase()

  app.listen(port, () => {
    console.log(`OctoFit Tracker backend running on port ${port}`)
  })
}

void start().catch((error) => {
  console.error('Failed to start OctoFit Tracker backend:', error)
  process.exit(1)
})