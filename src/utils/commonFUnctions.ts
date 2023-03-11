export const getBase64 = (file, cb) => { //eslint-disable-line
  const reader = new FileReader()
  if (!!file) {
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error) //eslint-disable-line
    }
  }
}

export const randomKeyGenerator = (letter: number): string => (Math.random() + 1).toString(36).substring(letter)

// Merge Array of Object without duplicate data
export const mergeObject = (original, newdata, selector = 'key'): Array<Record<string, unknown>> => {
  newdata.forEach(data => {
    const foundIndex = original.findIndex(ori => ori[selector] == data[selector])
    if (foundIndex >= 0) original.splice(foundIndex, 1, data)
    else original.push(data)
  })
  return original
}

/* 
duplicate object will be delete  
if its true then the old object will show and if false then duplicate but the current data will show
use case: distinct(data, ['id'], false)
checking for id and data for all data and false used to show changes data or new data
*/
export const distinct = (arr, indexedKeys, isPrioritizeFormer = true): Array<Record<string, unknown>> => {
  const lookup = new Map()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const makeIndex = el => indexedKeys.reduce((index, key) => `${index};;${el && el[key]}`, '')
  arr.forEach(el => {
    const index = makeIndex(el)
    if (lookup.has(index) && isPrioritizeFormer) {
      return
    }
    lookup.set(index, el)
  })

  return Array.from(lookup.values())
}
