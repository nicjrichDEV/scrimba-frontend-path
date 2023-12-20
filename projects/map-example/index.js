//Convert these Miles to KM!
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (miles) {
  return miles * conversionFactorMilesToKm;
});

console.log(distanceWalkedKmArr);
