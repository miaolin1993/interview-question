let res = ''

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= i; j++) {
    res += `${j} * ${i} = ${i * j > 9 ? i * j : ` ${i * j}`}    `
  }
  res += '\n'
}
console.log(res)