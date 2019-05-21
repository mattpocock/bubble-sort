/**
*
* Asynchronously loads the component for DragAndDrop
*
*/

import loadable from 'utils/loadable';
import { DragAndDropProps } from './index';

export default loadable<DragAndDropProps>(() => import('./index'));