window.saveDataAcrossSessions = false

webgazer.setGazeListener((data, timestamp) => {
  console.log(data, timestamp)
}).begin();