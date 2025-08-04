if (window.location.pathname === "/") {
  // NOTE: This check is intended to prevent script execution in non-production environments such as 'about:blank' or 'file://' URLs.
  // It helps avoid unintended behavior during deployment. Disabling this condition when testing locally or using browser DevTools is recommended. Sera Altuner.

  const style = document.createElement("style");
  style.innerHTML = `
    body {
        margin: 0;
        font-family: Roboto, sans-serif;       
        background-color: #fff;
        width: 100%;
        overflow-x: hidden;
    } 

        main {
        padding: 20px;
    }

    nav {
        position: relative;
        background-color: #0092DB;
        color: white;
        height: 1.6em;
        padding: 0.9375em 1.25em;
        display: flex;
        align-items: center;
    }

    nav .brand {
        position: absolute;    
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
        font-size: 18px;
        top: 50%;             
        transform: translate(-50%, -50%);
    }

    nav .nav-links {
        margin-left: auto;
        display: flex;
        gap: 2.5em;
    }

    nav .nav-links a {
        color: white;
        text-decoration: none;
    }

    .nav-links img {
        width: 1em;
        height: 1em;
    }

    header {
        background-color: white;
        color: white;
        padding: 2.5em 2.5em;
        margin-bottom: 5%;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        height: 4.3em;
        text-align: left;
        gap: 2.5em;
    }

    .logo-image {
        height: 6.25em;
        margin-left: 2.5em; 
        margin-top: -2em; 
    }

    .search-bar {
        position: absolute;
        margin-left: 18em;
        margin-top: -1.5em;
        max-width: 93.75em;
        width: 37.5em;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 62.4375em; 
        overflow: hidden;
        background: #EBF6FC;
        box-shadow: none; 
        flex-shrink: 0;
        height: 3.125em; 
        padding: 0 1em; 
    }

    .search-bar input {
        flex-grow: 1;
        border: none;
        padding: 0.875em 1em;
        font-size: 1em;
        outline: none;
        height: 100%;
        background: transparent; 
        color: #333;
    } 

    .search-bar input::placeholder {
        color: #999; 
        position: absolute;

    } 

    .search-bar .icon {
        font-size: 2.5rem;
        color: #0092DB; 
        flex-shrink: 0;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: -9em; 
        margin-top: -3em; 
        margin-right: 6em; 
    }

    .circle-icon {
        border: 1px solid #d0eaff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0092DB;
        cursor: pointer;
        font-size: 30px;
        background-color: #fff;
    }

    .circle-icon:hover {
        background-color: #EAF4FC; 
    }

    .login-button {
        border: 1px solid #d0eaff;
        border-radius: 20px;
        padding: 16px 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        color: #0092DB;
        background-color: #fff;
        cursor: pointer;
    }

    .cart-button {
        background-color: #EBF6FC;
        border-radius: 999px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: bold;
        color: #0092DB;
        cursor: pointer;
        font-size: 14px;
    }

    .cart-button:hover {
        background-color: #0092DB;  
        color: #fff; 
    }
        
    .navigation {
        margin-top:-8.5em ;
        margin-left: 7.0690em;
        display: flex;
        align-items: center;
        gap: 4.5em;
        padding-bottom: 80px;
        font-size: 15px;
        font-weight: 600;
    }

    .navigation .gray {
        cursor: pointer;
        color: #7D7D7D;
    }

    .navigation .blue {
        color: #0092DB;
        cursor: pointer;
    }

    .navigation .orange {
        color: #F7941D;
        cursor: pointer;
    }

    .navigation .right-buttons {
        margin-left: auto;
        display: flex;
        gap: 1em;
    } 

    .nav-btn {
        display: flex;
        align-items: center;
        gap: 0.5em; 
        background-color: transparent;
        border: none;
        color: #0092DB;
        padding: 0.4em 1em;
        border-radius: 20px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .nav-btn img {
        width: 20px;   
        height: 20px;
    }

    .chevron {
        font-size: 1em;
        vertical-align: middle;
        display: inline-block;
        margin-top: -7px;
        transform: translateY(-1px);
    } 

    .ad-container {
        background: #743D04;
        margin: 0 auto 20px auto;
        max-width: 100%;
        height: 570px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        padding: 30px 24px;
        position: relative;
        top: -20px;
        z-index: 1;
        margin-bottom: 20px;
    }

    .ad-categories{
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
        font-size: 14px;
        color: white;
    }

    .ad-image{
        height: relative;
        width: 80%;
        margin-top: 20px;
        display: block;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        margin:30px auto 0 auto;
    }

    .back-icon{
        border: 1px solid #d0eaff;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F7941D;
        cursor: pointer;
        font-size: 18px;
        background-color: #fff;
        margin-top: 40px;
        margin-left: 80px;
    }

    .story-container {
        background: #fff;
        margin: 0 auto 20px auto;
        max-width: 100%;
        height: 8em;
        padding: 30px 24px;
        position: relative;
        top: -20px;
        z-index: 1;
    }

    .story-circles {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        margin: 32px 0;
    }

    .story-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #c2bcbcff;
        border: 3px solid #F7941D;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        
    footer {
        background-color: #F2FAFE;
        color: #0091D5;
        text-align: center;
        padding: 15px;
        position: static;
        bottom: unset;
        width: 100%;
    }

    .categories {
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        user-select: none;
        background-color: transparent;
        transition: background-color 0.3s ease;
        box-sizing: border-box;
        outline: none;
    }
        
    .categories.active {
        background-color: #FEF6EB;
        color: #F48E00;
        height: 2em;
        display: flex;
        align-items: center; 
        padding-left: 1em; 
    }

    body {
        margin: 0;
        font-family: Roboto, sans-serif;       
        background-color: #fff;
    }

    .carousel-peach-bg {
        margin-top: 100px;
        width: 90%;
        border-radius: 40% 40% 0 0;
        margin: 0em auto;
        position: relative;
        z-index: 0;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .carousel-container {
        background: transparent;
        width: 93%;
        max-width: 1600px;
        height: 50%;
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
        
    .carousel-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
    }

    .carousel-title {
        border-radius: 2em 2em 0  0;
        text-align: left;
        margin-left: 0;
        background: #FEF6EB;
        height: 5.2em;
        padding: 0 2em; 
        margin: 0em;
        width: 100%;
        box-sizing: border-box;
    }

    .carousel-header {
        font-size: 1.5rem;
        font-weight: bold;
        color: #F28E00;
    }
        
    .carousel {
        display: flex;
        overflow-x: auto;
        gap: 0.3120em; 
        width: 100%;
        box-sizing: border-box;
        scrollbar-width: none;     
        -ms-overflow-style: none;  
    }

    .carousel::-webkit-scrollbar {
        display: none;            
    }
        
    .product-card {
        margin-top: 1.5em;
        background: #fff;
        border-radius: 0.9375em;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
        padding: 1.25em;
        flex: 0 0 20%;
        max-width: 19.7%;
        position: relative; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow 0.2s;
        border: 1.5px solid #F3F3F3;
        min-height: 35.625em;
        box-sizing: border-box;
    }

    .product-card:hover {
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.12);
        border:3px solid #F7941D;
    }

    .product-card .heart-circle {
        position: absolute;
        top: 0.75em;
        right: 0.75em;
        background: #fff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        cursor: pointer;
        font-size: 1.875rem;
        color: #F7941D;
        border: 1.5px solid #eee;
        transition: background 0.2s;
    }

    .heart-circle.favorited {
        color: #F7941D;
        background: #fff7ef;
        border: 1.5px solid #F7941D;
    }

    .product-card img {
        width: 100%;
        height: 11.875em;
        object-fit: contain;
        border-radius: 0.75em;
        background: #fff;
        margin-bottom: 0.75em;
        margin-top: 0px;
        cursor: pointer;
    }

    .product-card .video-badge {
        display: inline-block;
        background: #686868;
        color: #fff;
        font-size: 0.5625rem;
        border-radius: 0.5em;
        padding: 0.1875em 0.5625em;
        margin-bottom: 2.8125em;
        margin-top: 0.125em;
    }

    .product-card .brand {
        font-weight: bold;
        color: #7D7D7D;
        font-size: 0.9rem;
        margin-bottom: 0.125em;
        margin-top: 0.9375em;
        display: inline;
    }

    .product-card .product-title {
        color: #7D7D7D;
        font-size: 0.9rem;
        margin-bottom: 0;
        margin-left: 0.125em;
        margin-top: 0.9375em;
        display: inline;
    }

    .product-card .rating-row {
        position: absolute;
        margin-top: 20.625em;
        display: flex;
        align-items: center;
        gap: 0.125em;
    }

    .product-card .star {
        color: #FED100;
        font-size: 1.125rem;
        margin-right: 0.0625em;
    }

    .product-card .rating-count {
        color: #7D7D7D;
        font-size: 0.9375rem;
        margin-left: 0.25em;
    }

    .product-card .original-price {
        text-decoration: line-through;
        color: #7D7D7D;
        font-size: 1.1rem;
        margin-right: 0.25em ;
    }

    .product-card .discount::after {
        content: '';
        display: inline-block;
        width: 1.125em;
        height: 1.125em;
        background: url('data:image/svg+xml;utf8,<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="%2316B364"/><path d="M13.5 6.75l-4.125 4.5L6.75 9.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat center center;
        vertical-align: middle;
        margin-left: 0.125em;
    }

    .product-card .price {
        position: absolute;
        font-weight: bold;
        font-size: 1.6rem;
        margin-right: 0.375em;
        margin-top: 400px;
        min-height: 32px;
    }

    .price.green {
      color: #16B364;
    }

    .price.gray {
      color: #7D7D7D;
    }

    .product-card .price-row {
        position: absolute;
        margin-top: 370px;
        display: flex;
        align-items: baseline;
        gap: 8px;
    }

     .product-card .discount {
        color: #16B364;
        font-size: 1.1rem;
        font-weight: bold;
        margin-left: 2px;
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .product-card .add-to-cart-btn {
        position: absolute;
        bottom: 20px; 
        left: 20px;
        right: 20px;
        background: #FFF6EB;
        color: #F28E00;
        font-weight: bold;
        font-size: 1rem;
        border: none;
        border-radius: 24px;
        padding: 16px 0;
        cursor: pointer;
        transition: background 0.2s;
    }   

    .product-card .add-to-cart-btn:hover {
        background: #F28E00;
        color: white;
    }

    .carousel-btn.left {
        width: 3.125em;
        height: 3.125em;
        background-color: #FFF6EB;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .carousel-btn.left span {
        color: #F28E00;
        font-size: 32px;
    }

    .carousel-btn.right {
        width: 3.125em;
        height: 3.125em;
        background-color: #FFF6EB;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .carousel-btn.right span {
        color: #F28E00;
        font-size: 32px;
    } 

    .advertisement {
        height: relative;
        width: 90%;
        display: block;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        margin:30px auto 30px auto;
    }

    .login-button-wrapper {
        position: relative;
        display: inline-block;
    }
        
    .login-button {
        border: 1px solid #d0eaff;
        border-radius: 20px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        color: #0092DB;
        background-color: #fff;
        cursor: pointer;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        min-width: 300px;
        z-index: 10;
        border-radius: 16px;
        overflow: hidden;
        font-family: 'Roboto', sans-serif;
        padding: 1.25rem 0;
    }

    .header-btn {
        background-color: #ff9800;
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: 0.85em 1em;
        font-size: 0.95rem;
        margin: 0 auto 1rem auto;
        width: 80%;
        border-radius: 30px;
        display: block;
        cursor: pointer;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding: 0.75em 1.5em;
        cursor: pointer;
        width: 80%;
        font-size: 0.95rem;
        color: #333;
        transition: background-color 0.3s ease;
    }

    .menu-item:hover {
        background-color: #f5f5f5;
    }

    .icon {
        color: #00a0ff;
        font-size: 1.25rem;
        margin-right: 1em;
    }

    .label {
        flex: 1;
        color: #333;
        font-weight: 500;
    }

    .arrow {
        color: #aaa;
        font-size: 1rem;
    }
        
    .dropdown-menu div {
        padding: 0.75em 1em;
        cursor: pointer;
        font-size: 0.875rem;
        color: #333;
    }

    .dropdown-menu div:hover {
        background-color: #f5f5f5;
    }

    .login-button-wrapper:hover .dropdown-menu {
        display: block;
    }
        
`;
  document.head.appendChild(style);

  //Blue Navbar at the Top
  const nav = document.createElement("nav");

  const brand = document.createElement("div");
  brand.className = "brand";
  brand.innerText = "Tüm Kitaplarda 4 Al 3 Öde!";

  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";

  const navItems = [
    {
      text: "Yardım",
      icon: "https://cdn05.e-bebek.com/media/c/yardim-logo.png",
    },
    {
      text: "İletişim",
      icon: "https://cdn05.e-bebek.com/media/c/iletisim-logo.png",
    },
    {
      text: "Satıcı Başvuru",
      icon: "",
    },
  ];

  navItems.forEach(({ text, icon }) => {
    const link = document.createElement("a");
    link.href = "#";

    if (icon) {
      const img = document.createElement("img");
      img.src = icon;
      img.alt = text;
      img.style.width = "16px";
      img.style.height = "16px";
      img.style.marginRight = "6px";
      img.style.verticalAlign = "middle";
      link.appendChild(img);
    }

    link.appendChild(document.createTextNode(text));
    navLinks.appendChild(link);
  });

  nav.appendChild(brand);
  nav.appendChild(navLinks);
  document.body.appendChild(nav);

  // Header with Logo
  const header = document.createElement("header");

  const logoImg = document.createElement("img");
  logoImg.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGIdabY1Vvwn8x7ohvpu71_Nkw9zgOC1nTkV4goKEtRG1dZG-1Jc4LXf-OFXKymd-1zY&usqp=CAU";
  logoImg.alt = "EBEBEK Logo";
  logoImg.className = "logo-image";

  // Search bar
  const searchBar = document.createElement("form");
  searchBar.className = "search-bar";

  const searchIcon = document.createElement("div");
  searchIcon.className = "icon";

  const img = document.createElement("img");
  img.src = "https://www.e-bebek.com/assets/svg/search-normal.svg";
  img.alt = "Search";

  const searchInput = document.createElement("input");
  searchInput.className = "input";
  searchInput.type = "search";
  searchInput.placeholder = "Kategori, marka veya ürün ara";
  searchInput.name = "search";

  searchIcon.appendChild(img);
  searchBar.appendChild(searchIcon);
  searchBar.appendChild(searchInput);
  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchInput.value}`);
  });

  // Right buttons
  const headerRight = document.createElement("div");
  headerRight.className = "header-right";

  // Heart icon
  const heartIcon = document.createElement("div");
  heartIcon.className = "circle-icon";
  heartIcon.innerHTML = "♡";

  // Login button
  const loginBtn = document.createElement("div");
  loginBtn.className = "login-button-wrapper";
  loginBtn.innerHTML = `
  <div class="login-button">👤 Hesabım</div>
  <div class="dropdown-menu">
  <div class="header-btn">Giriş Yap / Hesap Oluştur</div>
  <div class="menu-item">
    <span class="icon">📦</span>
    <span class="label">Siparişlerim</span>
    <span class="arrow">→</span>
  </div>
  <div class="menu-item">
    <span class="icon">✅</span>
    <span class="label">Mesajlarım</span>
    <span class="arrow">→</span>
  </div>
  <div class="menu-item">
    <span class="icon">👍</span>
    <span class="label">Değerlendirmelerim</span>
    <span class="arrow">→</span>
  </div>
  <div class="menu-item">
    <span class="icon">❤️</span>
    <span class="label">Listelerim</span>
    <span class="arrow">→</span>
  </div>
  <div class="menu-item">
    <span class="icon">🎁</span>
    <span class="label">Hediye Çeklerim</span>
    <span class="arrow">→</span>
  </div>
