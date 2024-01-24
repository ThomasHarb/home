/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Developer from '../../../../../svg/photo-developer.jpeg';
/*import FondEcran from '../../../../../svg/sci-fi-futuriste-retro-annees-80-paysage-jeu-video-retrowave-vj-neons-vaporwave-vintage-stylise_2509.jpeg';*/

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div>
      <Grid container spacing={4}>
        <Box
          position={'relative'}
          sx={{
            backgroundImage: `url(${Developer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:after': {
              position: 'absolute',
              content: '" "',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1,
              background: theme.palette.common.black,
              opacity: 0.2,
            },
          }}
        >

        </Box>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                variant="h2"
                color="textPrimary"
                sx={{
                  fontWeight: 700,
                }}
              >Thomas Harbonnier
                <br />
                {' '}
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                >
                  Data analyst
                </Typography>
                <br />
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                >
                  Python Developer.
                </Typography>
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="h6"
                component="p"
                color="textSecondary"
                sx={{ fontWeight: 400 }}
              >
                Freelance proficient in Python development and data anlysis, ready to empower
                your project with precision and expertise.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={
                  'https://thomasharb.github.io/contact/'
                }
                target={'_blank'}
              >
                Contact Me
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/page-customers'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  View Projects
                </Button>
              </Box>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                {/*<Button
                  component={'a'}
                  href={'/page-customers'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Let's be interactive
                </Button>*/}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
