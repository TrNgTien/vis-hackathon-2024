import { RestPaths } from '@/common';
import { Button, Grid, Header } from '@/components';
import { H3, P } from '@/components/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 40rem;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
`;
const imageStyle = {
  borderRadius: '16px',
};

const DetailCard = () => {
  const [post, setPost] = useState({
    description: '',
    hastag: '',
    category: '',
    rating: '',
    asset_link: '',
    author_id: 0,
  });
  const router = useRouter();
  const { id } = router.query;

  const NavButton = styled(Button)(() => ({
    width: 'fit-content',
    height: 'fit-content',
    color: 'white',
    borderRadius: '16px',
    backgroundColor: '#1A4161',
    textTransform: 'none',
    marginRight: '1rem',
  }));
  const getPostData = useCallback(async () => {
    if (!id) {
      return;
    }

    const rs = await fetch(`${RestPaths.BASE_URL}/posts/${id}`);
    const posts = await rs.json();
    setPost(posts);
  }, []);

  useEffect(() => {
    getPostData();
  }, []);

  const { description, hastag, category, rating, asset_link, author_id } = post;

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} mt={8} sx={{ padding: 2 }}>
        <Grid container item xs={8} sx={{ padding: 2 }}>
          <Grid item xs={12}>
            <ImageWrapper>
              <Image
                alt="image"
                objectFit="cover"
                layout="fill"
                src={asset_link ?? ''}
                style={imageStyle}
              />
            </ImageWrapper>
          </Grid>
          <Grid
            container
            item
            xs={12}
            mt={1}
            alignItems="center"
            justifyContent="center"
            spacing={2}>
            <Grid item xs={2}>
              <NavButton>Back</NavButton>
            </Grid>
            <Grid item xs={2}>
              <NavButton>Download</NavButton>
            </Grid>
            <Grid item xs={2}>
              <NavButton>Save</NavButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4} sx={{ border: 1 }}>
          <Grid
            item
            xs={8}
            mt={2}
            sx={{
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <H3>Description: </H3>
            <P>{description} </P>
            <hr />
            <P>{hastag} </P>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailCard;
