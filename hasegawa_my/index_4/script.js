const animationTargetElements =document.querySelectorAll(".textAnimation");

for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement =animationTargetElements[i]
    console.log(targetElement)
            texts =targetElement.textContent,
            textsArray =[];

            targetElement.textContent ="";
            for (let j = 0; j <texts.split("").length; j++) {
                const t =texts.split("")[j]

                if(t===" "){
                    textsArray.push(" ");
                }else{
                textsArray.push('<span><span style="animation-delay: '+((j*0.1)+.3)+'s;">'+t+'</span></span>')
                }
            }
            for (let k = 0; k < textsArray.length; k++) {
                targetElement.innerHTML+= textsArray[k];
                
            }
            console.log(textsArray)
  
}