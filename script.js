let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " đã được thêm vào giỏ hàng!");
}

function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");
  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p>${item.name} - ${item.price.toLocaleString()}đ 
      <button onclick="removeItem(${index})">❌</button></p>`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  totalDiv.textContent = "Tổng: " + total.toLocaleString() + "đ";
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }
  alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng 🐾");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.onload = displayCart;
