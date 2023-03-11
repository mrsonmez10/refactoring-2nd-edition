// Example: Using Local Variables
/*
 * Yerel değişkenlerle ilgili en kolay durum, kullanıldıkları 
 * ancak yeniden atanmadıkları durumdur.
 * Bu durumda, bunları parametre olarak aktarabilirim
 */

function printOwing(invoice) {
  let outstanding = 0;
  printBanner();
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  recordDueDate(clock, invoice); //.
  printDetails(invoice, outstanding, console); //.
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

function recordDueDate(clock, invoice) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
