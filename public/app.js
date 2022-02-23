const me = {
    name: "Hank",
    age: 28,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
let someone;
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice("mario", "Work on the mario website", 250);
const inv2 = new Invoice("luigi", "Work on the luigi website", 300);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
