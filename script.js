  const inputBtn= document.getElementById("input-btn")
  let myLeads = [];
  const inputEl = document.getElementById("input-el")
  const ulEl = document.getElementById("ul-el") 
  var leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
      console.log(leadsFromLocalStorage)
  if(leadsFromLocalStorage){
        myLeads=leadsFromLocalStorage
        renderLeads()
  }
  inputBtn.addEventListener("click", function(){
       myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
       renderLeads()
      console.log(localStorage.getItem("myLeads"))
     })
  function renderLeads(){
      var listItems =""
      for(let i=0; i < myLeads.length; i++){
      listItems += 
      `<li>
              <a target='_blank' href='${myLeads[i]}'>
              ${myLeads[i]}
              </a>   
      </li>`
      // tried annother method
      /* const li= document.createElement("li")
      li.textContent= myLeads[i]
      ulEl.append(li) */
      }
      ulEl.innerHTML=listItems
      }