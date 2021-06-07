import React from 'react';

import { Promise } from 'components/promise/promise';
import { Us } from 'components/us/us';


function Home(_props: Props): JSX.Element {
  return (
    <React.Fragment>
      <Us />
      <Promise />
    </React.Fragment>
  );
}


type Props = unknown;


export default Home;
