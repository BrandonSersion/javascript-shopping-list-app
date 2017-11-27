var i = 0;
var items = [];
var prices = [];
var total = 0;

function getGroceryItem() {
  items[i] = document.getElementById("name").value;
  prices[i] = document.getElementById("price").value;
  addGroceryItem(items[i], prices[i]);
  updateTotal(prices[i]);
  i++;
  document.getElementById("myForm").reset();
}

function addGroceryItem(nam, pri) {
  var table = document.getElementById("itemTable");
  var row = table.insertRow(i+1);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  cell1.innerHTML = items[i];
  cell2.innerHTML = prices[i];
}

function updateTotal(pri) {
  total = (total + parseInt(pri));
  var footer = document.getElementById("totalPrice");
  footer.innerHTML = total;

}

$(document).ready(function() {
  $('#btn').click(getGroceryItem);
});
