var brick;var Bombshell;var Glue;var Clay;var Ironite ;var Shrapnel;var Chest;var Beam;var Seltsam;var Eggsplosive ; var softwood;var Hardwood;
var Slime;var Wax;var QueenBee;var Honey;var Popberry;var PopberryWine;var SilkCloth;var SilkFiber;var Sap; var plack;var ironBar;

const listaDeItems = [
  'itm_brick','itm_Bomb_Shell', 'itm_Glue', 'itm_clay', 'itm_Iron_Ore',
  'itm_Shrapnel', 'itm_storageChest6Slot', 'itm_plank', 'itm_woodenbeam',
  'itm_seltsamEgg', 'itm_eggsplosive', 'itm_silkslugslime', 'itm_beeswax',
  'itm_queenbee', 'itm_honey', 'itm_popberryFruit', 'itm_popberrywine',
  'itm_silkcloth', 'itm_silkfiber' , 'itm_tree_sap' , 'itm_Iron_Bar' ,'itm_wood' , 'itm_hard_wood'
];




async function fetchData(itemId) {
  console.log("entra el ferch")
  console.log(itemId)
  const url = `https://pixels-server.pixels.xyz/v1/marketplace/item/${itemId}`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      switch (itemId) {
        case 'itm_brick':
        brick = await obtenerPrecioMasBajo(data.listings);
          break;
        case 'itm_Bomb_Shell':
          console.log("paso por aca la bomba")
          Bombshell = await obtenerPrecioMasBajo(data.listings);
          break;
        case 'itm_Glue':
          Glue = await obtenerPrecioMasBajo(data.listings);
          break;
        case 'itm_clay':
         Clay = await obtenerPrecioMasBajo(data.listings);
          break;
          case 'itm_Iron_Ore':
          Ironite = await obtenerPrecioMasBajo(data.listings);
        break;
          case 'itm_Shrapnel':
          Shrapnel = await obtenerPrecioMasBajo(data.listings);
            break;
          case 'itm_storageChest6Slot':
           Chest = await  obtenerPrecioMasBajo(data.listings);
            break;
          case 'itm_plank':
            plack = await obtenerPrecioMasBajo(data.listings);
            break;
          case 'itm_woodenbeam':
            Beam = await obtenerPrecioMasBajo(data.listings);
            break;
            case 'itm_seltsamEgg':
             Seltsam =  await obtenerPrecioMasBajo(data.listings);
          break;
          case 'itm_eggsplosive':
            Eggsplosive = await obtenerPrecioMasBajo(data.listings);
            break;
            case 'itm_silkslugslime':
             Slime = await obtenerPrecioMasBajo(data.listings);
              break;
            case 'itm_beeswax':
              Wax = await obtenerPrecioMasBajo(data.listings);
              break;
            case 'itm_queenbee':
              QueenBee = await obtenerPrecioMasBajo(data.listings);
              break;
            case 'itm_honey':
              Honey = await obtenerPrecioMasBajo(data.listings);
              break;
              case 'itm_popberryFruit':
              Popberry =  await obtenerPrecioMasBajo(data.listings);
            break;
            case 'itm_popberrywine':
              PopberryWine = await obtenerPrecioMasBajo(data.listings);
              break;
              case 'itm_silkcloth':
               SilkCloth = await obtenerPrecioMasBajo(data.listings);
                break;
              case 'itm_silkfiber':
                SilkFiber = await obtenerPrecioMasBajo(data.listings);
                break;
              case 'itm_tree_sap':
                Sap = await obtenerPrecioMasBajo(data.listings);
                break;
                case 'itm_Iron_Bar':
                  ironBar = await obtenerPrecioMasBajo(data.listings);
                  break;
                  case 'itm_wood':
                    softwood = await obtenerPrecioMasBajo(data.listings);
                    break;
                    case 'itm_hard_wood':
                    Hardwood = await obtenerPrecioMasBajo(data.listings);
                    console.log("Valor de hardwood : "+ Hardwood)
                      break;
          }
    }
}


async function cargarObjetos() {
    await obtenerElementos(listaDeItems);
}

async function obtenerPrecioMasBajo(listings) {
  if (listings.length === 0) {
    return null;
  }
  console.log("listings : ")
  console.log(listings)
    let flag = 0;
    let precioMasBajo;
  for (let i = 1; i < listings.length; i++) {
  if(flag == 0)
  {
    precioMasBajo = listings[i].price
    flag = 1;
  }else
  {
  if(listings[i].currency == "cur_berry")
  {
    if (listings[i].price < precioMasBajo) {
      precioMasBajo = listings[i].price;
    }
  }
  }
  }
  console.log("preciomasbajo : " + precioMasBajo)
  return precioMasBajo;
}

async function obtenerElementos(listaItems) {
    for (const item of listaItems) {
      console.log("paso por obtener elemento")
      const Elemento = await fetchData(item);
    }
}
document.addEventListener('DOMContentLoaded', async function () {
  obtenerElementos(listaDeItems).then(() => {
    CrearCuadro();
    console.log("se ejecutó otro método después de obtenerElementos");
  })
  .catch(error => {
    // Manejar errores si es necesario
  });

});

