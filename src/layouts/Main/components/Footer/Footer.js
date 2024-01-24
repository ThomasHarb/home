import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Photo from '../../../../svg/photoThomas.jpeg';
import Avatar from '@mui/material/Avatar';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href={ process.env.PUBLIC_URL + "/" }
          title="home"
          height={24}
          width={35}
        >
          <Avatar alt="Thomas Harbonnier" src={Photo} />
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href={ process.env.PUBLIC_URL + "/" }
              color="textPrimary"
              variant={'subtitle2'}
            >
              Home
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="https://thomasharb.github.io/projects/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              See projects
            </Link>
          </Box>
          <Box marginTop={1}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href="https://thomasharb.github.io/contact/"
              size="small"
            >
              Contact me
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Harbonnier. 2023. All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        When you visit or interact with this site, services or tools,
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
