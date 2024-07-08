export const getPace = (providerCount: number): number | undefined => !providerCount ? undefined : providerCount <= 2 ? 3 : providerCount === 2.5 ?  2.75 : 2.5;

export const calculateCloseTime = (pace?: number, patientCount?: number, providerCount?: number): number | undefined => {
  if(!pace || !patientCount || !providerCount) return undefined;
  const hours = roundToX(patientCount / (pace * providerCount), 2);
  return hours;
}

export const getDateAfterHours = (hours: number): Date => {
  const today = new Date();
  today.setMinutes(today.getMinutes() + hours * 60);
  return today;
}

export const roundToX = (num = 0, decimals = 2) => Math.round(num * 10 ** decimals) / 10 ** decimals;
