import axios from "axios";

const api = axios.create({
  baseURL: "192.168.1.14",
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com fisico: IP da máquina
 * Android emulador: localhost(adb reverse)
 * Android emulador: 10.0.2.2 (android Studio)
 * Android emulador: 10.0.3.2 (Genymotion)
 * Android fisico: IP da máquina
 */
