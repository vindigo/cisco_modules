var util = (function() {

  function getData(file, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        callback(JSON.parse(request.responseText));
      }
    };

    request.open("GET", file, true);
    request.send();
  }

  function parseData(data) {
    

    // var searchResults = document.querySelector("#searchResults");
    // var ul = document.createElement("ul");
    // var content;
    //
    // content = data.map(function(obj){
    //   var div = document.createElement("div");
    //   div.append(obj.name);
    //   searchResults.append(div);
    // });

  }

  return {
    getData: getData,
    parseData: parseData
  }
})();
