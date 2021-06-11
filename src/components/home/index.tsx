import React from 'react';

import { Promise } from 'components/promise/promise';
import { Us } from 'components/us/us';
import { Wedding } from 'components/wedding/wedding';
import { WeddingList } from 'components/weddinglist/weddinglist';


function Home(): JSX.Element {
  return (
    <div style={{ overflowY: 'scroll' }}>
      <Us />
      <Promise />
      <Wedding />
      <WeddingList />
    </div>
  );
}


export default Home;
