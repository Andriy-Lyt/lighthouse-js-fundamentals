const carPassing = function (cars, speed) {
  let speed_time = {
    speed: speed,
    time: Date.now()
  }
  cars.push(speed_time);
  return cars;
}
