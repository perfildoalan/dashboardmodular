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

export function getMode() {
  let mode = () => {
      let DiaOuNoiteMode
      let DiaOuNoite = new Date();

      if (DiaOuNoite.getHours() >= 6 && DiaOuNoite.getHours() < 18) {
        DiaOuNoiteMode = "LightMode";
      } else {
        DiaOuNoiteMode = "DarkMode";
      }

      return DiaOuNoiteMode
    }
}
