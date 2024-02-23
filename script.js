function compare(){
   var a_size = parseFloat(document.getElementById("a-size").value);
   var b_size = parseFloat(document.getElementById("b-size").value);
   var a_price = parseFloat(document.getElementById("a-price").value);
   var b_price = parseFloat(document.getElementById("b-price").value);
   var a_point = a_size / a_price;
   var b_point = b_size / b_price;
   var answer = document.getElementById("answer");
   answer.innerText = "a = "+a_point+" vs b = "+b_point;
   console.log(a_point)
}