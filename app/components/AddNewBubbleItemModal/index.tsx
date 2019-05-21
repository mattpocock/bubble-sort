/**
 *
 * AddNewBubbleItemModal
 *
 */

import React, { useEffect } from 'react';
import uuid from 'uuid/v4';

import {
  Grid,
  Typography,
  TextField,
  Divider,
  Button,
  Chip,
  Modal,
  Card,
  CardContent,
  Zoom,
} from '@material-ui/core';
import { Formik } from 'formik';
import { Item, Chip as ChipType } from 'components/BubbleItem/types/Item';
import useLocalState from 'utils/hooks/useLocalState';

const defaultInitialValues = {
  title: '',
  description: '',
  chips: [],
  goodChipLabel: '',
  badChipLabel: '',
};

const AddNewBubbleItemModal = ({
  isOpen,
  closeForm,
  isInEditMode,
  initialValues,
  onSubmit,
}: AddNewBubbleItemModalProps) => {
  const chipsState = useChipsState();

  const goodChips = chipsState.state.chips.filter(chip => chip.isPro);
  const badChips = chipsState.state.chips.filter(chip => !chip.isPro);

  const closeFormAndReset = () => {
    closeForm();
    chipsState.resetChips();
  };

  useEffect(() => {
    if (
      initialValues &&
      initialValues.chips &&
      initialValues.chips.length > 0
    ) {
      chipsState.updateAllChips(initialValues.chips);
    }
  }, []);

  return (
    <>
      <Modal open={isOpen} onClose={closeFormAndReset}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Grid item xs={11} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Formik
                  initialValues={
                    isInEditMode ? initialValues : defaultInitialValues
                  }
                  onSubmit={values => {
                    if (!values) {
                      throw new Error('Values not coming through to onSubmit');
                    }
                    if (!isInEditMode) {
                      onSubmit({
                        ...defaultInitialValues,
                        ...values,
                        chips: chipsState.state.chips,
                        id: uuid(),
                      });
                    } else if (initialValues) {
                      onSubmit({
                        ...defaultInitialValues,
                        ...values,
                        chips: chipsState.state.chips,
                        id: initialValues.id,
                      });
                    }
                    closeFormAndReset();
                  }}
                >
                  {({
                    values = defaultInitialValues,
                    handleChange,
                    handleBlur,
                    setValues,
                    handleSubmit,
                  }) => {
                    return (
                      <Grid container spacing={16}>
                        <Grid item xs={12}>
                          <Typography variant="h5">
                            {isInEditMode ? 'Update' : 'Add New'}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Title"
                            variant="filled"
                            fullWidth
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Description"
                            variant="filled"
                            fullWidth
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            label="Pro"
                            variant="filled"
                            fullWidth
                            name="goodChipLabel"
                            value={values.goodChipLabel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Grid
                            container
                            alignItems="center"
                            justify="center"
                            style={{ height: '100%' }}
                          >
                            <Button
                              disabled={!values.goodChipLabel}
                              size="small"
                              variant="outlined"
                              onClick={() => {
                                chipsState.addChip({
                                  label: values.goodChipLabel || '',
                                  isPro: true,
                                });
                                setValues({ ...values, goodChipLabel: '' });
                              }}
                            >
                              Add
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={8}>
                            {goodChips.map(chip => (
                              <Zoom key={chip.id} in>
                                <Grid item>
                                  <Chip
                                    color="primary"
                                    label={chip.label}
                                    onDelete={() =>
                                      chipsState.removeChipById(chip.id)
                                    }
                                  />
                                </Grid>
                              </Zoom>
                            ))}
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            label="Con"
                            variant="filled"
                            fullWidth
                            name="badChipLabel"
                            value={values.badChipLabel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Grid
                            container
                            alignItems="center"
                            justify="center"
                            style={{ height: '100%' }}
                          >
                            <Button
                              disabled={!values.badChipLabel}
                              size="small"
                              variant="outlined"
                              onClick={() => {
                                chipsState.addChip({
                                  label: values.badChipLabel || '',
                                  isPro: false,
                                });
                                setValues({ ...values, badChipLabel: '' });
                              }}
                            >
                              Add
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={8}>
                            {badChips.map(chip => (
                              <Zoom key={chip.id} in>
                                <Grid item>
                                  <Chip
                                    color="secondary"
                                    label={chip.label}
                                    onDelete={() =>
                                      chipsState.removeChipById(chip.id)
                                    }
                                  />
                                </Grid>
                              </Zoom>
                            ))}
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container justify="flex-end">
                            <Button
                              onClick={closeFormAndReset}
                              style={{ marginRight: '8px' }}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => handleSubmit()}
                            >
                              Save
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  }}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export interface AddNewBubbleItemModalProps {
  isOpen: boolean;
  isInEditMode: boolean;
  closeForm: () => void;
  initialValues?: Item & { goodChipLabel?: string; badChipLabel?: string };
  onSubmit: (item: Item) => void;
}

export default AddNewBubbleItemModal;

const useChipsState = () =>
  useLocalState<State, Actions>({
    initialState: {
      chips: [],
    },
    actions: {
      addChip: (state, { label, isPro }) => ({
        ...state,
        chips: [...state.chips, { label, isPro, id: uuid() }],
      }),
      removeChipById: (state, idToRemove) => ({
        ...state,
        chips: state.chips.filter(chip => chip.id !== idToRemove),
      }),
      resetChips: () => ({ chips: [] }),
      updateAllChips: (state, chips) => ({ chips }),
    },
  });

interface State {
  chips: ChipType[];
}

interface Actions {
  addChip: (params: { label: string; isPro: boolean }) => void;
  removeChipById: (id: string) => void;
  resetChips: () => void;
  updateAllChips: (chips: ChipType[]) => void;
}
