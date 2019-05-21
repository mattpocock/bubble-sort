/**
 *
 * BubbleItem
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { Item } from './types/Item';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const BubbleItem = ({
  title,
  description,
  chips,
  handleClickEdit,
  handleClickDelete,
}: BubbleItemProps) => {
  return (
    <Card style={{ width: '100%' }}>
      <CardContent>
        <Typography variant="h5" paragraph>
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
        )}
        <Grid container spacing={8}>
          {chips.map(chip => (
            <Grid item key={chip.id}>
              <Chip
                label={chip.label}
                color={chip.isPro ? 'primary' : 'secondary'}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item style={{ marginRight: '8px' }}>
            <Button onClick={handleClickEdit} size="small" variant="outlined">
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClickDelete} size="small" variant="outlined">
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export interface BubbleItemProps extends Item {
  handleClickEdit: () => void;
  handleClickDelete: () => void;
}

export default BubbleItem;
