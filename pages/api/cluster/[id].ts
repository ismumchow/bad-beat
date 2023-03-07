import { validateJWT } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])
   await db.habit.create({
    data: {
      name: req.body.name,
      clusterId: parseInt(req.query.id),
      habitsInstance: {
        create: new Array(10).fill({status: false})
      }
    },
  })

  res.json({ data: { message: 'habit created' } })
}