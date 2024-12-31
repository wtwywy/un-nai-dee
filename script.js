let productCount = 0;

function addProduct() {
  productCount++;
  const tableBody = document.getElementById('product-forms');
  const row = document.createElement('tr');
  row.id = `product-form-${productCount}`;
  row.innerHTML = `
      <td><input type="text" class="form-control" id="productName${productCount}" placeholder="${String.fromCharCode(64+productCount)}" /></td>
      <td><input type="number" class="form-control" id="productVolume${productCount}" placeholder="0" /></td>
      <td><input type="number" class="form-control" id="productPrice${productCount}" placeholder="0" /></td>
      <td><button class="btn btn-danger" onclick="removeProduct(${productCount})">X</button></td>
  `;
  tableBody.appendChild(row);
}
function removeProduct(id) {
  const productForm = document.getElementById(`product-form-${id}`);
  productForm.remove();
}

function compareProducts() {
  const products = [];
  for (let i = 1; i <= productCount; i++) {
    const name = document.getElementById(`productName${i}`)?.value || `${String.fromCharCode(64+i)}`;
    const volume = parseFloat(document.getElementById(`productVolume${i}`)?.value) || 0;
    const price = parseFloat(document.getElementById(`productPrice${i}`)?.value) || 0;
    if (volume > 0 && price > 0) {
      products.push({ name, volume, price });
    }
  }
  if (products.length === 0) {
    document.getElementById('result').textContent = 'ท่านไม่ได้กรอกข้อมูลสินค้า';
    return;
  }
  let bestProduct = products[0];
  let bestScore = products[0].volume / products[0].price;
  let worstProduct = products[0];
  let worseScore = products[0].volume / products[0].price;

  let resultHTML = '';
  for (let i = 0; i < products.length; i++) {
    const score = products[i].volume / products[i].price;
    products[i].score = score;
    if (score > bestScore) {
      bestProduct = products[i];
      bestScore = score;
    }
    if (score < worseScore) {
      worseScore = score
    }
  }
  resultHTML += `${bestProduct.name} คุ้มค่าที่สุด <br><br>`;
  for (let i = 0; i < products.length; i++) {
    const percent = (1 - (worseScore / products[i].score)) * 100;
    products[i].percent = percent;

    resultHTML += `${products[i].name} ได้ ${products[i].score.toFixed(2)} คะแนน ประหยัด ${products[i].percent.toFixed(0)}%<br>`;
  }
  document.getElementById('result').innerHTML = resultHTML;
}

// Initialize with one product form
addProduct();
