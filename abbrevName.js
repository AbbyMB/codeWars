//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.
//It should look like this:
//Sam Harris => S.H
//Patrick Feeney => P.F

function abbrevName(name){
  let nameArray = name.split(' ');
  let firstInitial = nameArray[0][0].toUpperCase();
  let lastInitial = nameArray[1][0].toUpperCase();
  let initials = `${firstInitial}` + '.' + `${lastInitial}`
  return initials
}

//Alternative solution

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
