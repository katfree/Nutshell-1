const APIManager = {
  grabtheTasks: function () {
    return fetch().then(response => response.json())
  }
}