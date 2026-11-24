var expenses = [];

function addExpense() {
  var name = document.getElementById("name").value;
  var amount = document.getElementById("amount").value;
  var category = document.getElementById("category").value;
  if (name.trim() == "" || amount == "" || amount <= 0) {
    document.getElementById("error").innerText = "Enter valid name and amount!";
    return;
  }
  document.getElementById("error").innerText = "";
  expenses.push({ name: name, amount: Number(amount), category: category });
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  show();
}

function show() {
  var list = document.getElementById("list");
  var filter = document.getElementById("filter").value;
  var total = 0;
  list.innerHTML = "";
  for (var i = 0; i < expenses.length; i++) {
    var e = expenses[i];
    if (filter == "All" || filter == e.category) {
      list.innerHTML += "<li>" + e.name + " - Rs " + e.amount + " (" + e.category + ") <button class='del' onclick='del(" + i + ")'>Delete</button></li>";
      total += e.amount;
    }
  }
  document.getElementById("total").innerText = total;
}

function del(i) {
  expenses.splice(i, 1);
  show();
}