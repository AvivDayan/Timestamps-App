import { AsyncStorage } from 'react-native';

let timestamps = [];

const loadTimeStamps = async () => {
  const JSONtimestamps = await AsyncStorage.getItem('TIMESTAMPS');
  if (JSONtimestamps)
    timestamps = JSON.parse(JSONtimestamps);
}

const getTimeStamps = () => {
  return timestamps;
}

const addTimeStamp = (timestamp) => {
  timestamps.push(timestamp.getTime());
  AsyncStorage.setItem('TIMESTAMPS', JSON.stringify(timestamps));
}

export { loadTimeStamps, getTimeStamps, addTimeStamp };
