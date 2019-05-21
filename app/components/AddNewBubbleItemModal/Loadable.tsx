/**
*
* Asynchronously loads the component for AddNewBubbleItemModal
*
*/

import loadable from 'utils/loadable';
import { AddNewBubbleItemModalProps } from './index';

export default loadable<AddNewBubbleItemModalProps>(() => import('./index'));