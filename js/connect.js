
function focusInput(labelid, inputid){
    let labelvar=document.getElementById(labelid);
    let inputvar=document.getElementById(inputid);

    if (inputvar.value!=""){
       
        if ( labelvar.className.match(/(?:^|\s)label-cs-input(?!\S)/) ){                    
            labelvar.className= "label-cs-input-focus Voice-of-the-Highlanders";
            inputvar.className="cs-input-focus form-control form-control-lg";            
        }   
    }
    else{       
        if ( labelvar.className.match(/(?:^|\s)label-cs-input-focus(?!\S)/) ){            
            labelvar.className= "label-cs-input-focus Voice-of-the-Highlanders";    
            inputvar.className="cs-input form-control form-control-lg";
        }   
        else{
            labelvar.className = "label-cs-input Voice-of-the-Highlanders";
        }
}
}
