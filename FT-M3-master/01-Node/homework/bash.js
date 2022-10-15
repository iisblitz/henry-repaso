const commands = require ('./commands/index');

const print = (output) => {
    process.stdout.write(output);
    process.stdout.write('/nprompt >');
};

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  let args = data.toString().trim().split(""); // remueve la nueva línea
  let cmd=args.shift();
 if(commands[cmd]){
    commands[cmd](args)
  }else{print('command not found')}
});
