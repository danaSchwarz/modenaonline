import * as React from 'react';
import { Divider, Drawer, List, ListItem, ListItemText, ListItemButton, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppContext } from '../AppContext';
import { useContext, useState } from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.light
  }
}));

export default function SideBar({ open, handleClose, width }) {
  const context = useContext(AppContext);

  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
          top: 'calc(48px - 0px)',
          bottom: "calc(0px - 0px)",
          height: "auto",
          borderColor: "primary.light",
          boxShadow: "3",
          zIndex: 1,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader sx={{ bgcolor: "primary.light" }}>
        <IconButton onClick={() => handleClose?.()}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ bgcolor: "primary.bg" }}>
        <ListItem key='All Products' disablePadding>
          <ListItemButton onClick={() => context.resetAllFilter()}>
            <ListItemText primary='All Products' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Shirts', 'Pants', 'Skirts', 'Dresses'].map((text) => (
          <ListItem key={text} disablePadding>
            <StyledListItemButton selected={text == context.filter}
              onClick={() => {
                if (text != context.filter) {
                  context.setFilter(text)
                } else {
                  context.setFilter("")
                }
              }
              }>
              <ListItemText primary={text} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Summer', 'Spring/Autumn', 'Winter'].map((text) => (
          <ListItem key={text} disablePadding>
            <StyledListItemButton selected={text == context.season}
              onClick={() => {
                if (text != context.season) {
                  context.setSeason(text)
                }
                else {
                  context.setSeason("");

                }
              }}
            >
              <ListItemText primary={text} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer >
  )
}