const config = require('./../config')
const store = require('./../store')

const createListItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createListItem
}
