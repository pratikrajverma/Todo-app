const input = document.querySelector("[input-data]");
const list= document.querySelector("li");




 
input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter" && input.value!=="")
    {
               maketodo();
               input.value=""; 

    }


})



function maketodo()
{
    const task = document.createElement("p");
    task.innerHTML = `   ${input.value} <button><i class="fa-solid fa-xmark"></i></button>  `;
    list.append(task);

 
    task.addEventListener('click',()=>{
        task.classList.toggle('active');
    })

    task.querySelector("button").addEventListener('click',()=>{
        task.remove();

    })
 
}
