import {Invoice} from "./classes/Invoice.js"

const inv1 = new Invoice("mario", "Work on the mario website", 250);
const inv2 = new Invoice("luigi", "Work on the luigi website", 300);

let invoices:Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

//inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});