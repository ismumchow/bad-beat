import ClusterPageCard from "@/components/ClusterPageCard"
import Greetings from "@/components/Greetings"
import { getUserFromCookie } from "@/lib/auth"
import { db } from "@/lib/db"
import { cookies } from "next/headers"

const getData = async (id) => {
  const user = await getUserFromCookie(cookies())

  const clusters = await db.cluster.findMany({
    where: {
        userId: user?.id
    },
    include: {
        habits: true
    }
  });
  const cluster = clusters.filter((cluster) => cluster.id == id)
  return cluster
}

const getName = async ()=> {
  const user = await getUserFromCookie(cookies())
  return user?.firstName;
}

export default async function ProjectPage({ params }) {
  const cluster = await getData(params.id)
  const first = await getName()

  return (
    <div className="h-full overflow-y-auto pr-6 w-full justify-center">
      <Greetings className="m-3" />
      <ClusterPageCard name={first} cluster={cluster[0]} />
    </div>
  )
}