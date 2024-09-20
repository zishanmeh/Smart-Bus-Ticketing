const resisted_user = document.getElementById("registed_user");

const ticket_sold = document.getElementById("solded_ticket");
const rental_partners = document.getElementById("rental_partners");
// For registed User
let user = 0;
const addCount = setInterval(() => {
  user += 500;
  resisted_user.innerText = user;
  if (user > 10000) {
    resisted_user.innerText = `${user / 1000}K+`;
  }
  if (user >= 500000) {
    clearInterval(addCount);
  }
}, 5);
// For ticket sold
let sold = 0;
const showSoldTicket = setInterval(() => {
  sold += 500;
  ticket_sold.innerText = sold;
  if (sold > 1000) {
    ticket_sold.innerText = `${(sold / 100000).toFixed(1)}Laks+`;
  }
  if (sold >= 170000) {
    clearInterval(showSoldTicket);
  }
}, 10);
// For rental
let rental = 0;
const showRental = setInterval(() => {
  rental += 500;
  rental_partners.innerText = rental;
  if (rental > 1000) {
    rental_partners.innerText = `${rental / 1000}K+`;
  }
  if (rental >= 80000) {
    clearInterval(showRental);
  }
}, 30);
