var user = prompt("What is your name?").toUpperCase();

switch(user) {
  case 'Jack':
    var hungry = true;
    var tired = true;

    if (hungry && tired) {
      console.log("Hi Jack! Want something to eat?");
    } else {
      console.log("Hi Jack! How are you?");
    }
    //console.log("Hi Jack!");
  break;

  case 'Jill':
    var bored = false;
    var busy = true;

    if (bored || busy) {
      console.log("Hi Jill. Any plans today?");
    } else {
      console.log("Hi Jill. Are you busy?");
    }
    //console.log("Hi Jill!");
  break;

  case 'Sarah':
    console.log("Hi Sarah!");
  break;
  default:
    console.log("Seriously what is your name?");
}
