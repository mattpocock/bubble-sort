/**
*
* Asynchronously loads the component for BubbleItem
*
*/

import loadable from 'utils/loadable';
import { BubbleItemProps } from './index';

export default loadable<BubbleItemProps>(() => import('./index'));