import { useState } from 'react'
import { Box, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { getPace, calculateCloseTime, getDateAfterHours } from './utils';

function App() {
  const [providerCount, setProviderCount] = useState(2);
  const [patientCount, setPatientCount] = useState(10);
  
  const pace = getPace(providerCount);
  const hours = calculateCloseTime(pace, patientCount, providerCount);
  const time = hours ? getDateAfterHours(hours).toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" }) : undefined;

  const handleChangeProviderCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setProviderCount(value || 1);
  }

  const handleChangePatientCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setPatientCount(value || 1);
  }

  return (
    <Container maxWidth='xs' sx={{ py: 10 }}>
      <Typography variant='h2' component='h1' sx={{ mb: 5, textAlign: 'center' }}>Cap Calculator</Typography>

      <Grid container spacing={1}>
        <Grid item xs>
          <FormControl fullWidth sx={{ py: 1 }}>
            <TextField
              label="Providers"
              value={providerCount}
              type='number'
              InputProps={{ inputProps: {  max: 5 , min: 1, step: '0.5' } }}
              onChange={handleChangeProviderCount}
            />
          </FormControl >
        </Grid>
        <Grid item xs>
          <FormControl fullWidth sx={{ py: 1 }}>
            <TextField
              label="Patients"
              value={patientCount}
              type='number'
              InputProps={{ inputProps: {  max: 99, min: 0 } }}
              onChange={handleChangePatientCount}
            />
          </FormControl>
        </Grid>
      </Grid>

      {hours && time ? (
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant='h3' component='p' sx={{ mt: 5 }}>
            <Typography variant='subtitle2' component='span' sx={{ display: 'block' }}>Projected Finish Time:</Typography>
            {time}
          </Typography>
          <Typography variant='caption' component='p'>{hours} Hours at a pace of {pace}</Typography>
        </Box>
      ) : null}
    </Container>
  )
}

export default App
