export type FieldValidatorType = (value: string) => string | undefined


export const required: FieldValidatorType = (value) =>
{ 
    if(value) return undefined
    return 'Fields is required';

   
}

export const maxLenghtCreator = (maxLenght: number): FieldValidatorType => (value) => {
if (value.length > maxLenght) return `Max lengrh is ${maxLenght} symvols`;
return undefined;
}


