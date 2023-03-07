import ClusterPageCard from "@/components/ClusterPageCard"
import Greetings from "@/components/Greetings"
import NewHabit from "@/components/NewHabit"
import { getUserFromCookie } from "@/lib/auth"
import { db } from "@/lib/db"
import { cookies } from "next/headers"

const getCluster = async (id) => {
  const user = await getUserFromCookie(cookies())

  const cluster = await db.cluster.findFirst({
    where: {
      id: parseInt(id)
    },
   include: {
    habits: {
      include: {
        habitsInstance: true
      }
    }
   }
  })

  return cluster
}


const getName = async ()=> {
  const user = await getUserFromCookie(cookies())
  return user?.firstName;
}

export default async function ProjectPage({ params }) {
  const cluster = await getCluster(params.id)
  const first = await getName()

  return (
    <div className="h-full overflow-y-auto pr-6 w-full justify-center">
      <Greetings type='cluster-page' className="m-3" />
      <ClusterPageCard cluster={cluster} /> 
       <NewHabit id={params.id} />
    </div>
  )
}