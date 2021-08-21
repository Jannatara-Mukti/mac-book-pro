
    function changeCostTo0(productCost){
        const inputFeild =document.getElementById(productCost);
        inputFeild.innerText = 0;
        totalPrice();
    }

    function changeCostTo20(productCost){
        const inputFeild =document.getElementById(productCost);
        inputFeild.innerText = 20;
        totalPrice();
    }

    function changeCostTo100(productCost){
        const inputFeild =document.getElementById(productCost);
        inputFeild.innerText = 100;
        totalPrice();
    }

    function changeCostTo180(productCost){
        const inputFeild =document.getElementById(productCost);
        inputFeild.innerText = 180;
        totalPrice();
    }

    function totalPrice(){
       const bestPriceInput = document.getElementById('best-price');
       const bestPrice = parseFloat(bestPriceInput.innerText);

       const memoryInput = document.getElementById('memory');
       const memory = parseFloat(memoryInput.innerText);

       const storageInput = document.getElementById('storage');
       const storage = parseFloat(storageInput.innerText);

       const deliveryInput = document.getElementById('delivery');
       const delivery = parseFloat(deliveryInput.innerText);

       const total = bestPrice + memory + storage + delivery;

       document.getElementById('total-price').innerText = total;

       document.getElementById('final-total').innerText = total;
    }

    document.getElementById('apply-btn').addEventListener('click', function(){
        const promoInput = document.getElementById('promo-input');
        const promo = promoInput.value;

        const totalPriceInput = document.getElementById('total-price');
        const totalPrice= parseFloat(totalPriceInput.innerText);

        const finalTotalInput = document.getElementById('final-total');

        promoInput.value = '';
        

        if(promo == 'stevekaku'){
            const finalPromoPrice = totalPrice / 5;
            const finalPrice = totalPrice - finalPromoPrice;
            finalTotalInput.innerText = finalPrice;
        }
        else{
            alert('You have used a wrong promo code');
        }
    })