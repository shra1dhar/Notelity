export function getTime(epoch?: number) {
  return epoch ? new Date(epoch).getTime().toString() : new Date().getTime().toString();
}

export function getDateString(epoch?: number) {
  return epoch ? new Date(epoch).toDateString() : new Date().toDateString();
}

export function localeTimeString(epoch?: number) {
  return epoch ? new Date(epoch).toLocaleTimeString() : new Date().toLocaleTimeString();
}

export function getFormattedTime(epoch?: number): string {
  const time = epoch ? getDateString(epoch) : getDateString();
  const splitTime = time.split(' ', 4);
  splitTime[0] = `${splitTime[0]},`;
  return splitTime.join(' ');
}
