function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
   var target = document.getElementById('nested').getElementsByClassName("target")
   return target[0]
}
function deepestChild(){
  return document.getElementById("grand-node").querySelectorAll('div')[3]

}
function increaseRankBy(n){
    const rankedList = document.querySelectorAll('.ranked-list')

for (let i=0; i < rankedList.length; i++){
let children = rankedList[i].children 
for (let z=0; z < children.length; z++){
children[z].innerHTML = parseInt(children[z].innerHTML) + n}}
}