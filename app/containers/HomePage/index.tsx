/**
 *
 * HomePage
 *
 */

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import Zoom from '@material-ui/core/Zoom';
import AddNewBubbleItemModal from 'components/AddNewBubbleItemModal';
import BubbleItem from 'components/BubbleItem';
import Header from 'components/Header';
import useItemsState from 'containers/App/useItemsState';
import React from 'react';
import { Item } from 'components/BubbleItem/types/Item';
import Add from '@material-ui/icons/Add';
import DragAndDrop from 'components/DragAndDrop';

export const HomePage = ({  }: HomePageProps) => {
  const itemsState = useItemsState();

  const handleSubmit = (item: Item) => {
    if (itemsState.state.itemIdEditing) {
      itemsState.updateItem(item);
    } else {
      itemsState.addItem(item);
    }
  };

  return (
    <>
      <Header />
      <Grid style={{ padding: '1rem' }}>
        <DragAndDrop
          data={itemsState.state.items}
          reorderId="bubbles"
          onChange={itemsState.updateAllItems}
          renderItem={(item, { ref, ...props }) => {
            return (
              <RootRef rootRef={ref}>
                <Grid {...props} xs={12}>
                  <BubbleItem
                    key={item.id}
                    id={item.id}
                    chips={item.chips}
                    title={item.title}
                    description={item.description}
                    handleClickDelete={() => itemsState.removeItemById(item.id)}
                    handleClickEdit={() => itemsState.openEditForm(item.id)}
                  />
                </Grid>
              </RootRef>
            );
          }}
        />
        <Zoom in>
          <Button
            variant="fab"
            color="secondary"
            onClick={itemsState.openAddForm}
            style={{ position: 'fixed', bottom: '32px', right: '32px' }}
          >
            <Add />
          </Button>
        </Zoom>

        {itemsState.state.isFormOpen && (
          <AddNewBubbleItemModal
            isInEditMode={Boolean(itemsState.state.itemIdEditing)}
            closeForm={itemsState.closeForm}
            isOpen={itemsState.state.isFormOpen}
            onSubmit={handleSubmit}
            initialValues={itemsState.state.items.find(
              item => item.id === itemsState.state.itemIdEditing,
            )}
          />
        )}
      </Grid>
    </>
  );
};

export interface HomePageProps {}

export default HomePage;
