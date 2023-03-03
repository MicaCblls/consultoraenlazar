import React from 'react';
import TeamCards from '../card/TeamCards';
import Values from '../values/values';
import BePartOf from '../workWithUs/BePartOf';
import WorkWithUs from '../workWithUs/WorkWithUs';

export const WeAre = ({team}) => {
  return (
    <div className="flex flex-col content-center">
        <section>
          <TeamCards team={team}/>
        </section>
        <section>
          <Values/>
        </section>
        <section >
          <WorkWithUs/>
        </section>
        <section>
          <BePartOf/>
        </section>
      </div>
  );
};

export default WeAre