</div>

`;

  // Cart button
  const cartBtn = document.createElement("div");
  cartBtn.className = "cart-button";
  cartBtn.innerHTML = "🛒 SEPETİM";

  headerRight.appendChild(heartIcon);
  headerRight.appendChild(loginBtn);
  headerRight.appendChild(cartBtn);
  header.appendChild(logoImg);
  header.appendChild(searchBar);
  header.appendChild(headerRight);

  document.body.appendChild(header);

  // Rotating Categories Container
  const navigation = document.createElement("div");
  navigation.className = "navigation";
  navigation.innerHTML = `
  <span class="gray">Kategoriler  <span class="chevron">&#x2304;</span> </span>
  <span class="gray">Keşfet <span class="chevron">&#x2304;</span></span>
  <span class="gray">Hediye <span class="chevron">&#x2304;</span></span>
  <span class="blue">İnternete Özel Ürünler</span>
  <span class="orange">Kampanyalar</span>
  <span class="orange">Outlet</span>

 <div class="right-buttons">
  <button class="nav-btn">
    <img src="https://cdn05.e-bebek.com/media/c/siparisim-nerede-logo.png" alt="Siparişim Icon" />
    Siparişim Nerede
  </button>
  <button class="nav-btn">
    <img src="https://cdn05.e-bebek.com/media/c/enyakin-ebebek-logo.png" alt="E-bebek Icon" />
    En Yakın E-bebek
  </button>
