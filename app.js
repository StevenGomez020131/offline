
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration){

    })
    .catch(function(error){
        console.log('Error al registrar el Service Worker:', error)
    });
}