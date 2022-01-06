

export const required = (value) =>
{ 
    if(value) return undefined
    return 'Fields is required';

   
}

export const maxLenghtCreator = (maxLenght) => (value) => {
if (value.length > maxLenght) return `Max lengrh is ${maxLenght} symvols`;
return undefined;
}


