import useReduxState from 'utils/hooks/useReduxState';
import { Item } from 'components/BubbleItem/types/Item';
import { useEffect, useState } from 'react';

const useItemsState = () => {
  const itemsState = useReduxState<State, Actions>({
    key: 'items',
    initialState: {
      items: [],
      itemIdEditing: null,
      isFormOpen: false,
    },
    actions: {
      addItem: (state, item) => ({ ...state, items: [...state.items, item] }),
      removeItemById: (state, itemId) => ({
        ...state,
        items: state.items.filter(({ id }) => id !== itemId),
      }),
      openEditForm: (state, itemId) => ({
        ...state,
        isFormOpen: true,
        itemIdEditing: itemId,
      }),
      closeForm: state => ({
        ...state,
        isFormOpen: false,
        itemIdEditing: null,
      }),
      openAddForm: state => ({
        ...state,
        isFormOpen: true,
        itemIdEditing: null,
      }),
      updateItem: (state, itemToUpdate) => ({
        ...state,
        items: state.items.map(item => {
          if (itemToUpdate.id === item.id) {
            return itemToUpdate;
          }
          return item;
        }),
      }),
      updateAllItems: (state, items) => ({
        ...state,
        items,
      }),
    },
  });

  const [initialCheckComplete, setInitialCheckComplete] = useState(false);

  const itemsStateAsString = itemsState.state.items
    .map(({ id, chips }) => `${id}${chips.map(chip => chip.id)}`)
    .join('');

  useEffect(() => {
    if (!initialCheckComplete) {
      const storedItems = localStorage.getItem(STORAGE_KEY);

      if (storedItems) {
        const parsedItems: Item[] = JSON.parse(storedItems);
        itemsState.updateAllItems(parsedItems);
      }
      setInitialCheckComplete(true);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsState.state.items));
    }
  }, [itemsStateAsString]);

  return itemsState;
};

interface State {
  items: Item[];
  itemIdEditing: string | null;
  isFormOpen: boolean;
}

interface Actions {
  addItem: (item: Item) => void;
  removeItemById: (id: string) => void;
  openEditForm: (id: string) => void;
  closeForm: () => void;
  openAddForm: () => void;
  updateItem: (item: Item) => void;
  updateAllItems: (items: Item[]) => void;
}

export default useItemsState;

const STORAGE_KEY = 'ITEMS_STATE';
