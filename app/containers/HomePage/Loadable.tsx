/**
*
* Asynchronously loads the component for HomePage
*
*/

import loadable from 'utils/loadable';
import { HomePageProps } from './index';

export default loadable<HomePageProps>(() => import('./index'));