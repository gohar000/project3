
  
    function addFields() {
      var container = document.getElementById("container");
      var newRow = document.createElement("div");
      newRow.innerHTML = `
        <div>
          </br>
          <label for="product-name"></label>
          <input type="text" name="product-name[]" placeholder="enter product name"class="product-name" required>
        </div>
        </br>
        <div>
          <label for="product-quantity"></label>
          <input type="number" name="product-quantity[]" placeholder="enter product name" class="product-quantity" required>
        </div>
        </br>
        <div>
          <label for="product-price"></label>
          <input type="number" name="product-price[]" placeholder="enter product price" class="product-price" step="0.01" required>
        </div>
        </br>
      `;
      container.appendChild(newRow);
    }

    function calculateTotal() {
      var productQuantities = document.querySelectorAll(".product-quantity");
      var productPrices = document.querySelectorAll(".product-price");
      var total = 0;

      for (var i = 0; i < productQuantities.length; i++) {
        var quantity = parseFloat(productQuantities[i].value);
        var price = parseFloat(productPrices[i].value);

        if (!isNaN(quantity) && !isNaN(price)) {
          total += quantity * price;
        }
      }

      document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
    }
    function newFunction(){
        var element = document.getElementById("form1");
         element.reset()
      }

