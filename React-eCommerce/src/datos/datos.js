const productos = [
    {
      name: 'AWP | Dragon Lore',
      price: 300,
      skin:
        'https://cdnb.artstation.com/p/assets/images/images/004/828/097/large/tolga-balek-1.jpg?1486567236',
      stock: 5,
      modelo:
      ' <iframe title="AWP | Dragon Lore" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e633e9b6a24142029843456efef22036/embed?autostart=1"> </iframe>',
      categoria : 'awp',
      id: '1',
    },
    {
      name: 'M4A4 | Howl',
      price: 450,
      skin:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0VdKhVmK2XUYxBnRUAPc9k-ULnMHOK4l0ARWEy5EyrjDCc-_-ZTsStH--mOC0Z7gzhk&usqp=CAU',
      stock: 5,
      modelo:
      ' <iframe title="M4A4 | Howl" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/513724f9559142d19c487bf1ba855fb6/embed?autostart=1"> </iframe>',
      categoria : 'counter',
      id: '2',
    },
    {
      name: 'AK-47 | Revolution',
      price: 500,
      skin:
        'https://media.sketchfab.com/models/0cfe2ca02bd64b3a832e993bf1dd6be1/thumbnails/b6c99ab6a66b412eabee858a207c20d9/1024x576.jpeg',
      stock: 5,
      modelo:
      '<iframe title="AK-47 | Neon Revolution" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0cfe2ca02bd64b3a832e993bf1dd6be1/embed?autostart=1"> </iframe>',
      categoria : 'terrorist',
      id: '3',
    },
    {
      name: 'M4A1-S | Hyper Beast',
      price: 700,
      skin:
        'https://media.sketchfab.com/models/0cd3a01ad5044862bab42a9c2bce5e34/thumbnails/c8c1b26c8e4a496095809927acd59247/1024x576.jpeg',
      stock: 5,
      modelo:
      '<iframe title="M4A1-S | Hyper Beast" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0cd3a01ad5044862bab42a9c2bce5e34/embed?autostart=1"> </iframe>',
      categoria : 'counter',
      id: '4',
    },
    {
      name: 'AWP | Hyper Beast',
      price: 1000,
      skin:
        'https://media.sketchfab.com/models/bd4adbeb38484e44a5b9d29d151585ee/thumbnails/10d34057c8f542f4a346840c2897f6ae/1024x576.jpeg',
      stock: 5,
      modelo: 
      '<iframe title="AWP | Hyper Beast" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bd4adbeb38484e44a5b9d29d151585ee/embed?autostart=1"> </iframe>',
      categoria : 'awp',
      id: '5',
    },
    {
      name: 'M4A4 | Asiimov',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/791ba7f219004dcf95aba0256da93196/thumbnails/c3fb8ef0bbc9414291bc86934ab67994/1024x576.jpeg',
      stock: 5,
      modelo: 
      '<iframe title="M4A4 | Asiimov" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/791ba7f219004dcf95aba0256da93196/embed?autostart=1"> </iframe>',
      categoria : 'counter',
      id: '6',
    },
    {
      name: 'AK-47 | Vulcan',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/fc2604a3cd3c49e59e399643740cc447/thumbnails/70d07ba902214b51a7885103c1661c38/blob.jpeg',
      stock: 5,
      modelo:
      '<iframe title="AK-47 | Vulcan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fc2604a3cd3c49e59e399643740cc447/embed?autostart=1"> </iframe>',
      categoria : 'terrorist',
      id: '7',
    },
    {
      name: 'P90 | Asiimov',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/a7258ca314da40218a834d5998a51223/thumbnails/0d63e1d0174743608251d36ac05d742d/1024x576.jpeg',
      stock: 5,
      modelo: 
      '<iframe title="P90 | Asiimov" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a7258ca314da40218a834d5998a51223/embed?autostart=1"> </iframe>',
      categoria : 'terrorist',
      id: '8', 
    },
    {
      name: '★ Karambit | Lore',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/1d1211cd7b664b5fbe0a86db31e356e9/thumbnails/beb1bec477864beba4276a3b9c8ce8bf/1024x576.jpeg',
      stock: 5,
      modelo: 
      '<iframe title="★ Karambit | Lore" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1d1211cd7b664b5fbe0a86db31e356e9/embed?autostart=1"> </iframe>',
      categoria : 'knife',
      id: '9', 
    },
    {
      name: '★ Flip Knife ',
      price: 1200,
      skin:
        'https://media.sketchfab.com/models/33bb90c3d0934e279917ff5d262551be/thumbnails/e45ef6592e404f8fa7bed5b44936bca6/blob.jpeg',
      stock: 5,
      modelo: 
      '<iframe title="★ Flip Knife | Autotronic" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/33bb90c3d0934e279917ff5d262551be/embed?autostart=1"></iframe>',
      categoria : 'knife',
      id: '10', 
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