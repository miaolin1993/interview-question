const list1 = [3, 5, 4, 2, 1, 8, 6, 15, 110, 7, 69]

function quickSort(list) {
  if (list.length < 2) return list
  const base = list[0]
  const min = list.slice(1).filter(val => val <= base)
  const max = list.slice(1).filter(val => val > base)
  return quickSort(min).concat(base).concat(quickSort(max))
}

console.log(quickSort(list1))