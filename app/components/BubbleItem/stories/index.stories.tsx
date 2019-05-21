import React from 'react';
import { storiesOf } from '@storybook/react';
import BubbleItem from '../index';

storiesOf('BubbleItem', module).add('Normal', () => (
  <BubbleItem
    id="14"
    chips={[
      {
        id: '1',
        isPro: true,
        label: 'Hello',
      },
    ]}
    description="Description"
    title="Title"
    handleClickEdit={() => console.log('Edit')}
    handleClickDelete={() => console.log('Delete')}
  />
));
