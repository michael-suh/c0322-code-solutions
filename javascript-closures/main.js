function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical: ', medicalSchool('Dan Abramov'));
console.log('Lawyer: ', lawSchool('Ryan Florence'));