function CrearCuadro()
{
  document.getElementById("Bombshell-1").textContent = "coming soon"
  document.getElementById("Bombshell-2").textContent = Bombshell
  document.getElementById("Bombshell-3").textContent = (Eggsplosive * 2) + (Shrapnel * 12) + Glue + (Wax * 4)
  document.getElementById("Bombshell-4").textContent = Bombshell - (((Eggsplosive * 2) + (Shrapnel * 12) + Glue + (Wax * 4))*0.99)
  document.getElementById("Brick-1").textContent = "coming soon"
  document.getElementById("Brick-2").textContent = brick
  document.getElementById("Brick-3").textContent = Clay * 3
  document.getElementById("Brick-4").textContent = brick - ((Clay * 3)*0.99)
  document.getElementById("Glue-1").textContent = "coming soon"
  document.getElementById("Glue-2").textContent = Glue
  document.getElementById("Glue-3").textContent = Sap + Seltsam + (Honey * 2) + (Slime * 2)
  document.getElementById("Glue-4").textContent = Glue - ((Sap + Seltsam + (Honey * 2) + (Slime * 2))*0.99)
  document.getElementById("Clay-1").textContent = "coming soon"
  document.getElementById("Clay-2").textContent = Clay
  document.getElementById("Clay-3").textContent = "-----"
  document.getElementById("Clay-4").textContent = Clay * 0.99
  document.getElementById("Ironite-1").textContent = "coming soon"
  document.getElementById("Ironite-2").textContent = Ironite
  document.getElementById("Ironite-3").textContent = "-----"
  document.getElementById("Ironite-4").textContent = Ironite * 0.99
  document.getElementById("Shrapnel-1").textContent = "coming soon"
  document.getElementById("Shrapnel-2").textContent = Shrapnel
  document.getElementById("Shrapnel-3").textContent =  ironBar * 3
  document.getElementById("Shrapnel-4").textContent = Shrapnel - ((ironBar * 3)*0.99)
  document.getElementById("Chest-1").textContent = "coming soon"
  document.getElementById("Chest-2").textContent = Chest
  document.getElementById("Chest-3").textContent = (20 * 100) + (plack * 88) + Glue
  document.getElementById("Chest-4").textContent =  Chest - (((20 * 100) + (plack * 88) + Glue )*0.99)
  document.getElementById("Plank-1").textContent = "coming soon"
  document.getElementById("Plank-2").textContent = plack
  document.getElementById("Plank-3").textContent = softwood * 12
  document.getElementById("Plank-4").textContent = plack - ((softwood * 12)*0.99)
  document.getElementById("WoodBeam-1").textContent = "coming soon"
  document.getElementById("WoodBeam-2").textContent = Beam
  document.getElementById("WoodBeam-3").textContent = (Hardwood * 12) + (Wax * 8)
  document.getElementById("WoodBeam-4").textContent = Beam - (((Hardwood * 12) + (Wax * 8))*0.99)
  document.getElementById("Seltsam-1").textContent = "coming soon"
  document.getElementById("Seltsam-2").textContent = Seltsam 
  document.getElementById("Seltsam-3").textContent = "-----"
  document.getElementById("Seltsam-4").textContent = Seltsam * 0.99
  document.getElementById("Eggsplosive-1").textContent = "coming soon"
  document.getElementById("Eggsplosive-2").textContent = Eggsplosive
  document.getElementById("Eggsplosive-3").textContent = "-----"
  document.getElementById("Eggsplosive-4").textContent = Eggsplosive * 0.99
  document.getElementById("Slime-1").textContent = "coming soon"
  document.getElementById("Slime-2").textContent = Slime
  document.getElementById("Slime-3").textContent = "-----"
  document.getElementById("Slime-4").textContent = Slime * 0.99
  document.getElementById("Wax-1").textContent = "coming soon"
  document.getElementById("Wax-2").textContent = Wax
  document.getElementById("Wax-3").textContent = "----"
  document.getElementById("Wax-4").textContent = Wax * 0.99
  document.getElementById("Queen-1").textContent = "coming soon"
  document.getElementById("Queen-2").textContent = QueenBee
  document.getElementById("Queen-3").textContent = "-----"
  document.getElementById("Queen-4").textContent = QueenBee * 0.99
  document.getElementById("Honey-1").textContent = "coming soon"
  document.getElementById("Honey-2").textContent = Honey
  document.getElementById("Honey-3").textContent = "-----"
  document.getElementById("Honey-4").textContent = Honey * 0.99
  document.getElementById("Popberry-1").textContent = "coming soon"
  document.getElementById("Popberry-2").textContent = Popberry
  document.getElementById("Popberry-3").textContent = "-----"
  document.getElementById("Popberry-4").textContent = (Popberry -  1)* 0.99
  document.getElementById("PopberryWine-1").textContent = "coming soon"
  document.getElementById("PopberryWine-2").textContent = PopberryWine
  document.getElementById("PopberryWine-3").textContent = (Popberry * 24) + (10*10) + (Honey * 3)
  document.getElementById("PopberryWine-4").textContent = PopberryWine - (((Popberry * 24) + (10*10) + (Honey * 3))*0.99)
  document.getElementById("SilkCloth-1").textContent = "coming soon"
  document.getElementById("SilkCloth-2").textContent = SilkCloth
  document.getElementById("SilkCloth-3").textContent = (SilkFiber * 9) + (Slime * 4 ) + (Wax * 4)
  document.getElementById("SilkCloth-4").textContent = SilkCloth - (((SilkFiber * 9) + (Slime * 4 ) + (Wax * 4))*0.99)
  document.getElementById("SilkFiber-1").textContent = "coming soon"
  document.getElementById("SilkFiber-2").textContent = SilkFiber
  document.getElementById("SilkFiber-3").textContent = "-----"
  document.getElementById("SilkFiber-4").textContent = SilkFiber*0.99
  document.getElementById("Sap-1").textContent = "coming soon"
  document.getElementById("Sap-2").textContent = Sap
  document.getElementById("Sap-3").textContent = "-----"
  document.getElementById("Sap-4").textContent = Sap * 0.99

}