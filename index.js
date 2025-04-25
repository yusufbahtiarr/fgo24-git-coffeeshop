import showMenu, { showMainMenu } from "./src/show-data.js";
import rl from "./src/readline.js";
import errorMessage, { clear, backMainMenu } from "./src/additional-menu.js";
import listMenus from "./src/list-menus.js";
import viewShoppingCart from "./src/shopping-cart.js";
import checkOut from "./src/checkout.js";


export function mainMenu(){
  console.log(`Menu Utama Twenty Two Cafe\n1. Pilih Menu\n2. Lihat Keranjang\n3. Checkout`);
  rl.question('Masukkan Pilihan [1-3] : ', async function(input1) {
    if (input1==="1") {
      clear();
      console.log("Menu Twenty Two Cafe");
      await showMainMenu();
      await backMainMenu();
      rl.question('Masukkan Pilihan [0-4] : ', async function(input2) {
        if (input2==="1") { clear(); await showMenu(input2); await backMainMenu(); await listMenus(input2)}
        else if (input2==="2") { clear(); await showMenu(input2); await backMainMenu(); await listMenus(input2)}
        else if (input2==="3") { clear(); await showMenu(input2); await backMainMenu(); await listMenus(input2)}
        else if (input2==="4") { clear(); await showMenu(input2); await backMainMenu(); await listMenus(input2)}
        else if (input2==="0") { clear(); mainMenu(); }
        else { errorMessage(); }
      });
    } else if (input1==="2") { clear(); viewShoppingCart(); }
    else if (input1==="3") { 
      checkOut();
      rl.close();
    } else {
      errorMessage();
    }
  });
}
mainMenu();











