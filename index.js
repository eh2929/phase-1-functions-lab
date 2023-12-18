function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
distanceFromHqInBlocks(30);

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  if (someValue > 42) {
    return (someValue - 42) * 264;
  } else {
    return (42 - someValue) * 264;
  }

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}
distanceTravelledInFeet(34, 28);

console.log(calculatesFarePrice(34, 32));

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) / 50;
  } else if (distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(34, 24));
