//declaring the variable user name
let userName = '';
//Creating a ternary
userName ? console.log(`Hello ${userName}!`): console.log('Hello');
const userQuestion ='Would i ever be rich?';
console.log(`The user asked: ${userQuestion}`);
//generating a random number between 0 and 7.
const randomNumber = Math.floor(Math.random() * 8);
//declaring the variable Eight balls
let eightBall = '';
// creating a control flow using switch
switch (randomNumber) {
      case 0:
          eightBall = 'It is certain';
          break;
      case 1:
           eightBall = 'It is decidedly so';
           break;
        case 2:
          eightBall = 'Reply hazy try again';
          break;
      case 3:
           eightBall = 'Cannot predict now';
           break;   
       case 4:
          eightBall = 'Do not count on it';
          break;
      case 5:
           eightBall = 'My sources say no';
           break;          
       case 6:
          eightBall = 'Outlook not so good';
          break;
      case 7:
           eightBall = 'Signs point to yes';
           break;
}
console.log(`The Eight ball predicts: ${eightBall} `);
