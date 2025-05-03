import {AbstractControl, ValidationErrors}  from "@angular/forms";

export function nameValidator(control: AbstractControl): ValidationErrors | null  {

    const name = control.value as string;
    if(name !== name.toUpperCase()){
        control.setValue(name.toUpperCase());
        console.log("Name is not in uppercase, converting to uppercase: " + name.toUpperCase());
    } else{
        return {nameValidator: true};
    }
    return null;
}


export function urlValidator(control: AbstractControl): ValidationErrors | null {
   const extns = ['.com', '.net', '.org', '.io'];
    const url = control.value as string;
    if(!url.startsWith('https://')){
        return {valid: true};
    }
    
    const hasExtns = extns.some(extn => url.includes(extn));
    if(!hasExtns){
        return {valid: true};
    }


    return null
}