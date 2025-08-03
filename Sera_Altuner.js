// ---------- Inject basic CSS styles ----------
const style = document.createElement("style");
style.innerHTML = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #fff;
    }
    nav {
        position: relative;
        background-color: #0092DB;
        color: white;
        padding: 15px 20px;
        display: flex;
        align-items: center;
    }
    nav .brand {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
        font-size: 18px;
    }
    nav .nav-links {
        margin-left: auto;
        display: flex;
        gap: 40px;
    }
    nav .nav-links a {
        color: white;
        text-decoration: none;
    }
    header {
        background-color: #fff;
        color: white;
        padding: 40px 40px;
        margin-bottom: 5%;
        display: flex;
        align-items: center;
        justify-content: flex-start; /* changed from space-between */
        height: auto;
        text-align: left;
        gap: 40px; /* add spacing between header and search bar */
    }
    .main-header {
        color: black;
        flex: 0 0 auto; /* don't stretch */
        margin-right: 0; /* remove any margin if present */
        display: flex;
        align-items: center;
    }
    .main-header h1 {
        margin-left: 50;
        margin-right: 10;
        font-size: 2.2rem;
        color: black;
        white-space: nowrap;
    }
    .search-bar {
        margin-left: 0;
        max-width: 800px; /* was 600px, now longer */
        width: 500px;     /* add explicit width for consistent length */
        display: flex;
        border: 1.5px solid #4CAF50;
        border-radius: 25px;
        overflow: hidden;
        background: white;
        z-index: 2;
        box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        flex-shrink: 0;
    }
    .search-bar input {
        flex-grow: 1;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        outline: none;
    }
    .search-bar button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 0 20px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    }
    .search-bar button:hover {
        background-color: #45a049;
    }
    main {
        padding: 20px;
    }
   
    .container-below-header {
        background: #fff;
        margin: 0 auto 20px auto;
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        padding: 30px 24px;
        position: relative;
        top: -20px;
        z-index: 1;
    }
    footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 15px;
        position: static;
        bottom: unset;
        width: 100%;
    }
`;
document.head.appendChild(style);

// ---------- Create navbar ----------

//ebebekteki mavi kisim
const nav = document.createElement("nav");

const brand = document.createElement("div");
brand.className = "brand";
brand.innerText = "Tüm Kitaplard 4 Al 3 Öde!";

const navLinks = document.createElement("div"); //yari olursa gorunmemeli
navLinks.className = "nav-links";
["Yardım", "İletişim", "Satıcı Başvuru"].forEach((text) => {
  const link = document.createElement("a");
  link.href = "#";
  link.innerText = text;
  navLinks.appendChild(link);
});

nav.appendChild(brand);
nav.appendChild(navLinks);
document.body.appendChild(nav);

// ---------- Create header ----------
// EBEBEK yazan kisim
const header = document.createElement("header");
header.className = "main-header";
header.innerHTML = `<h1>EBEBEK</h1>`;
document.body.appendChild(header);

// Inject styles for search bar
const searchBarStyle = document.createElement("style");
searchBarStyle.innerHTML = `
  
`;
document.head.appendChild(searchBarStyle);

// Create search bar elements
const searchBar = document.createElement("form");
searchBar.className = "search-bar";

const searchInput = document.createElement("input");
searchInput.className = "input";
searchInput.type = "search";
searchInput.placeholder = "Search...";
searchInput.name = "search";

const searchButton = document.createElement("button");
searchButton.className = "button";
searchButton.type = "submit";
searchButton.innerText = "Go";

// Append input and button to form
searchBar.appendChild(searchInput);
searchBar.appendChild(searchButton);

// Optional: Add event listener for submit
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Searching for: ${searchInput.value}`);
});

// Append search bar to header so it layers over the header
header.appendChild(searchBar);

// ---------- Create container below header ----------
// REKLAM VAR
const containerBelowHeader = document.createElement("div");
containerBelowHeader.className = "container-below-header";
containerBelowHeader.innerHTML = `
  <h2>REKLAM</h2>
  <p>Enjoy exclusive deals and updates right here in our new container section!</p>
`;
document.body.appendChild(containerBelowHeader);

// ---------- Create container below header ----------
// STORY VAR
const containerBelowHeaderStory = document.createElement("div");
containerBelowHeaderStory.className = "container-below-header";
containerBelowHeaderStory.innerHTML = `
  <h2>STORY</h2>
  <p>Enjoy exclusive deals and updates right here in our new container section!</p>
`;
document.body.appendChild(containerBelowHeaderStory);

// ---------- Create container below header ----------
// YENI URUNLER
const containerBelowHeaderNewProducts = document.createElement("div");
containerBelowHeaderNewProducts.className = "container-below-header";
containerBelowHeaderNewProducts.innerHTML = `
  <h2>YENİ ÜRÜNLER</h2>
  <p>Discover the latest additions to our collection!</p>
`;
document.body.appendChild(containerBelowHeaderNewProducts);

// ---------- Create container below header ----------
// COK SATANLAR
const containerBelowHeaderBestSellers = document.createElement("div");
containerBelowHeaderBestSellers.className = "container-below-header";
containerBelowHeaderBestSellers.innerHTML = `
  <h2>ÇOK SATANLAR</h2>
  <p>Check out our best-selling products!</p>
`;
document.body.appendChild(containerBelowHeaderBestSellers);

