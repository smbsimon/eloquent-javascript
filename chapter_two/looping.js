// solution one
var hash = '#';

for (var counter = 1; counter <= 8; counter++)
  console.log(Array(counter).join(hash));


// solution two, from book
for (var line = '#'; line.length < 8; line += '#')
  console.log(line)
