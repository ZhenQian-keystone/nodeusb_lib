import { usb, getDeviceList } from 'usb';
const devices = getDeviceList();
console.log(devices);