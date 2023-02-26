import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Button from "./Buttons";
import Card from "./Card";
import { delay } from "@/lib/async";

const getData = async () => {
  await delay(1000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async (type) => {
  const user = await getData();

  return (
    <Card className="w-full py-4 relative">
      { type ?
        <div>
        <div className="mb-4">
            <h1 className="text-3xl text-gray-700 font-bold mb-4">
              Hello, {user?.firstName}!
            </h1>
            <h4 className="text-xl text-gray-400">
              Check your daily habits!
            </h4>
          </div>
          <div>
              <Button size="large">Agenda Today</Button>
          </div>
        </div> 
        : 
        <div>
        <div className="mb-4">
            <h1 className="text-3xl text-gray-700 font-bold mb-4 pt-3">
              {user?.firstName && user?.firstName} Lets Get to Those Habits!
            </h1>
            <h4 className="text-xl text-gray-400">
              Checkout the habits you completed today!
            </h4>
          </div>
        </div> 
      }
      
    </Card>
  );
}


export default Greetings;