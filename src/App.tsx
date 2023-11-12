import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [providerCount, setProviderCount] = useState(2);
  const [patientCount, setPatientCount] = useState(0);
  const [closeTime, setCloseTime] = useState('');
  
  const calculateCloseTime = (patientCount: number, providerCount: number) => {
    if(!patientCount || !providerCount) return setCloseTime('');

    const minutesPerPatient = 20;
    const minimumMinutesRequired = (patientCount * minutesPerPatient) / providerCount;
    const extraTime = minimumMinutesRequired % minutesPerPatient;
    const totalMinutes = minimumMinutesRequired + extraTime;
    
    const closeTime = new Date( Date.now() + (totalMinutes * 60000) );
    setCloseTime(closeTime.toLocaleTimeString());
  }

  useEffect(() => {
    calculateCloseTime(patientCount, providerCount);
  }, [providerCount, patientCount]);

  return (
    <div>
      <div>
        <label>
          Number of Providers
          <input type="number" name='providerCount' min={0} max={10} value={providerCount} onChange={e => setProviderCount(parseInt(e.target.value, 10))} />
        </label>
      </div>
      <div>
        <label>
          Number of Patients
          <input type="number" name='patientCount' min={0} max={100} value={patientCount} onChange={e => setPatientCount(parseInt(e.target.value, 10))} />
        </label>
      </div>
      {closeTime && (
        <div>{closeTime}</div>
      )}
    </div>
  )
}

export default App
