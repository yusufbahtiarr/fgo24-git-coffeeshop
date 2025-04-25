import { mainMenu } from "../index.js";

export function clear(){
  console.clear();
}

export function backMainMenu(){
  console.log('0. Kembali ke Menu Utama');
}

export function errorMessage(){
  clear();
  console.log("Menu tidak tersedia. Harap tekan menu sesuai dengan pilihan yang ada");
  mainMenu();
}

export default errorMessage;