</div>

`;
  document.body.appendChild(navigation);

  const containerBelowHeader = document.createElement("div");
  containerBelowHeader.className = "ad-container";
  containerBelowHeader.innerHTML = `
  <div class="ad-categories">
    <span class="categories">HAFTA SONU FIRSATI!</span>
    <span class="categories">TEKSTİL</span>
    <span class="categories">ARAÇ GEREÇ</span>
    <span class="categories">BEZ&MENDİL</span>
    <span class="categories">BAKIM&TEMİZLİK</span>
    <span class="categories">PERŞEMBEDEN PAZARA</span>
    <span class="categories">KAMPANYALAR</span>
    <span class="categories">KEŞFET</span>
    <span class="categories">DUYURU</span>
  </div>
`;

  const adImg = document.createElement("img");
  adImg.alt = "Ad Image";
  adImg.className = "ad-image";
  containerBelowHeader.appendChild(adImg);

  //Background and Advirtisement Image Changes Based on the Category Selected
  const categoryStyles = {
    "HAFTA SONU FIRSATI!": {
      bgColor: "#4F70DB",
      img: "https://cdn05.e-bebek.com/media/c/oyuncak-0108d.jpg",
    },
    TEKSTİL: {
      bgColor: "#743D04",
      img: "https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-tum-indirimlere-ek-sepette-net-50-ye-varan-indirim-internete-ozel-0108d.jpg",
    },
    "ARAÇ GEREÇ": {
      bgColor: "#1CA0F7",
      img: "https://cdn05.e-bebek.com/media/c/tekfiyat-0108-d.jpg",
    },
    "BEZ&MENDİL": {
      bgColor: "#005D9B",
      img: "https://cdn05.e-bebek.com/media/c/molfix-bebek-bezlerinde-25e-varan-indirim-30-07-des.jpg",
    },
    "BAKIM&TEMİZLİK": {
      bgColor: "#2D70AE",
      img: "https://cdn05.e-bebek.com/media/c/internete-ozel-tum-weleda-urunlerinde-net-20-indirim0308d.jpg",
    },
    "PERŞEMBEDEN PAZARA": {
      bgColor: "#0093DA",
      img: "https://cdn05.e-bebek.com/media/c/tum-baby-me-markali-islak-mendil-ve-pamuklarda-2urune-sepette-net-50-indirim-30-07-des.jpg",
    },
    KAMPANYALAR: {
      bgColor: "#524E83",
      img: "https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-3-al-2-odeye-ek-34999-tl-yerine-24999-tl-0108-d.jpg",
    },
    KEŞFET: {
      bgColor: "#7D1703",
      img: "https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-30-07-des.jpg",
    },
    DUYURU: {
      bgColor: "#1D93D0",
      img: "https://cdn05.e-bebek.com/media/c/superbrands0207d.jpg",
    },
  };

  containerBelowHeader.style.backgroundColor =
    categoryStyles["HAFTA SONU FIRSATI!"].bgColor;
  adImg.src = categoryStyles["HAFTA SONU FIRSATI!"].img;

  const categoriesContainer =
    containerBelowHeader.querySelector(".ad-categories");

  const initialActive = categoriesContainer.querySelector("span.categories");
  initialActive.classList.add("active");

  categoriesContainer.addEventListener("click", (event) => {
    const clicked = event.target;

    if (clicked.classList.contains("categories")) {
      categoriesContainer.querySelectorAll(".categories").forEach((span) => {
        span.classList.remove("active");
      });

      clicked.classList.add("active");

      const catText = clicked.textContent.trim();

      if (categoryStyles[catText]) {
        containerBelowHeader.style.backgroundColor =
          categoryStyles[catText].bgColor;
        adImg.src = categoryStyles[catText].img;
      } else {
        containerBelowHeader.style.backgroundColor = "transparent";
        adImg.src = "";
      }
    }
  });

  document.body.appendChild(containerBelowHeader);

  // Story Contaoner
  const containerStory = document.createElement("div");
  containerStory.className = "story-container";
  containerStory.innerHTML = `
    
    <div class="story-circles">
        <div class="story-circle"></div>
        <div class="story-circle"></div>
        <div class="story-circle"></div>
        <div class="story-circle"></div>
    </div>
    
