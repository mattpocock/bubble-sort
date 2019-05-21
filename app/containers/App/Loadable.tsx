/**
 *
 * Asynchronously loads the component for HomePage
 *
 */

import loadable from 'utils/loadable';
import CircularProgress from '@material-ui/core/CircularProgress';
import Zoom from '@material-ui/core/Zoom';
import React from 'react';

export default loadable(() => import('./index'), {
  fallback: (
    <Zoom in>
      <CircularProgress />
    </Zoom>
  ),
});
