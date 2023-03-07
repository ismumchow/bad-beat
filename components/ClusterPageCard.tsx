import Card from "./Card";

const ClusterPageCard = async ({ cluster }, className) => {
  
  const habits = cluster.habits;
  console.log(habits)
  return (
  <div>
  <Card className ="mt-3 h-2/3 ">
      <div className="flex justify-between items-center w-full">
        <div className="pt-7">
          <span className=" border-2 rounded-2xl  border-gray-400 text-5xl text-gray-700 p-4">{
          cluster.name}
          </span>
        </div>
      </div>
      <div className="container pt-4">
        {habits && habits.length ? (
          <div className="grid text-center pl-2 content-center border-2 rounded-2xl mt-5">
            {habits.map((habit) => (
              // eslint-disable-next-line react/jsx-key
                <div className="text-center pt-3 pl-2 flex"> 
                  <div className="h-16 w-1/5 border-2 rounded-2xl text-center pt-3 mb-3">
                      <span className="text-gray-700 text-2xl">    
                          {habit.name}
                      </span> 
                  </div>
                  <div className="grid w-full col-span-1 content-center overflow-y-auto"> 
                    <div className="flex ml-4">
                        <span> {habit.habitsInstance.map(instance => <span className="w-4 p-3 m-3 h-2 text-center content-center justify-start" key={instance.id}> <input type="checkbox" className="adefault:ring-2 w-12 h-12 rounded-2xl" /> </span> )} </span>
                    </div>
                  </div>
              </div>
            ))
            }
          </div>
        ) : (
          <div> No Habits in this Cluster </div>
        )}
      </div>
    </Card>
  </div>
  );
}

export default ClusterPageCard