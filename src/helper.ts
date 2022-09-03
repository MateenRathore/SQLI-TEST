export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const truncate = (input: string) => input.length > 80 ? `${input.substring(0, 80)}...` : input;

export const formateDate = (milisecond : string) =>{
    let today = new Date(milisecond);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return  mm + '/' + dd + '/' + yyyy;
}

export const removeDuplicates = (originalArray : any, prop : string) => {
    let newArray = [];
    let lookupObject : any  = {};

    for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
