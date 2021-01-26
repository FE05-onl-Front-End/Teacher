// *****
// ****
// ***
// **
// *

const star = "*";
let stars = "";
for (let i = 1; i < 8; i++) {
    for(let j = i; j < 8; j++) {
        stars += star;
    }
    console.log(`${stars}\n`);
    stars = "";
}

// *
// **
// ***
// ****
// *****
// ******

const star = "*";
let stars = "";
const count = 8;
for (let i = count; i > 0; i--) {
    for(let j = count + 1 - i; j > 0; j--) {
        stars += star;
    }
    console.log(`${stars}\n`);
    stars = ""; 
}