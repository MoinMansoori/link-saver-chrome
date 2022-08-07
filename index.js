let myLeads = []
let inputEl = document.getElementById("input-El")
let ulEl = document.getElementById("ul-El")
const saveBtn = document.getElementById("saveButton")
const deleteBtn = document.getElementById("deleteButton")
const save_Tab = document.getElementById("saveTab")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
    if(leadsFromLocalStorage){
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }

function render(arrays){
    let renArray = ""
    for(let i=0; i < arrays.length; i++){
        renArray += `
            <li>
            <a href=${arrays[i]} target="_blank">${arrays[i]}</a>
            </li>  
             `
    }
    ulEl.innerHTML = renArray
    
    
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})


saveBtn.addEventListener("click", function(){
    //console.log("button Clicked")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))     
    render(myLeads)
    
})
save_Tab.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))     
        render(myLeads)
    })
})


