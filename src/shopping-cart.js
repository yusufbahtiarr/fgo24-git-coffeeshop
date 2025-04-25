import shoppingCart from "./data-var.js";
import errorMessage, { clear, backMainMenu } from "./additional-menu.js";
import rl from "./readline.js";
import { mainMenu } from "../index.js";


export default async function viewShoppingCart() {
  clear();
  console.log(`Keranjang:`);
  if(shoppingCart.length === 0){
    console.log("Keranjang Kosong");
  } else {
    shoppingCart.forEach((item, index)=>{
      console.log(`${index+1}. ${item.name} - Rp ${item.price}`);
    });
    const total = shoppingCart.reduce((sum, item)=> sum += item.price, 0);
    console.log(`Total Harga: Rp ${total}`);
    backMainMenu();
    rl.question('Tekan Nomor [0] : ', function(input1) {
      if (input1==="0") { 
        console.clear();
        mainMenu();
      }else{
        errorMessage();
      }
    });
  }
}