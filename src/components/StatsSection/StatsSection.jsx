import React, { use } from 'react';
import Stat from './Stat';

const StatsSection = ({ promiseStats }) => {
    const statsDataRes = use(promiseStats)
    const stateData = statsDataRes.data;
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="container mx-auto py-14">
        <div className="flex flex-col md:flex-row gap-2 text-center">
          {stateData.map((stat) => (
            <Stat key={stat.id} stat={stat}></Stat>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;