import { db } from "@/lib/db";
import cluster from "cluster";


const habits = ['Meditating', 'Studying', 'Praying', 'Exercising', 'Cleaning','Reading']


async function main() {
  const user = await db.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "user@email.com",
      firstName: "User",
      lastName: "Person",
      password: "password",
      clusters: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i}`,
          habits: {
            create:  new Array(Math.floor(Math.random() * habits.length)).fill(1).map((_, i) => ({
              name: habits[Math.floor(Math.random() * habits.length)],
            })),
          },
        })),
      }
      
    },
    include: {
      clusters: true,
    },
  });

  console.log(user)

}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
