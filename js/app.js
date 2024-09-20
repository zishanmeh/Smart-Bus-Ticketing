const seatElement = document.getElementById("selected-seat");
const totalBookedElement = document.getElementById("total-booked");
const available_seat = document.getElementById("available-seat");
const total_price_element = document.getElementById("total-price");
const cupon_input_element = document.getElementById("cupon-input-field");
const cupon_btn = document.getElementById("cupon-btn");
let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {
  if (document.getElementById("no-seat-booked")) {
    seatElement.removeChild(document.getElementById("no-seat-booked"));
  }
  //   check for double click
  if (selectedSeat.includes(event.innerText)) {
    alert("You can't select this seat another time");
    return;
  } else if (selectedSeat.length < 4) {
    // Add booking in booking section

    seatElement.innerHTML += `
  <li class="text-base font-normal flex justify-between">
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </li>`;
    event.classList.add("bg-primary");
    event.classList.add("text-white");
    selectedSeat.push(event.innerText);
    totalBookedElement.innerText = selectedSeat.length;
    //   Decrease available seat
    const available_seat_value = parseInt(available_seat.innerText);
    const new_available_seat_value = available_seat_value - 1;
    available_seat.innerText = new_available_seat_value;
    //   Update total price
    totalPrice += 550;
    total_price_element.innerText = totalPrice.toFixed(2);

    //   Active cupon button

    if (selectedSeat.length > 3) {
      cupon_input_element.removeAttribute("disabled");
      cupon_btn.removeAttribute("disabled");
    }
  } else {
    return alert("Maximum seat booked");
  }
}
