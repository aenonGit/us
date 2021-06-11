import React from 'react';

import { Promise } from 'components/promise/promise';
import { Us } from 'components/us/us';
import { Wedding } from 'components/wedding/wedding';
import { WeddingList } from 'components/weddinglist/weddinglist';


function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Us />
      <Promise />
      <Wedding />
      <WeddingList />
    </React.Fragment>
  );
}


export default Home;
