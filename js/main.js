//event listeners looking for button presses from index.html

//call async function of addUser or makeReq

document.querySelector('#clickMe').addEventListener('click', coinFlip)

// <<<<<<< add-user-interface

// =======
// //async function which takes an input from index.html #userName id text field, fetches data from server, returns data as JSON (or throws an error)
// //data is displayed into DOM 
// >>>>>>> main
let gameFlag = false

async function coinFlip() {

  const res = await fetch(`/coinFlip`)
  const data = await res.json()

  console.log(data.result)
  // console.log(data.gameStarted)
  const image = document.createElement('img')
  if(gameFlag){
    document.querySelector("#coinImage").removeChild(document.querySelector('#coinImage').firstChild)
    gameFlag = false
  }
  if(data.result == 'heads'){
    gameFlag = true
    image.src = 'images/heads.jpg'
    document.querySelector("#coinImage").appendChild(image)
    // document.head.appendChild(document.createElement('style')).sheet.InsertRule('div#coinImage:hover{animation: tilt-n-move-shaking 0.25s;} @keyframes tilt-n-move-shaking { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(5px, 5px) rotate(5deg); } 50% { transform: translate(0, 0) rotate(0eg); } 75% { transform: translate(-5px, 5px) rotate(-5deg); } 100% { transform: translate(0, 0) rotate(0deg); }')

  }
  else if(data.result == 'tails'){
    gameFlag = true
    image.src = 'images/tails.jpg'
    document.querySelector("#coinImage").appendChild(image)
 
  }
  
  // document.querySelector("#personName").textContent = data._name
  // document.querySelector("#personStatus").textContent = data._status
  // document.querySelector("#personOccupation").textContent = data._occupation

}
// >>>>>>> main
