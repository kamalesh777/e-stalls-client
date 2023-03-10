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
