import logo from './logo.svg';
import './App.css';

import CustomBar from './components/CustomBar'; //'./components/CustomBar';
import { Box, Divider, Grid, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import OverView from './views/OverView';
import pic_desktop from './images/reconnection_windows01.png';

function App() {
  return (
    <div className="App">
      <CustomBar />
      <Box style={{ backgroundColor: '#c7c7df' }}>
        <Grid container spacing alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4" align="center">
              自分だけのサーバーで<br></br>
              コミュニティーを作ろう！
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={pic_desktop} alt="picture for desktop" width="100%"/>
            {/* Image
            (iPhoneのスクリーンショットとWindowsの方のスクリーンショット) */}
          </Grid>
        </Grid>
      </Box>
      {/* <Box>
        <Grid container>
          <Grid item xs={6}>
            イメージ
          </Grid>
          <Grid item xs={6}>
            説明
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            説明一
          </Grid>
          <Grid item xs={4}>
            説明2
          </Grid>
          <Grid item xs={4}>
            説明3
          </Grid>
        </Grid>
      </Box> */}
      <OverView />
      <Box p={5} align="left" style={{ color: '#81b5f5', backgroundColor: '#222222' }}>
        <Grid container>
          <Grid item xs={6}>
            <Box p={3}>
              <Typography variant="h5" align="left">Contact</Typography>
              <Typography variant="body1" align="left" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <MailIcon/>
                nomi.shinjo@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: '#3f51b5' }} />
        <Typography variant="caption" align="left">©2022 Shinjo.S</Typography>
      </Box>
    </div>
  );
}

export default App;
