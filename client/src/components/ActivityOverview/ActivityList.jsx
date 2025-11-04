import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityList = ({ activities }) => {
  return (
    <section className="space-y-6">
      {activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </section>
  );
};

export default ActivityList;


