function addExpense() {
	// Get the input values from the form
	let dateValue = document.getElementById("date").value;
	let descriptionValue = document.getElementById("description").value;
	let categoryValue = document.getElementById("category").value;
	let amountValue = parseFloat(document.getElementById("amount").value); // parse the string as a float
  
	// Create a new row and cells for the table
	let tBody = document.querySelector("tbody");
	let addRow = tBody.insertRow();
  
	let dateCell = addRow.insertCell();
	let descriptionCell = addRow.insertCell();
	let categoryCell = addRow.insertCell();
	let amountCell = addRow.insertCell();
  
	// Populate the new row with the input values
	dateCell.textContent = dateValue;
	descriptionCell.textContent = descriptionValue;
	categoryCell.textContent = categoryValue;
	amountCell.textContent = `RM${amountValue.toFixed(2)}`; // format as currency

	// Update the total expenses
	updateTotal();
}
  
function updateTotal() {
	let total = 0;
	
	// Get all the amount elements in the table
	const amountElements = document.querySelectorAll("tbody td:last-child");
	
	// Loop through the amount elements and add up their values
	amountElements.forEach((element) => {
		const amountText = element.textContent.replace("RM", "").trim();
		const amountValue = parseFloat(amountText);
		if (!isNaN(amountValue)) {
		total += amountValue;
		}
	});
	
	// Update the total element with the calculated total
	const totalElement = document.querySelector(".total");
	totalElement.textContent = "RM" + total;
	}