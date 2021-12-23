let inputTask =document.querySelector('#input-task');
let taskAdd =document.querySelector('#add-task-button');
let ul =document.querySelector('#task-list');
let deleteBtn =document.querySelectorAll('.delete-btn');

taskAdd.addEventListener('click',function(){
    let item = document.createElement('li');
    let itemText = document.createTextNode(inputTask.value);

    let checks = document.createElement('input');
    checks.type = 'checkbox'
    let spans = document.createElement('span');
    spans.className = 'task'
    spans.appendChild(itemText)
    let deleteItem = document.createElement('button');
    deleteItem.className = 'delete-btn';
    deleteItem.type = 'button';
    deleteItem.appendChild(document.createTextNode('X'))
    deleteItem.addEventListener('click', function(){
        deleteItem.parentElement.remove();
    })

    item.appendChild(checks);
    item.appendChild(spans);
    item.appendChild(deleteItem);
    ul.appendChild(item);
    

    inputTask.value = "";
});

function removeList(){
    for(let i=0;i<deleteBtn.length;i++){
        deleteBtn[i].addEventListener('click',function(e){
            e.currentTarget.parentNode.remove();
        });
    }
}
removeList();

ul.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.className.toggle(checked);
    }

});


