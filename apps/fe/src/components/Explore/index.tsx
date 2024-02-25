import { RestPaths } from '@/common';
import { Header } from '@/components';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Card from '../Card';
import { H2 } from '../Typography';
import { Button, Grid, TextField, styled } from '../mui-components';

export const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [hashTagSelected, setHashTagSelected] = useState<number>(0);

  const getPostData = useCallback(async () => {
    const rs = await fetch(`${RestPaths.BASE_URL}/posts`);
    const posts = await rs.json();
    setPosts(posts);
  }, []);

  const NavButton = styled(Button)(() => ({
    width: 'fit-content',
    height: 'fit-content',
    color: 'white',
    borderRadius: '16px',
    backgroundColor: '#1A4161',
    textTransform: 'none',
    marginRight: '1rem',
  }));

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} mt={8}>
        <Grid
          item
          sx={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              '.MuiInputBase-root': {
                borderRadius: 16,
              },
            }}
          />
        </Grid>

        <Grid container item xs={12} mt={2} ml={25}>
          <NavButton
            sx={{
              backgroundColor: hashTagSelected === 1 ? 'gray' : '#1A4161',
            }}
            onClick={() => {
              setHashTagSelected(1);
            }}>
            #Vietnam
          </NavButton>
          <NavButton
            sx={{
              backgroundColor: hashTagSelected === 2 ? 'gray' : '#1A4161',
            }}
            onClick={() => {
              setHashTagSelected(2);
            }}>
            #history
          </NavButton>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        {hashTagSelected === 2 ? (
          <Fragment>
            <Grid container item xs={12} sx={{ padding: 2 }}>
              <H2>Newest</H2>
            </Grid>
            <Grid container item xs={12} spacing={2} sx={{ padding: 2 }}>
              {posts.map((post: any) => {
                const { id } = post;
                return (
                  <Grid key={`${id}`} item xs={3}>
                    <Card {...post} />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container item xs={12} sx={{ padding: 2 }}>
              <H2>Education</H2>
            </Grid>
            <Grid container item xs={12} spacing={2} sx={{ padding: 2 }}>
              {posts.map((post: any) => {
                const { id } = post;
                return (
                  <Grid key={`${id}`} item xs={3}>
                    <Card {...post} />
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        ) : (
          <Fragment>
            <Grid container item xs={12} sx={{ padding: 2 }}>
              <H2>Hottest</H2>
            </Grid>
            <Grid container item xs={12} spacing={2} sx={{ padding: 2 }}>
              {posts.map((post: any) => {
                const { id } = post;
                return (
                  <Grid key={`${id}`} item xs={3}>
                    <Card {...post} />
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        )}
      </Grid>
    </Grid>
  );
};
