const {app, BrowserWindow} = require('electron') ;

function CreateWindow(){
    const ventana = new BrowserWindow({
        width: 650,
        height: 450,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    ventana.loadFile('ventana_1.html')
}




// resto de funciones ya parametrizadas según tamaño que entraran en funcionamiento en la proxima entrea






// function CreateWindow2(){
//     const ventana = new BrowserWindow({
//         width: 1050,
//         height: 450,
//         webPreferences:{
//             nodeIntegration:true,
//             contextIsolation:false
//         }
//     });
//     ventana.loadFile('ventana_2.html')
// }

// function CreateWindow3(){
//     const ventana = new BrowserWindow({
//         width: 650,
//         height: 750,
//         webPreferences:{
//             nodeIntegration:true,
//             contextIsolation:false
//         }
//     });
//     ventana.loadFile('ventana_3.html')
// }

// function CreateWindow(){
//     const ventana = new BrowserWindow({
//         width: 650,
//         height: 575,
//         webPreferences:{
//             nodeIntegration:true,
//             contextIsolation:false
//         }
//     });
//     ventana.loadFile('ventana_4.html')
// }


app.whenReady().then(CreateWindow)