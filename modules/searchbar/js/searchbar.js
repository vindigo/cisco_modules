/**
 * Represents a searchbar field. Data is pulled from json file.
 *
 * @module searchbar
 * @version 1.0
 * @author Richard Frausto
 * @requires FontAwesome icon library https://fontawesome.com/
 * @example
 * 1. User inputs search text
 * 2. User can scroll up/down using the arrow buttons
 * 3. User selects entry by clicking on the magnifying glass icon on the left.
 *
 * @todo
 * 1. Real data needs to be connected to searchbar for proper testing.
 * 2. Behavior for user selection needs to be writtn. Was not provided.
 */
var searchbar = (function() {

  // cache DOM
  var node = document.querySelector(".searchContainer");
  var searchBtn = node.querySelector("#searchBtn");
  var searchText = node.querySelector("#searchText");
  var searchScrollUp = node.querySelector("#angle-up");
  var searchScrollDown = node.querySelector("#angle-down");
  var searchResults = node.querySelector("#searchResults");
  var currentSelectionIndex, currentSelection;


  // bind events
  searchText.addEventListener( "mousedown", setSearchText );
  searchText.addEventListener( "keyup", handleSearch );
  searchText.addEventListener( "blur", setSearchText );
  searchBtn.addEventListener("click", handleSearchBtn );
  searchScrollUp.addEventListener( "click",  scrollUp );
  searchScrollDown.addEventListener( "click", scrollDown );


  // functions
  function handleSearch(){
    var text = searchText.value.toUpperCase();
    currentSelectionIndex = 0;
    searchResults.innerHTML = "";

    // data is pulled from states.json file
    searchFilter(data, text);

    if ( text ){
      updateSelection(currentSelectionIndex);
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  }

  function searchFilter(obj, text){
    for (var key in obj) {
      var item = obj[key];

      if ( obj.hasOwnProperty(key) && (item.name.toUpperCase().indexOf(text) > -1) ){
        var div = document.createElement("div");
        div.append(item.name);
        searchResults.append(div);
      }
    }
  }

  function updateSelection(n) {
    results = searchResults.querySelectorAll("div");

    if (results.length === 0){ return };

    for (var i = 0; i < results.length; i++){
      results[i].classList.remove("selected");
    }

    if ( n < 0 ) { n = 0 };
    if ( n > results.length - 1) { n = results.length - 1};

    results[n].classList.toggle("selected");
    currentSelection = results[n].innerHTML;
    currentSelectionIndex = Array.prototype.indexOf.call(results, results[n]);

  }

  function setSearchText() {
    var searchText = "How can we help?"
    if (searchText.value === "") {
      searchText.value = searchText;
      searchText.placeholder = ""
    }

    if (searchText.value === searchText) {
      searchText.value = "";
      searchText.placeholder = searchText;
    }
  }

  function scrollUp() {
    currentSelectionIndex = currentSelectionIndex - 1;
    updateSelection(currentSelectionIndex);
  }

  function scrollDown() {
    currentSelectionIndex = currentSelectionIndex + 1;
    updateSelection(currentSelectionIndex);
  }

  function handleSearchBtn() {
    console.log("search clicked");
    alert( currentSelection + " submitted.");

    // Code can be added here to handle selection. Requirements were not
    // provided at the time of writing this module.
  }

})();
