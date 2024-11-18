// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv;
const sliced = args.slice(2); // retrieving values from the command line

const alarm = function (numbers) {
  for (let items of numbers) {
    const delay = Number(items); //Number converts items to a number
    if (!isNaN(delay) && delay > 0) { // making sure delay is a positive number

      setTimeout(() => {
        process.stdout.write("\x07"); // beep 
      }, delay * 1000); // 
      }
    }
  };

alarm(sliced); 

