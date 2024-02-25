import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button, useTheme } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';

export const ScrollToTopButton: React.FC = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollBottom = () => {
    if (window.scrollY >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollBottom);
    return () => window.removeEventListener('scroll', checkScrollBottom);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Fragment>
      <Button
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          minWidth: `${theme.spacing(52)} !important`,
          width: theme.spacing(52),
          height: theme.spacing(52),
          bottom: 20,
          right: 20,
          // marginLeft: theme.spacing(20),
          border: `${theme.spacing(1)} solid ${theme.palette.grey[400]}`,
          color: theme.palette.grey[400],
          background: theme.palette.common.white,
          borderRadius: '50%',
          padding: '10px 20px',
          zIndex: 1000,
          cursor: 'pointer',
          ':hover': {
            background: theme.palette.common.white,
          },
        }}>
        <ArrowUpwardIcon
          sx={{ width: theme.spacing(24), height: theme.spacing(24) }}
        />
      </Button>
    </Fragment>
  );
};
