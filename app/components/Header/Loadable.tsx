/**
*
* Asynchronously loads the component for Header
*
*/

import loadable from 'utils/loadable';
import { HeaderProps } from './index';

export default loadable<HeaderProps>(() => import('./index'));