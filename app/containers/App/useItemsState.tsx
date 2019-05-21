import useReduxState from 'utils/hooks/useReduxState';
import { Item } from 'components/BubbleItem/types/Item';

const useItemsState = () =>
  useReduxState<State, Actions>({
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
