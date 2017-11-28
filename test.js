choice = ""
"1, 2, 3, 4, 5".split(', ').forEach((option) => {
    choice += `<option>${ option }</option>`
  })
console.log(choice)