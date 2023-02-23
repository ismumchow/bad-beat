import { FC } from "react";
import { Prisma } from "@prisma/client";
import Card from "./Card";
import clsx from "clsx";

const clustersWithHabits = Prisma.validator<Prisma.ClusterArgs>()({
    include:{ habits: true}
})

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

type clustersWithHabits = Prisma.ClusterGetPayload <typeof clustersWithHabits>

const ClusterCard: FC<{cluster: clustersWithHabits}> = ({cluster}) => {
    return (
    <Card className="!px-6 !py-8 hover:scale-105 transition-all ease-in-out duration-200">
      <div>
        <span className="text-sm text-gray-300">
          {formatDate(cluster.createdAt)}
        </span>
      </div>
      <div className="mb-6">
        <span className="text-3xl text-gray-600">{cluster.name}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-400">
          {cluster.habits.length} Number of Habits
        </span>
      </div>
    </Card>
  );
}

export default ClusterCard;