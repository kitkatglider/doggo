import { Hono } from 'hono'
import data from './data'

const app = new Hono()

app.get('/', (c) => {
  console.log(c)
  return c.text('Hello Hono!')
})

app.get('/description', (c) =>{
  return c.json(data)
})

app.get("/description/:descriptionId", (c) => {
  const id = c.req.param("descriptionId")
  let dogdata = null
  for (let index = 0; index < data.length; index++) {
    const element = data[index]
    if (element.id.toString() == id) {
      dogdata = element
    }
  }
  if (dogdata == null) return c.json({found: false})
    return c.json({found: true, response: dogdata})
})

export default app
