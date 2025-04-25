import shoppingCart from "./data-var.js";
import fetchMenu from "./fetch-data.js";
import errorMessage, {clear} from "./additional-menu.js";
import rl from "./readline.js";
import { mainMenu } from "../index.js";


export async function listMenu(optMenu) {
  rl.question('Masukkan Pilihan [0-5] : ', async function(input1) {
    if (input1==="0") { clear(); mainMenu(); }
    else if (parseInt(input1)>0 && parseInt(input1) <=5) {
      const data = await fetchMenu();

      if (!data){
        console.log("Data tidak ditemukan atau format tidak sesuai.");
        return;
      }
      const menu = Object.keys(data); //hanya objek pertama saja
      const subMenu = menu[optMenu-1];
      const itemMenu = data[subMenu];
      console.log(itemMenu[0]);
      rl.question(`Apakah yakin untuk memesan ${itemMenu[input1-1].name} dengan harga Rp ${itemMenu[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
        if (input2==="Ya" || input2 === "ya") { 
          shoppingCart.push(itemMenu[input1-1]);
          console.log(`${itemMenu[input1-1].name} berhasil ditambahkan ke Keranjang`);
          console.clear();
          mainMenu();
        } else if (input2==="Tidak" || input2==="tidak") { mainMenu(); }
        else { errorMessage(); }
      });
    }
    else { errorMessage(); }
  });
}

export default listMenu;