let money = 434205000000;
const moneyDisplay = document.getElementById("moneyDisplay");
const receiptItems = document.getElementById("receiptItems");
const productsGrid = document.getElementById("productsGrid");

// Product data (Sorted by price)
const products = [
    { name: "بيتزا كاري", price: 50, img: "./assets/pizza-carree.jpg", alt: "square_pizza" },
    { name: "صاندوش كارانطيطا", price: 70, img: "./assets/karan.jpg", alt: "sandwich" },
    { name: "1 كغ موز", price: 700, img: "./assets/banane.jpg", alt: "bananas" },
    { name: "بيتزا هيشام كوك", price: 1500, img: "./assets/pizza_hcook.png", alt: "hcook_pizza" },
    { name: "فيستا imperméable", price: 2000, img: "./assets/veste_imp.jpg", alt: "jacket" },
    { name: "هاتف حطبة", price: 5000, img: "./assets/tel_hatba.jpg", alt: "nokia_phone" },
    { name: "دراجة هوائية عادية", price: 12000, img: "./assets/velo27.jpeg", alt: "bicycle" },
    { name: "قط جزائري", price: 20000, img: "./assets/cat_35000.jpeg", alt: "cat" },
    { name: "درون DJI Mini 2", price: 53600, img: "./assets/drone.jpeg", alt: "drone" },
    { name: "كاراكو عاصمي", price: 80000, img: "./assets/karakou.jpg", alt: "karakou" },
    { name: "خاتم تاع دهب", price: 100000, img: "./assets/bague.jpg", alt: "gold_ring" },
    { name: "TN", price: 12000, img: "./assets/TN.jpg", alt: "gold_ring" },
    { name: "جهاز بلايستيشن 5", price: 134000, img: "./assets/ps5.jpg", alt: "playstation_5" },
    { name: "قشابية تقليدية", price: 150000, img: "./assets/kachabiya.jpg", alt: "kachabiya" },
    { name: "آيفون 16 برو ماكس", price: 450000, img: "./assets/iphone16.jpg", alt: "iphone_16" },
    { name: " حج", price: 800000, img: "./assets/haj.jpg", alt: "hajj" },
    { name: "سيارة ماروتي", price: 1000000, img: "./assets/maruti.jpeg", alt: "maruti_car" },
    { name: "مهر تلمساني", price: 1000000, img: "./assets/chedda.jpg", alt: "mahr" },
    { name: "جت سكي ياماها", price: 1072000, img: "./assets/jet-ski.jpg", alt: "jet_ski" },
    { name: "حصان عربي أصيل", price: 2680000, img: "./assets/horse.jpg", alt: "horse" },
    { name: "سيارة بيجو 406", price: 4000000, img: "./assets/406.jpg", alt: "peugeot_406" },
    { name: "تسلا مودل 3", price: 10591200, img: "./assets/tesla_model3.jpeg", alt: "tesla_model3" },
    { name: "تسلا سايبرتراك", price: 19197600, img: "./assets/tesla_cybertruck.jpeg", alt: "tesla_cybertruck" },
    { name: "شقة في حيدرة F3", price: 25000000, img: "./assets/studio_hydra.jpg", alt: "apartment" },
    { name: "سيارة فيراري F8 تريبوتو", price: 45000000, img: "./assets/ferrari-1.jpeg", alt: "ferrari" },
    { name: "يوسف بلايلي - موسم واحد", price: 72000000, img: "./assets/Youcef_Belaili.jpg", alt: "belaili" },
    { name: " اخراج مسلسل عاشور العاشر", price: 300000000, img: "./assets/achour10.jpg", alt: "achour" },
    { name: "ياخت فاخر", price: 402000000, img: "./assets/yacht.jpg", alt: "yacht" },
    { name: "سيارة فورميلا وان", price: 1340000000, img: "./assets/formula-1-car.jpg", alt: "f1_car" },
    { name: "مروحية أباتشي", price: 4020000000, img: "./assets/apache-helicopter.jpg", alt: "Apache Helicopter" },
    { name: "نادي ريال مدريد", price: 4690000000, img: "./assets/real_madrid.png", alt: "real_madrid" },
    { name: "لوحة موناليزا", price: 10720000000, img: "./assets/mona-lisa.jpg", alt: "mona_lisa" },
    { name: "بوينغ 747", price: 26800000000, img: "./assets/boeing-747.jpg", alt: "boeing-747" },
];

