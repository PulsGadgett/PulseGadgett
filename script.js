// نمایش محصولات
function displayProducts(productsArray) {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    
    // چک کردن اگر المنت وجود دارد
    if (!grid) {
        console.error('المنت productsGrid پیدا نشد!');
        return;
    }
    
    grid.innerHTML = '';
    
    if (productsArray.length === 0) {
        if (noProducts) noProducts.style.display = 'block';
        return;
    }
    
    if (noProducts) noProducts.style.display = 'none';
    
    productsArray.forEach(product => {
        const productCard = `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image" onclick="goToProduct(${product.id})" style="cursor: pointer;">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${!product.available ? '<div class="product-badge">ناموجود</div>' : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name" onclick="goToProduct(${product.id})" style="cursor: pointer;">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-code">کد: ${product.code}</p>
                    <p class="product-price">${product.price}</p>
                    <span class="product-availability ${product.available ? 'in-stock' : 'out-of-stock'}">
                        ${product.available ? '✅ موجود' : '❌ ناموجود'}
                    </span>
                    <button class="view-details-btn" onclick="goToProduct(${product.id})">مشاهده جزئیات</button>
                </div>
            </div>
        `;
        grid.innerHTML += productCard;
    });
}

// فیلتر محصولات بر اساس دسته‌بندی
function filterProducts(category) {
    // آپدیت دکمه‌های فعال
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// جستجوی محصولات
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// جستجو با Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// رفتن به صفحه محصول
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// بارگذاری اولیه - با تاخیر برای اطمینان از لود شدن products
document.addEventListener('DOMContentLoaded', function() {
    console.log('صفحه لود شد');
    console.log('تعداد محصولات:', products ? products.length : 'تعریف نشده');
    
    // کمی تاخیر برای اطمینان از لود شدن products
    setTimeout(() => {
        if (products && products.length > 0) {
            displayProducts(products);
        } else {
            console.error('محصولات تعریف نشده یا خالی هستند!');
            // تست با داده نمونه
            const testProducts = [
                {
                    id: 1,
                    name: "محصول تست",
                    price: "۱۰۰,۰۰۰ تومان",
                    image: "https://via.placeholder.com/300x200/667eea/ffffff?text=تست",
                    category: "اسپیکر",
                    code: "TEST-001",
                    available: true,
                    description: "این یک محصول تست است"
                }
            ];
            displayProducts(testProducts);
        }
    }, 100);
});