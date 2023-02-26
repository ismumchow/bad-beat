import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Button from "./Buttons";
import Card from "./Card";



const ClusterPageCard = async ({ cluster }, className) => {
  const habits = cluster.habits;
  return (
  <Card className ="mt-3 h-2/3 ">
      <div className="flex justify-between items-center w-full">
        <div className="pt-7 pl-4">
          <span className=" border-b-2  border-gray-400 text-5xl text-gray-700 p-2">{
          cluster.name}
          </span>
        </div>
      </div>
      <div className="pt-5 container">
        {habits && habits.length ? (
          <div className="grid text-center pl-2 content-center">
            {habits.map((habit) => (
              // eslint-disable-next-line react/jsx-key
                <div className="text-center pt-3 pl-2 flex"> 
                <div className="h-16 w-1/5 border-2 border-gray-400 rounded-2xl text-center pt-3">
                    <span className="text-gray-700 text-2xl ">    
                        {habit.name}
                        </span> 
                </div>
                <div className="grid grid-cols-4 gap-4 w-full border-2 ml-2"> 
                
                </div>
              </div>
            ))

            }
          </div>
        ) : (
          <div> No Habits in this Cluster </div>
        )}
        <Button intent ='secondary' className="h-16 w-1/5 ml-4 mt-5"> Add Habit </Button>
      </div>
    </Card>
  );
}

export default ClusterPageCard