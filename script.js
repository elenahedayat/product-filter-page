const products = [
  {
  id: 1,
  name: "Classic Silver",
  category: "classic",
  strap: "stainless",
  color: "silver",
  price: 129,
  oldPrice: 149,
  rating: 4.8,
  reviews: "2.4k",
  sold: "18k",
  badge: "SALE",
  badgeText: "15% OFF",
  image: "images/p1.png",
  label: "Timeless Classic"
},
{
  id: 2,
  name: "Aurelia Gold",
  category: "classic",
  strap: "stainless",
  color: "gold",
  price: 159,
  oldPrice: null,
  rating: 4.7,
  reviews: "1.8k",
  sold: "12k",
  badge: null,
  badgeText: "",
  image: "images/p2.png",
  label: "Elegant Gold Finish"
},
{
  id: 3,
  name: "Noir Leather",
  category: "classic",
  strap: "leather",
  color: "black",
  price: 145,
  oldPrice: 165,
  rating: 4.9,
  reviews: "3.1k",
  sold: "25k",
  badge: "BEST",
  badgeText: "BEST SELLER",
  image: "images/p3.png",
  label: "Premium Leather"
},
{
  id: 4,
  name: "Heritage Brown",
  category: "classic",
  strap: "leather",
  color: "brown",
  price: 139,
  oldPrice: null,
  rating: 4.6,
  reviews: "1.5k",
  sold: "11k",
  badge: null,
  badgeText: "",
  image: "images/p4.png",
  label: "Vintage Leather"
},
{
  id: 5,
  name: "Nova S1",
  category: "smart",
  strap: "silicone",
  color: "black",
  price: 199,
  oldPrice: 229,
  rating: 4.8,
  reviews: "4.6k",
  sold: "38k",
  badge: "SALE",
  badgeText: "13% OFF",
  image: "images/p5.png",
  label: "Smart Everyday Watch"
},
{
  id: 6,
  name: "Nova S2",
  category: "smart",
  strap: "stainless",
  color: "silver",
  price: 229,
  oldPrice: null,
  rating: 4.7,
  reviews: "2.9k",
  sold: "21k",
  badge: "NEW",
  badgeText: "NEW",
  image: "images/p6.png",
  label: "Connected Lifestyle"
},
{
  id: 7,
  name: "Pulse Sport",
  category: "sport",
  strap: "silicone",
  color: "black",
  price: 89,
  oldPrice: 109,
  rating: 4.5,
  reviews: "2.2k",
  sold: "17k",
  badge: "SALE",
  badgeText: "18% OFF",
  image: "images/p7.png",
  label: "Built for Motion"
},
{
  id: 8,
  name: "Obsidian",
  category: "luxury",
  strap: "stainless",
  color: "black",
  price: 490,
  oldPrice: null,
  rating: 4.9,
  reviews: "1.2k",
  sold: "7k",
  badge: "PREMIUM",
  badgeText: "PREMIUM",
  image: "images/p8.png",
  label: "Luxury Black Edition"
},
{
  id: 9,
  name: "Imperial Gold",
  category: "luxury",
  strap: "stainless",
  color: "gold",
  price: 550,
  oldPrice: null,
  rating: 4.9,
  reviews: "980",
  sold: "5k",
  badge: "EXCLUSIVE",
  badgeText: "EXCLUSIVE",
  image: "images/p9.png",
  label: "Luxury Gold Edition"
},
{
  id: 10,
  name: "Chrono Steel",
  category: "chronograph",
  strap: "stainless",
  color: "silver",
  price: 279,
  oldPrice: 320,
  rating: 4.7,
  reviews: "2.1k",
  sold: "15k",
  badge: "SALE",
  badgeText: "13% OFF",
  image: "images/p10.png",
  label: "Precision Chronograph"
},
{
  id: 11,
  name: "Chrono Black",
  category: "chronograph",
  strap: "stainless",
  color: "black",
  price: 299,
  oldPrice: null,
  rating: 4.8,
  reviews: "1.7k",
  sold: "13k",
  badge: null,
  badgeText: "",
  image: "images/p11.png",
  label: "Bold Chronograph"
},
{
  id: 12,
  name: "Classic Heritage",
  category: "classic",
  strap: "leather",
  color: "gold",
  price: 179,
  oldPrice: 199,
  rating: 4.6,
  reviews: "1.3k",
  sold: "9k",
  badge: "SALE",
  badgeText: "10% OFF",
  image: "images/p12.png",
  label: "Classic Leather Edition"
}
];
const productsEl = document.getElementById("product");
const empty = document.getElementById("empty");
const resultCount = document.querySelector(".number-resault");
const filterForm = document.querySelector(".sidebar form");
const sort = document.getElementById("sort");
const sidebar = document.getElementById("sidebar");
const filterToggle = document.getElementById("filter-toggle");
const closeFilter = document.getElementById("close-filter");
const overlay = document.getElementById("overlay");

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});

