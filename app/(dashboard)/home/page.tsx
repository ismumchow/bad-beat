import Button from "@/components/Buttons";
import Card from "@/components/Card";
import ClusterCard from "@/components/ClusterCard";
import Greetings from "@/components/Greetings";
import GreetingSkeleton from "@/components/GreetingSkeleton";
import NewCluster from "@/components/NewCluster";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const getData = async () => {
  await delay(1000);
  const user = await getUserFromCookie(cookies());
  const clusters = await db.cluster.findMany({
    where: {
        userId: user?.id
    },
    include: {
        habits: true

    }
  })
  return {clusters};
};

export default async function Page() {
    const {clusters} = await getData()
  return (
    <div className="h-full overflow-y-auto pr-6 w-full pt-1 pl-6">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
            <Suspense fallback = {<GreetingSkeleton/>}>
                <Greetings />
            </Suspense>
        </div>
        <div className="flex grow items-center flex-wrap mt-3 -m-3 ">
          {clusters.map(cluster => ( 
            <div className = 'w-1/3 p-3' key={cluster.id}> 
              <Link href={`/cluster/${cluster.id}`}>
                  <ClusterCard cluster={cluster}/>
              </Link>
            </div>
          ))}
          <div className="w-1/3 flex justify-center text-center"> 
            <NewCluster />
           </div>
        </div>
      </div>
    </div>
  );
}
