 // JavaScript code for handling CRUD operations
        // You can use AJAX requests or any other method to communicate with a backend

        // Sample data
        let categories = [];

        let products = [];

        // Function to populate category select options
        function populateCategories() {
            const select = document.getElementById("categorySelect");
            select.innerHTML = "";
            categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category.id;
                option.textContent = category.name;
                select.appendChild(option);
               
            });
        }

        // Function to render product list
        function renderProductList() {
            const productList = document.getElementById("productList");
            productList.innerHTML = "";
            products.forEach(product => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>
                        <button onclick="editProduct(${product.id})">Edit</button>
                        <button onclick="deleteProduct(${product.name})">Delete</button>
                    </td>
                `;
                productList.appendChild(tr);
                
                

        
                
            });
            

        }
        

        // Function to add a new category
            document.addEventListener("submit", function(event) {
            event.preventDefault();
            const categoryName = document.getElementById("categoryName").value;
            if (categoryName) {
                const categoryId = categories.length + 1; // Generate unique ID (ideally from backend)
                categories.push({ id: categoryId, name: categoryName });
                populateCategories();
            }
        });

        // Function to add a new product

        document.getElementById("addProductBtn").addEventListener("click", function(event) {
            event.preventDefault();
            const productName = document.getElementById("productName").value;
            const categoryId = document.getElementById("categorySelect").value;
            if (productName && categoryId) {
                const productId = products.length + 1; // Generate unique ID (ideally from backend)
                products.push({ id: productId, name: productName, categoryId: parseInt(categoryId) });
                renderProductList();

            }
           document.getElementById('productName').value='';
           document.getElementById('categoryName').value='';
        });

        // Function to edit a product
        function editProduct(id) {
    
           var product =  products.find(rec=>rec.id===id);
           var category= categories.find(rec=>rec.id===id);
            document.getElementById("categoryName").value=product.name;
            document.getElementById("productName").value=category.name;

        }
        function update(){
            
        }

        // Function to delete a product
        function deleteProduct(productId) {
            // Your delete logic here
            products = products.filter(product => product.id !== productId);
            renderProductList();
        }

        // Initial population
        populateCategories();
        renderProductList();

        