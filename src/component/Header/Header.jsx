import * as React from 'react';
import { AppBar, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Container = styled(AppBar)`
  background: black;
  height: 9vh;
`;

export default function ButtonAppBar() {
  return (
    <Container style={{position:"static"}}>
      <Toolbar
        sx={{
          minHeight: '100%',       // Ensures the toolbar height matches the container
          padding: 0,             // Removes default padding
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          alt="Logo"
          src="https://cdn.dribbble.com/users/299/screenshots/5648722/media/020215f51262d15b84a5d6ab03d8dfad.gif"
          sx={{
            height: '100%',        // Makes the image fit the height of the Toolbar
            width: 'auto',         // Maintains the aspect ratio
            maxHeight: '7vh',     // Prevents the image from stretching
            objectFit: 'contain',  // Ensures the image fits within its container
          }}
        />
      </Toolbar>
    </Container>
  );
}
