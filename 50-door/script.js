let doors = [];
let persons = [1, 2, 3, 4, 5];
let index = 0;
let close = 0;
let open = 0;
for (let i = 1; i <= 50; i++) {
  doors.push(0);
}

for (let i = 1; i <= 5; i++) {
  let table = [];
  for (let k = 1; k <= 10; k++) {
    table.push(i * k);
  }
  //   document.write(table + "<br>");
  table.forEach((e) => {
    if (doors[e - 1] == 0) {
      doors[e - 1] = 1;
    } else {
      doors[e - 1] = 0;
    }
  });
  table = [];
}

index = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(doors[index] + " ");
    index++;
  }
  document.write("<br>");
}

doors.forEach((e) => {
  if (e == 0) {
    close++;
  } else {
    open++;
  }
});

document.write("Open : " + open + "<br>");
document.write("Close : " + close);