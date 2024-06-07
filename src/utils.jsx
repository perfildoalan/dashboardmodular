export function getLocalizacao() {
  let localizacao

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      localizacao = {
        latitude: position.latitude,
        longitude: position.longitude
      }
    });
  } else {
    localizacao = {
      latitude: -5.82645,
      longitude: -35.21191,
    }
  }
  
  return localizacao
}

export async function getTemperatura() {
  let temperatura

  
}

