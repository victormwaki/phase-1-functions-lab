// Code your solution in this file!
const hqArea = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(pickupArea){
return Math.abs(pickupArea - hqArea);
}
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(pickupArea){
const blocks = distanceFromHqInBlocks(pickupArea);
return blocks * feetPerBlock;
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination){
const blocksTraveled = Math.abs(destination - start);
return blocksTraveled * feetPerBlock;
}
console.log(distanceTravelledInFeet(34, 42));

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400){
        return 0;
    }
    if (distance > 400 && distance <= 2000){
        const fare = (distance - 400 )* 0.02 //cents per foot
        return fare; 
    }
    if (distance > 2000 && distance <= 2500){
        return 25; 
    }
    if (distance >2500){
        return 'cannot travel that far'

    }
}
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(34, 40));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 70));