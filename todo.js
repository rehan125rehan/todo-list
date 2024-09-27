

let todolist =[
     {item: 'buy milk ',
     duedate:'4/10/2023' }  ,
     { item:'go to college',
     duedate:'4/10/2023'}];
displayitem();

function addtodo()
{
 let inputelement = document.querySelector('#addtodo');
 let dateelement = document.querySelector('#tododate');
 let todoitem =inputelement.value;
 let dateitem =dateelement.value;
 todolist.push({item:todoitem,duedate:dateitem});
 inputelement.value ='';
 dateelement.value ='';


 displayitem();
}

function displayitem() {
    let containerelement = document.querySelector('#todo-container');

    let newHtml ='';
   
    for( let i=0; i< todolist.length; i++)
        {  
            let item = todolist[i].item;
            let duedate = todolist[i].duedate;
            newHtml += `
            <div>
            <span> ${item}</span> 
            <span> ${duedate}</span> 
            <button onclick="
            todolist.splice(${i},1);
            displayitem();
            ">Delete</button>
            </div>
            `;

            
        }
        containerelement.innerHTML = newHtml;
}