// Function to generate product cards
function displayProducts() {
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-content">
                <img src="${product.img}" alt="${product.alt}" class="product-img">
                <h2 class="card-title">${product.name}</h2>
                <p class="price" data-price="${product.price}">DZD ${product.price.toLocaleString()}</p>
                <div class="controls">
                    <button class="btn btn-outline sell-btn">Sell</button>
                    <input type="number" class="input-number" value="0" min="0" readonly>
                    <button class="btn btn-primary buy-btn">Buy</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Event listener for buy/sell buttons
productsGrid.addEventListener("click", function(event) {
    const target = event.target;
    const card = target.closest(".card");
    if (!card) return;

    const priceElement = card.querySelector(".price");
    const price = parseInt(priceElement.getAttribute("data-price"));
    const quantityInput = card.querySelector(".input-number");
    const productName = card.querySelector(".card-title").textContent;

    let actionPerformed = false;

    if (target.classList.contains("buy-btn")) {
        if (money >= price) {
            money -= price;
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateReceipt(productName, price, "buy");
            actionPerformed = true;
        } else {
            alert("Not enough money to buy this item!");
        }
    } else if (target.classList.contains("sell-btn")) {
        if (parseInt(quantityInput.value) > 0) {
            money += price;
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateReceipt(productName, price, "sell");
            actionPerformed = true;
        }
    }

    // Only animate if an actual buy or sell action was performed
    if (actionPerformed) {
        animateMoneyDisplay();
    }
});

// Function to animate money display
function animateMoneyDisplay() {
    const oldMoney = parseInt(moneyDisplay.textContent.replace(/[^0-9]/g, ""));
    const startMoney = isNaN(oldMoney) ? money : oldMoney;
    const step = (money - startMoney) / 20;
    let current = startMoney;
    let count = 0;
    
    // Determine if money is increasing or decreasing
    const isIncreasing = money > startMoney;
    
    // Add visual class based on whether money is increasing or decreasing
    moneyDisplay.classList.add(isIncreasing ? 'money-increase' : 'money-decrease');
    
    // Add a bounce effect
    moneyDisplay.classList.add('money-bounce');
    
    // Create and add indicator element
    const indicator = document.createElement('span');
    indicator.className = isIncreasing ? 'money-indicator-up' : 'money-indicator-down';
    indicator.textContent = isIncreasing ? '↑' : '↓';
    indicator.style.position = 'absolute';
    indicator.style.right = '10px';
    indicator.style.fontSize = '2rem';
    indicator.style.opacity = '0';
    indicator.style.transition = 'opacity 0.3s, transform 0.5s';
    moneyDisplay.style.position = 'relative';
    moneyDisplay.appendChild(indicator);
    
    // Show the indicator with animation
    setTimeout(() => {
        indicator.style.opacity = '1';
        indicator.style.transform = isIncreasing ? 'translateY(-10px)' : 'translateY(10px)';
    }, 50);

    const interval = setInterval(() => {
        count++;
        current += step;
        
        // Store the indicator before updating text
        if (indicator.parentNode === moneyDisplay) {
            moneyDisplay.removeChild(indicator);
        }
        
        // Update the text content
        moneyDisplay.textContent = `DZD ${Math.floor(current).toLocaleString()}`;
        
        // Add the indicator back
        moneyDisplay.appendChild(indicator);
        
        if (count >= 20) {
            clearInterval(interval);
            
            // Store the indicator before final update
            if (indicator.parentNode === moneyDisplay) {
                moneyDisplay.removeChild(indicator);
            }
            
            // Make sure we end with the exact value
            moneyDisplay.textContent = `DZD ${money.toLocaleString()}`;
            
            // Add the indicator back for final display
            moneyDisplay.appendChild(indicator);
            
            // Remove classes and indicator after animation completes
            setTimeout(() => {
                moneyDisplay.classList.remove('money-increase', 'money-decrease', 'money-bounce');
                if (indicator && indicator.parentNode) {
                    indicator.parentNode.removeChild(indicator);
                }
            }, 500);
        }
    }, 25);
}

// Function to update the receipt
function updateReceipt(product, price, action) {
    const receiptTotalElement = document.getElementById("receiptTotal");
    const receiptTimestampElement = document.getElementById("receiptTimestamp");
    const receiptEmptyElement = document.getElementById("receiptEmpty");
    let overallTotal = 0;

    // Check if the product already exists in the receipt
    const existingItem = Array.from(receiptItems.children)
        .filter(item => !item.classList.contains("receipt-empty"))
        .find(item => item.dataset.product === product);

    if (existingItem) {
        const quantitySpan = existingItem.querySelector(".quantity");
        const totalSpan = existingItem.querySelector(".total");

        let quantity = parseInt(quantitySpan.textContent);
        quantity += action === "buy" ? 1 : -1;

        if (quantity === 0) {
            // Remove the item if the quantity is zero
            receiptItems.removeChild(existingItem);
        } else {
            // Update the quantity and total
            const itemTotal = quantity * price;
            quantitySpan.textContent = quantity;
            totalSpan.textContent = `DZD ${itemTotal.toLocaleString()}`;
        }
    } else if (action === "buy") {
        // Add a new item if it's a new purchase
        const item = document.createElement("div");
        item.className = "receipt-item";
        item.dataset.product = product;
        const itemTotal = price; // Initial total for a single item

        item.innerHTML = `
            <span class="product-name">${product}</span>
            <span class="quantity">${1}</span>
            <span class="total">DZD ${itemTotal.toLocaleString()}</span>
        `;
        receiptItems.appendChild(item);
    }

    // Recalculate overall total
    Array.from(receiptItems.children)
        .filter(item => !item.classList.contains("receipt-empty"))
        .forEach(item => {
            const totalText = item.querySelector(".total").textContent;
            const itemTotal = parseInt(totalText.replace(/[^0-9]/g, ""));
            if (!isNaN(itemTotal)) {
                overallTotal += itemTotal;
            }
        });

    // Show/hide empty message
    const hasItems = receiptItems.querySelector(".receipt-item") !== null;
    if (hasItems) {
        receiptEmptyElement.style.display = "none";
    } else {
        receiptEmptyElement.style.display = "block";
    }

    // Update the overall total display
    if (overallTotal > 0) {
        receiptTotalElement.innerHTML = `
            <span>Total Cost:</span>
            <span>DZD ${overallTotal.toLocaleString()}</span>
        `;
        // Update timestamp
        updateTimestamp();
    } else {
        receiptTotalElement.innerHTML = ""; // Clear total if receipt is empty
        receiptTimestampElement.innerHTML = ""; // Clear timestamp if receipt is empty
    }
}

// Function to update timestamp
function updateTimestamp() {
    const receiptTimestampElement = document.getElementById("receiptTimestamp");
    const now = new Date();
    
    // Format the date in a locale-friendly way
    const dateOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const formattedDate = now.toLocaleDateString('ar-DZ', dateOptions);
    receiptTimestampElement.textContent = `${formattedDate}`;
}

// Initial display of products
displayProducts();

// Initial formatting of money display
moneyDisplay.textContent = `DZD ${money.toLocaleString()}`;

// Initial setup of the receipt empty state
document.getElementById("receiptTotal").innerHTML = "";
document.getElementById("receiptTimestamp").innerHTML = ""; 

// Add an intersection observer to detect when the money section becomes sticky
const moneySection = document.querySelector('.money-section');
const profileSection = document.querySelector('.profile-section');

if (moneySection && profileSection) {
    const observer = new IntersectionObserver(
        ([e]) => {
            if (e.intersectionRatio < 1) {
                moneySection.classList.add('is-sticky');
            } else {
                moneySection.classList.remove('is-sticky');
            }
        }, 
        { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
    );
    
    observer.observe(moneySection);
} 