const url = "https://raw.githubusercontent.com/yusufbahtiarr/fgo24-node-datasource/refs/heads/main/menu.json";
const fetchMenu = async () => {
  try {
    const response = await fetch(url);
    // cek kalau fetch gagal
    if (!response.ok){
      throw new Error("Error Url JSON");
    }
    const data = await response.json();

    // cek data apakah kosong
    if (!data){
      throw new Error("Not found JSON");
    }

    // console.log(data);
    
    return data;
    
  } catch (err){
    console.log("Error Message: ", err.message);
  }
};

export default fetchMenu;