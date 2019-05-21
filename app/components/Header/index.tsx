/**
 *
 * Header
 *
 */

import React from 'react';
// import styled from 'styled-components';

import List from '@material-ui/icons/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
