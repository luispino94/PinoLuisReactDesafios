const productos = [
    {
      name: 'AWP 40 Dragon Age',
      price: 300,
      skin:
        'https://www.theloadout.com/wp-content/uploads/2021/05/best-csgo-skins-neo-noir-awp.jpeg',
      stock: 5,
      categoria : 'sniper',
      id: '1',
    },
    {
      name: 'M4A4 FireBase',
      price: 450,
      skin:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0VdKhVmK2XUYxBnRUAPc9k-ULnMHOK4l0ARWEy5EyrjDCc-_-ZTsStH--mOC0Z7gzhk&usqp=CAU',
      stock: 5,
      categoria : 'rifles',
      id: '2',
    },
    {
      name: 'Aka-47 DaftPunk',
      price: 500,
      skin:
        'https://www.theloadout.com/wp-content/uploads/2021/05/best-csgo-skins-neon-rider-ak47.jpeg',
      stock: 5,
      categoria : 'rifles',
      id: '3',
    },
    {
      name: 'M4A4 Assasin',
      price: 700,
      skin:
        'https://static1-es.millenium.gg/articles/3/41/40/3/@/213990-m4a4-amp_main_img-1.jpg',
      stock: 5,
      categoria : 'sniper',
      id: '4',
    },
    {
      name: 'M4-16-Assault',
      price: 1000,
      skin:
        'https://img.4gamers.com.tw/ckfinder-vn/image2/auto/2020-11/1024x576-201130-152657.jpeg?versionId=jIPDS5zXVNASX34rbVdR5iv1vWswBQmv',
      stock: 5,
      categoria : 'sniper',
      id: '5',
    },
    {
      name: 'M4A4-Asiimov',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/791ba7f219004dcf95aba0256da93196/thumbnails/c3fb8ef0bbc9414291bc86934ab67994/1024x576.jpeg',
      stock: 5,
      categoria : 'sniper',
      id: '6',
    },
    {
      name: 'Aka-47 Elite Build',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/791ba7f219004dcf95aba0256da93196/thumbnails/c3fb8ef0bbc9414291bc86934ab67994/1024x576.jpeg',
      stock: 5,
      categoria : 'sniper',
      id: '7',
    },
    {
      name: 'Aka-47 Fuel Injector',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/b085ba8e4a274101928114af70989504/thumbnails/89a9712b7e8542c09644f4938bea2910/1024x576.jpeg',
      stock: 5,
      categoria : 'sniper',
      id: '8', 
    },
    {
      name: 'Test',
      price: 1200,
      test:
      `<div class="sketchfab-embed-wrapper"> <iframe title="★ Karambit | Lore" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1d1211cd7b664b5fbe0a86db31e356e9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/karambit-lore-1d1211cd7b664b5fbe0a86db31e356e9?utm_medium=embed&utm_campaign=share-popup&utm_content=1d1211cd7b664b5fbe0a86db31e356e9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> </div>`,
      stock: 5,
      categoria : 'sniper',
      id: '9', 
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