function getChecked(name) {
    return [...filterForm.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
}

function matchesPrice(product, selected) {
    if (selected.length === 0) {
        return true;
    }
    if (selected.includes("under-100")) {
        if (product.price < 100) return true;
    }
    if (selected.includes("100-199")) {
        if (product.price >= 100 && product.price <= 199) return true;
    }
    if (selected.includes("200-399")) {
        if (product.price >= 200 && product.price <= 399) return true;
    }
    if (selected.includes("Over-400")) {
        if (product.price > 400) return true;
    }
    return false;
}

// function filterProducts(){
//     return products.filter(p => )
// }
function filterProducts() {
  const categories = getChecked("category");
  const straps = getChecked("strap");
  const colors = getChecked("color");
  const prices = getChecked("price");
  return products.filter((p) => {return (
      (categories.length === 0 || categories.includes(p.category)) &&
      (straps.length === 0 || straps.includes(p.strap)) &&
      (colors.length === 0 || colors.includes(p.color)) &&
      matchesPrice(p, prices)
    );
  });
}


function sortProducts(list) {
  const value = sort.value;
  const sorted = [...list];
  if (value === "low") {
    sorted.sort(function(a, b) {
      return a.price - b.price;
    });
  }
  if (value === "high") {
    sorted.sort(function(a, b) {
      return b.price - a.price;
    });
  }
  return sorted;
}

function render(list) {
  productsEl.innerHTML = "";
  if (list.length === 0) {
    empty.hidden = false;
    resultCount.textContent = "0 Result";
    return;
  }
  empty.hidden = true;
  resultCount.textContent = `${list.length} Result`;
  list.forEach(function(p) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
    <div class="card-image">

        ${p.badge ? `
            <span class="badge ${p.badge.toLowerCase()}">
                ${p.badgeText}
            </span>
        ` : ""}

        <img src="${p.image}" alt="${p.name}" loading="lazy">
    </div>

    <div class="card-body">
        <span class="category-label">${p.label}</span>
        <h3>${p.name}</h3>
        <div class="rating">
            <span class="stars">★</span>
            <span>${p.rating}</span>
            <span>(${p.reviews} Reviews)</span>
        </div>
        <div class="price-row">
            <span class="price">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `
                <span class="old-price">
                    $${p.oldPrice.toFixed(2)}
                </span>
            ` : ""}
            <span class="sold">${p.sold} Sold</span>
        </div>
        <button type="button" class="add-btn">
            Add to Cart
        </button>
    </div>`;
    productsEl.append(card);
  });
}

function update() {
  const filtered = filterProducts();
  const sorted = sortProducts(filtered);
  render(sorted);
}
filterForm.addEventListener("change", update);
sort.addEventListener("change", update);
filterToggle.addEventListener("click", function() {
  sidebar.classList.add("open");
  overlay.hidden = false;
  filterToggle.setAttribute("aria-expanded", "true");
});

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.hidden = true;
  filterToggle.setAttribute("aria-expanded", "false");
}

closeFilter.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
update();
