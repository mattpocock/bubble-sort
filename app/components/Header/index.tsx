/**
 *
 * Header
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { AppBar, Toolbar, Typography, Icon } from '@material-ui/core';
import { List } from '@material-ui/icons';

const Header = ({  }: HeaderProps) => {
  return (
    <AppBar
      position="relative"
      color="primary"
      style={{ marginBottom: '16px' }}
    >
      <Toolbar>
        <Typography color="inherit">
          <List style={{ marginRight: '8px', fontSize: '32px' }} />
          <strong>Bubble Sort List</strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export interface HeaderProps {}

export default Header;
