import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const SidebarNav = ({ onClose }) => {

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
        marginBottom={1}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2} marginBottom={4}>
        <Typography 
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          RESUME
        </Typography>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          <Box marginBottom={16}>
            <Typography
              variant="caption"
              color={'primary'}
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block',
              }}
            >
              Skills
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Linux
                </Typography>
                <BorderLinearProgress variant="determinate" value={95} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Python
                </Typography>
                <BorderLinearProgress variant="determinate" value={95} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Bash
                </Typography>
                <BorderLinearProgress variant="determinate" value={75} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  C++
                </Typography>
                <BorderLinearProgress variant="determinate" value={75} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Git
                </Typography>
                <BorderLinearProgress variant="determinate" value={95} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Docker
                </Typography>
                <BorderLinearProgress variant="determinate" value={60} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  SQL
                </Typography>
                <BorderLinearProgress variant="determinate" value={70} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Web development
                </Typography>
                <BorderLinearProgress variant="determinate" value={80} />
              </Grid>
            </Grid>
          </Box>
          <Box marginBottom={16} >
            <Typography
              variant="caption"
              color={'primary'}
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block',
              }}
            >
              Language
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  French (native Speaker)
                </Typography>
                <BorderLinearProgress variant="determinate" value={100} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  English (TOEIC : 920)
                </Typography>
                <BorderLinearProgress variant="determinate" value={93} />
              </Grid>
              <Grid item xs={6} >
                <Typography
                  variant="body2"
                  component={'a'}
                  underline={'none'}
                  onClick={() => onClose()}
                >
                  Spanish
                </Typography>
                <BorderLinearProgress variant="determinate" value={60} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/page-customers"
          >
            See Projects
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="/page-contact"
          >
            Contact me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;

