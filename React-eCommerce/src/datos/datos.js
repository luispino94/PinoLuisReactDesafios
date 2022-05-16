const productos = [
    {
      name: 'AWP-40',
      price: 300,
      skin:
        'https://www.theloadout.com/wp-content/uploads/2021/05/best-csgo-skins-neo-noir-awp.jpeg',
      stock: 5,
      categoria : 'rifles',
      id: '1',
    },
    {
      name: 'M16',
      price: 450,
      skin:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0VdKhVmK2XUYxBnRUAPc9k-ULnMHOK4l0ARWEy5EyrjDCc-_-ZTsStH--mOC0Z7gzhk&usqp=CAU',
      stock: 5,
      categoria : 'rifles',
      id: '2',
    },
    {
      name: 'aka-47',
      price: 500,
      skin:
        'https://www.theloadout.com/wp-content/uploads/2021/05/best-csgo-skins-neon-rider-ak47.jpeg',
      stock: 5,
      categoria : 'rifles',
      id: 3,
    },
    {
      name: 'M4A4',
      price: 700,
      skin:
        'https://static1-es.millenium.gg/articles/3/41/40/3/@/213990-m4a4-amp_main_img-1.jpg',
      stock: 5,
      categoria : 'rifles',
      id: '4',
    },
  ];

export const getFetch = (id)=>{
  return new Promise ((resolve)=>{
    setTimeout (()=>{
      const identifier = id? productos.find (producto => producto.id === id): productos
      resolve (identifier)
    }, 2000)
  })
}