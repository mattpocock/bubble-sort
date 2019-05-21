import React from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDrop from '../index';

storiesOf('DragAndDrop', module).add('Normal', () => (
  <DragAndDrop
    data={[
      {
        id: '1',
        label: 'Hello',
      },
      {
        id: '2',
        label: 'Hey',
      },
    ]}
    renderItem={item => <div key={item.id}>{item.label}</div>}
    reorderId="Hey"
    onChange={newList => console.log(newList)}
  />
));
