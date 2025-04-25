import fetchMenu from "./fetch-data.js";

// tampilkan data
export async function showMenu(optMenu) {
  const data = await fetchMenu();
  
  if (!data){
    console.log("Data tidak ditemukan atau format tidak sesuai.");
    return;
  }
  const menu = Object.keys(data); //hanya objek pertama saja
  const subMenu = menu[optMenu-1];
  console.log(subMenu);
  data[subMenu].forEach((item, index)=>{
    console.log(`${index+1}. ${item.name} - ${item.price}`);
  });
}
// showMenu();

export async function showMainMenu() {
  const data = await fetchMenu();
  
  if (!data){
    console.log("Data tidak ditemukan atau format tidak sesuai.");
    return;
  }
  //tampilkan menu
  const dataMenus = Object.keys(data);
  dataMenus.forEach((item, index) => { 
    console.log(`${index+1}. ${item}`);
  });
  
}

export default showMenu;