// ---------- Create container below header ----------
// KAMPANYALAR
const containerBelowHeaderCampaigns = document.createElement("div");
containerBelowHeaderCampaigns.className = "container-below-header";
containerBelowHeaderCampaigns.innerHTML = `
  <h2>KAMPANYALAR</h2>
  <p>Don't miss our current campaigns and discounts!</p>
`;
document.body.appendChild(containerBelowHeaderCampaigns);

// ---------- Create container below header ----------
// BLOG
const containerBelowHeaderBlog = document.createElement("div");
containerBelowHeaderBlog.className = "container-below-header";
containerBelowHeaderBlog.innerHTML = `
  <h2>BLOG</h2>
  <p>Read our latest blog posts and updates!</p>
`;
document.body.appendChild(containerBelowHeaderBlog);

// ---------- Product Carousel Section (async/await version) ----------
(async function () {
  // Basic styling injected
  const style = document.createElement("style");
  style.innerHTML = `
    .container-below-header {
      padding: 20px;
      font-family: sans-serif;
    }
    .carousel {
      display: flex;
      overflow-x: auto;
      gap: 16px;
      padding: 12px 0;
    }
    .product-card {
      border: 1px solid #ccc;
      padding: 12px;
      width: 200px;
      flex: 0 0 auto;
      position: relative;
      background: white;
    }
    .product-card img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    .product-card h4 {
      margin: 8px 0 4px;
      font-size: 16px;
    }
    .product-card .price {
      font-weight: bold;
      color: #e60023;
    }
    .product-card .original-price {
      text-decoration: line-through;
      color: #999;
      margin-right: 4px;
    }
    .product-card .discount {
      color: green;
      font-size: 14px;
    }
    .product-card .heart {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 20px;
      cursor: pointer;
      user-select: none;
    }
  `;
  document.head.appendChild(style);

  // Container setup
  const container = document.createElement("div");
  container.className = "container-below-header";
  container.innerHTML = `
    <h2>Beğenebileceğinizi düşündüklerimiz</h2>
    <div class="carousel"></div>
  `;
  document.body.appendChild(container);

  const carousel = container.querySelector(".carousel");

  // In-memory fallback storage
  const memoryStorage = {};

  // Safe localStorage access helpers
  function safeGetItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      // Fallback to memoryStorage
      return memoryStorage[key] || null;
    }
  }
  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Fallback to memoryStorage
      memoryStorage[key] = value;
    }
  }

  const PRODUCTS_KEY = "product_list";
  const FAVORITES_KEY = "favorite_products";
  const FAVORITES_FULL_KEY = "favorites_full";

  // Product fetch
  const getProductList = async () => {
    const cached = safeGetItem(PRODUCTS_KEY);
    if (cached) return JSON.parse(cached);

    const res = await fetch(
      "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json"
    );
    const data = await res.json();
    safeSetItem(PRODUCTS_KEY, JSON.stringify(data));
    return data;
  };

  const getFavorites = () => {
    const favs = safeGetItem(FAVORITES_KEY);
    return favs ? JSON.parse(favs) : [];
  };
  const setFavorites = (arr) => safeSetItem(FAVORITES_KEY, JSON.stringify(arr));

  const toggleFavorite = (id) => {
    let favs = getFavorites();
    if (favs.includes(id)) favs = favs.filter((x) => x !== id);
    else favs.push(id);
    setFavorites(favs);

    // Store full product objects for favorites
    const fullFavorites = products.filter((p) => favs.includes(p.id));
    safeSetItem(FAVORITES_FULL_KEY, JSON.stringify(fullFavorites));
    console.log("Favorited products:", fullFavorites);

    renderProducts(products); // refresh
  };

  const renderProducts = (products) => {
    carousel.innerHTML = "";
    const favs = getFavorites();

    products.forEach((product) => {
      const price = parseFloat(product.price);
      const original = parseFloat(product.original_price);
      const isFav = favs.includes(product.id);

      // Log image URLs for debugging
      console.log("Product image URL:", product.image);

      const card = document.createElement("div");
      card.className = "product-card";

      const discount =
        original > price
          ? `${Math.round(((original - price) / original) * 100)}% indirim`
          : "";

      card.innerHTML = `
        <img src="${product.img}" alt="${
        product.name
      }" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=No+Image';">
        <h4>${product.name}</h4>
        <div>
          ${
            original > price
              ? `<span class="original-price">${original.toFixed(2)}₺</span>
               <span class="price">${price.toFixed(2)}₺</span>
               <div class="discount">${discount}</div>`
              : `<span class="price">${price.toFixed(2)}₺</span>`
          }
        </div>
        <div class="heart" style="color: ${isFav ? "orange" : "#ccc"};">♥</div>
      `;

      card.querySelector("img").onclick = () =>
        window.open(product.link, "_blank");
      card.querySelector(".heart").onclick = () => toggleFavorite(product.id);

      carousel.appendChild(card);
    });
  };

  const products = await getProductList();
  console.log("Fetched products:", products); // Log the incoming products
  renderProducts(products);
})();
// ---------- Create footer ----------
const footer = document.createElement("footer");
footer.innerText = "© 2025 My JS Site | Built with pure JavaScript";
document.body.appendChild(footer);
