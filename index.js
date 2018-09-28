function dwarfRollCall(dwarves) {
  var numbered_dwarves=""
  var i=0
  while(i<dwarves.length)
  {
    numbered_dwarves=numbered_dwarves+(i+1)+". "+dwarves[i]
  //  if (i==!dwarves.length-1)
    //{
      numbered_dwarves=numbered_dwarves+" "
    //}
    i++
  }
  return numbered_dwarves
}

function summonCaptainPlanet(planeteerCalls){
  var planeteerCalls_updated=[]
  var i=0
  while(i<planeteerCalls.length)
  {
    planeteerCalls_updated[i]=planeteerCalls[i].toUpperCase()+"!"
    i++
  }
  return planeteerCalls_updated
}

function longPlaneteerCalls(words) {
 var lengths=words.map(x=>x.length)
  var i=0
  var t=false
  while ((t===false)&&(i<words.length))
  {
    
    if (lengths[i]>4)
    {
      t=true
    }
   i++ 
  }
  return t
}

function findTheCheese (foods) {
  var i=0
  var t=false
  var cheese=["gouda","cheddar"]
  while((t===false)&&(i<foods.length))
  {
    if (cheese.indexOf(foods[i])>-1)
    {
     t=true 
    }
    i++
  }
  if (t===true)
  {
  return foods[i-1]
  }
  else
  {
    return "no cheese!"
  }
}
