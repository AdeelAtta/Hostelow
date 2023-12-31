




export let AdminMenu = [{
    name: `Dashboard`,
    route: `dashboard`,
    icon: ``,
    displayComponent: `Display Component`
  },{
    name: `Das1`,
    route: `Das1`,
    icon: ``,
    displayComponent: `Display Das1`
  },{
    name: `Dashb23`,
    route: `Dashb23`,
    icon: ``,
    displayComponent: `Display Dashb23`
  },{
    name: `Das234`,
    route: `Das234`,
    icon: ``,
    displayComponent: `Display Das234`
  }]



export function createMenu (text) {

if(text == `admin`){
  return AdminMenu;

}

return []

}
