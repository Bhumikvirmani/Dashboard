import React from 'react';

import { ChatHeader, stacked} from '../../Components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    < ChatHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <stacked/>
    </div>
  </div>
);

export default Stacked;