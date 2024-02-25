import Logo from '@/assets/images/logo.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '../mui-components';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../mui-components';

const NavButton = styled(Button)(() => ({
  width: 'fit-content',
  height: 'fit-content',
  color: 'white',
  borderRadius: '16px',
  backgroundColor: '#1A4161',
  marginLeft: '1rem',
  textTransform: 'none',
}));

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'white', boxShadow: '0' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image alt="image" layout="fit" src={Logo} />
            <Link href="/">
              <NavButton>Home</NavButton>
            </Link>
            <NavButton>Subjects</NavButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
