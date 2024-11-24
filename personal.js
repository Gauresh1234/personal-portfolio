function right(){
  const element=document.getElementById("projects-lists")
  element.scrollLeft +=50;
  console.log("Running")
}

function left(){
  const element=document.getElementById('projects-lists')
  element.scrollLeft -=50;
}