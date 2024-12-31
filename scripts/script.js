const menuItem = document.getElementById('menu');

document.getElementById('burger').onclick = () => {
    menuItem.classList.add('open');
}

document.querySelectorAll('.menu-item').forEach((item) => {
    item.onclick = () => {
        menuItem.classList.remove('open');
    }
});

document.getElementById('close').onclick = () => {
    menuItem.classList.remove('open');
}

document.getElementById('choose-pizza').onclick = () => {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"});
}

const productInput = document.getElementById('product-input');
const addToCardButtons = document.getElementsByClassName('button-add-to-cart');

for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = (e) => {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById('create-order').onclick = () => {
    const addressInput = document.getElementById('address-input');
    const phoneInput = document.getElementById('phone-input');

    let successOrder = false;
    const inputArr = [productInput, addressInput, phoneInput];

    for (let i = 0; i < inputArr.length; i++) {
        const currentInput = inputArr[i];
        if (!currentInput.value) {
            currentInput.classList.add('invalid');
            successOrder = false;
            break;
        } else {
            successOrder = true;
            currentInput.classList.remove('invalid');
        }
    }

    if (successOrder) {
        productInput.value = '';
        addressInput.value = '';
        phoneInput.value = '';
        alert('Спасибо за заказ!');
    }
}