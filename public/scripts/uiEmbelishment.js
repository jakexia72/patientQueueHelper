
function getOrdinal(num){
  if(num == 1){
    return "1st";
  } else if (num == 2){
    return "2nd";
  } else if (num == 3){
    return "3rd";
  } else {
    return num + "th";
  }
}

function getNiceTimeFromMinutes(min){
  if(min < 60){
    return min + " minute" + getPluralSuffix(min);
  }else if(min == 60){
    return "one hour"
  }else if(min > 60){
    console.log(min)
    hours = Math.floor(min/60);
    remainingMin = min - (hours*60);
    if (remainingMin == 0){
      return hours + " hour" + getPluralSuffix(hours);
    } else {
      return (hours + " hour" + getPluralSuffix(hours) + ", " + remainingMin + " minute" + getPluralSuffix(remainingMin))
    }
  }
}

function getPluralSuffix(amount){
    if (amount != 1){
      return "s";
    } else {
      return "";
    }
}
