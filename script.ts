const toggleButton=document.getElementById(`togglebutton`) as HTMLButtonElement|null;
const SkillsDiv = document.getElementById(`skills`) as HTMLDivElement|null;

if (toggleButton && SkillsDiv ){
toggleButton.addEventListener (`click`,() =>{
    if(SkillsDiv?.style.display ===`non`){
    SkillsDiv.style.display =`block`;
    toggleButton.value ="Hide skills";    

    } else{
        SkillsDiv.style.display =`none`;
        toggleButton.value = "show skills";
    }
});
}
else {
    console.log("required element not found in the DOM");
}
























