let list = document.getElementById("list");
const filter = document.querySelector("#filter");

function addtask(){
    let Input = document.getElementById("todoitem");
    //creating li tag for html
    let li = document.createElement("li");
    //creating text to append in li 
    li.className = "collection-item";
    let liText = document.createTextNode(Input.value);
    li.appendChild(liText)
    
    
    //b/c we created li tag using js so delere & edit button will also be created using js 
    let DelButton = document.createElement("button");
    let btnText = document.createTextNode("Delete");
    DelButton.appendChild(btnText);
    li.appendChild(DelButton)
    //er have created button through js so now giving attribute of onClick thorugh js 
    //"this" : ye wala button pura utha k argument me paas kardo
    DelButton.setAttribute("onclick","deleteItem(this)");

    //Edit Nutton
    let EditBtn = document.createElement("button");
    let editText = document.createTextNode("Edit");
    EditBtn.appendChild(editText);
    li.appendChild(EditBtn);
    EditBtn.setAttribute("onclick","editItem(this)");
    
    
    //in html we use = innerHTML to insert value;
    //in js we use = appendChiled to insert value;
    list.appendChild(li)
    Input.value=""
    
}
function delTask(){
    list.innerHTML = ""
}
function deleteItem(e){
    //we can get button through "this" parameter:
    // console.log(e)

    //now we have to target "li", here we can see del-button is child of "li" so li is parent of del-button
    e.parentNode.remove();



    // let DelButton = document.createElement("button");
    // console.log(DelButton)
}
function editItem(e){
    let val = e.parentNode.firstChild.nodeValue;
    let editedValue = prompt("ENter value you want to edit", val)
    e.parentNode.firstChild.nodeValue = editedValue;

}
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll( "collection-item").forEach(
        function (list) {
            const item = list.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                list.style.display = "block";
            } else {
                list.style.display = "none";
            }
        }
    );

};