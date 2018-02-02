let start
let destination

function calculateVertical (start, destination){
    return Math.abs(start - destination)
  }

function distanceFromHqInBlocks (start){
 return Math.abs(start-42);
}

function distanceFromHqInFeet (start) {
  return distanceFromHqInBlocks (start) * 264;

}

function distanceTravelledInFeet (start, destination){
  return calculateVertical (start, destination) * 264;
}

function calculatesFarePrice (start, destination){
  let trip = 
  
}