`;
  document.body.appendChild(containerStory);

  // Product Carousel Container
  (async function () {
    const peachBg = document.createElement("div");
    peachBg.className = "carousel-peach-bg";

    const carouselWrapper = document.createElement("div");
    carouselWrapper.className = "carousel-wrapper";

    const leftBtn = document.createElement("button");
    leftBtn.className = "carousel-btn left";
    leftBtn.innerHTML = `<span class="material-symbols-outlined"><</span>`;

    const rightBtn = document.createElement("button");
    rightBtn.className = "carousel-btn right";
    rightBtn.innerHTML = `<span class="material-symbols-outlined">></span>`;

    document.body.appendChild(leftBtn);
    document.body.appendChild(rightBtn);

    const container = document.createElement("div");
    container.className = "carousel-container";
    container.innerHTML = `
  <div class="carousel-title">
    <h2 class="carousel-header">Sizin için Seçtiklerimiz</h2>
  </div>
  <div class="carousel"></div>
`;

    carouselWrapper.appendChild(leftBtn);
    carouselWrapper.appendChild(container);
    carouselWrapper.appendChild(rightBtn);
    peachBg.appendChild(carouselWrapper);
    document.body.appendChild(peachBg);

    const carousel = container.querySelector(".carousel");

    leftBtn.onclick = () => {
      carousel.scrollBy({ left: -256, behavior: "smooth" });
    };
    rightBtn.onclick = () => {
      carousel.scrollBy({ left: 256, behavior: "smooth" });
    };

    // Memory operations
    const memoryStorage = {};

    // Localstorage access with fallback to memoryStorage
    function safeGetItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return memoryStorage[key] || null;
      }
    }
    function safeSetItem(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        memoryStorage[key] = value;
      }
    }

    const PRODUCTS_KEY = "product_list";
    const FAVORITES_KEY = "favorite_products";
    const FAVORITES_FULL_KEY = "favorites_full";

    const getProductList = async () => {
      const cached = safeGetItem(PRODUCTS_KEY);
      if (cached) return JSON.parse(cached);

      //Fetching the products from the provided URL using GET
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
    const setFavorites = (arr) =>
      safeSetItem(FAVORITES_KEY, JSON.stringify(arr));

    const toggleFavorite = (id) => {
      let favs = getFavorites();
      if (favs.includes(id)) favs = favs.filter((x) => x !== id);
      else favs.push(id);
      setFavorites(favs);

      const fullFavorites = products.filter((p) => favs.includes(p.id));
      safeSetItem(FAVORITES_FULL_KEY, JSON.stringify(fullFavorites));
      renderProducts(products);
    };

    const renderProducts = (products) => {
      carousel.innerHTML = "";
      const favs = getFavorites();

      products.forEach((product) => {
        const price = parseFloat(product.price);
        const original = parseFloat(product.original_price);
        const isFav = favs.includes(product.id);
        const hasVideo = product.has_video || true;
        const brand = product.brand;
        const rating = product.rating || 5;
        const ratingCount = product.rating_count || 10;

        const discountPercent =
          original > price
            ? Math.round(((original - price) / original) * 100)
            : 0;

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
      <div class="heart-circle${isFav ? " favorited" : ""}">
        ${isFav ? "♥" : "♡"}
      </div>
      <img src="${product.img}" alt="${product.name}" class="product-image"
           onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=No+Image';">
      ${hasVideo ? `<div class="video-badge">▶ VIDEO</div>` : ""}
      <div>
        <span class="brand">${brand}</span>
        <span class="product-title"> - ${product.name}</span>
      </div>
      <div class="rating-row">
        ${'<span class="star">★</span>'.repeat(Math.round(rating))}
        <span class="rating-count">(${ratingCount})</span>
      </div>
      <div class="price-row">
          ${
            original > price
              ? `<span class="original-price">${original.toLocaleString(
                  "tr-TR",
                  { minimumFractionDigits: 2 }
                )} TL</span>
                 <span class="discount">%${discountPercent}</span>`
              : ""
          }
        </div>
        <div class="price ${original > price ? "green" : "gray"}">
          ${price.toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL
        </div>
      <button class="add-to-cart-btn">Sepete Ekle</button>
    `;

        card.addEventListener("click", (e) => {
          if (
            e.target.closest(".heart-circle") ||
            e.target.closest(".add-to-cart-btn")
          ) {
            return;
          }

          //Redirect user to respective product page upon clicking the card
          const productPageUrl = `https://example.com/product/${product.name}`;
          window.open(productPageUrl, "_blank");
        });

        card.querySelector(".heart-circle").addEventListener("click", (e) => {
          e.stopPropagation();
          toggleFavorite(product.id);
          e.currentTarget.classList.toggle("favorited");
          e.currentTarget.innerHTML = e.currentTarget.classList.contains(
            "favorited"
          )
            ? "♥"
            : "♡";
        });

        carousel.appendChild(card);
      });
    };

    const products = await getProductList();
    renderProducts(products);
  })();

  // Advertisement Container
  const containerAd1 = document.createElement("div");

  const imgAd = document.createElement("img");
  imgAd.className = "advertisement";

  imgAd.src =
    "https://cdn05.e-bebek.com/media/c/aksam-orta-banner-hafta-sonu-firsati-en-cok-sevilen-40-oyuncak-urunde-sepette-40-indirim0308d.jpg";
  imgAd.alt = "Advertisement";

  containerAd1.appendChild(imgAd);
  document.body.appendChild(containerAd1);

  // Website Footer
  const footer = document.createElement("footer");
  footer.innerText = "Sera Altuner";
  document.body.appendChild(footer);
} else {
  console.log("wrong page");
}
