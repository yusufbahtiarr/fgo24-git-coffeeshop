import { clear } from "./additional-menu.js";
import shoppingCart from "./data-var.js";

export default async function checkOut() {
  clear();
  console.log("Twenty Two Cafe");
  console.log(`Menu yang dibeli:`);
  shoppingCart.forEach((item, index)=>{
    console.log(`${index+1}. ${item.name} - Rp ${item.price}`);
  });
  const total = shoppingCart.reduce((sum, item)=> sum += item.price, 0);
  console.log(`Total Harga: Rp ${total} \nTerimakasih sudah memesan!`);
}
