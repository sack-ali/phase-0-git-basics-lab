const jsdom = require( 'jsdom' );
const path = require( 'path' );
var chai = require( 'chai' );
chai.use( require( 'chai-fs' ) );

describe( 'this lab', () => {

  it( 'has a folder named my-repository', () => {
    chai.assert.isDirectory( './my-repository', 'no folder name "my-repository" was found' );
  } )

  it( 'has a valid git repository initialized for the my-repository folder', () => {
    chai.assert.isDirectory( './my-repository/.git', 'no ".git" folder was found within "/my-repository, used "git init" to initialize' );
  } )

  it( 'has a README.md file in the my-repository folder', () => {
    chai.assert.pathExists( './my-repository/README.md', 'no README.md file found within "/my-repository"' );
  } )

} )

describe( 'the local repository', () => {

  it( 'has README.md as a tracked file', () => {
    chai.assert.pathExists( './my-repository/.git/index', 'no files are being tracked.  Use "git add ." to track all files in this repo' );
  } )

  it( 'has at least one commit', () => {
    chai.assert.isDirectory( './my-repository/.git/logs', 'no commits were found.  Use "git commit -m" followed by a message to create a commit' );
  } )

  it( 'has been pushed up to the remote repository', () => {
    chai.assert.isDirectory( './my-repository/.git/logs/refs/remotes', 'no record of pushing to a remote was found. Follow the instructions on GitHub to connect and push to a new remote repository' );
  } )

} )

function distanceFromHqİnFeet (pickuplocation) {
  const  distanceFromHqİnBlock = 42 ;
    const numberofblock = pickuplocation - distanceFromHqİnBlock;
    console.log(numberofblock)
    const unitconvert = numberofblock * 264 
    console.log(unitconvert)
  
  }
  distanceFromHqİnFeet(72)
  
  function calculateFarePrices(start, destination) {
    const netLocation = destination - start;
    const netLocationFeet = netLocation * 264
    let price = netLocation * 2;
  
    if (netLocation === 400) {
      price = 0;
    } else if (netLocationFeet > 400) {
      price = (netLocationFeet - 400) * 2 + 400;
    }
  
    return price;
  }
  
  console.log(calculateFarePrices(42, 72)); 

function cats() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};


const employee = {
  name: "sakarie",
  street: "gül cadd"
};

let infoUpdate = {...employee, position: "secretary"};

infoUpdate.country = "somaliland";

delete infoUpdate.street;
const {position, ...newEmployee}  = employee;
console.log(infoUpdate);
console.log(newEmployee);



function thanksBirthday(names, messages) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const message = messages[i];
    console.log(`Thank you, ${name}! ${message}`);
  }
}
const names = ['kishi', 'halit', 'maher'];
const messages = ['Your support means a lot to us.', 'thanks for beutiful birthday gift!', 'Thanks for birthday wishes.'];
sendThanks(names, messages);


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countDown(10);




  