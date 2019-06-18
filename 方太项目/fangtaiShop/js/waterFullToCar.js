
window.onload=function(){
    window.onscroll=function(){
        let btns = document.getElementsByClassName("btn");
// console.log(btns);
// console.log(btns.length);
        let arr = [];
        for (let i = 0; i < btns.length; i++) {
            btns[i].onclick = function () {
                // console.log(789456);
                let allInformation = {
                    ig: this.parentNode.firstElementChild.innerHTML,
                    information: this.previousElementSibling.previousElementSibling.innerHTML,
                    price: this.previousElementSibling.lastElementChild.innerHTML,
                    num: `<div id="zengJian"><input class="jian" type="button" value="-"><span class="result">1</span><input class="jia" type="button" value="+"></div>`,
                    tMoney: this.previousElementSibling.lastElementChild.innerHTML,
                    option: `<input class="del" type="button" value="删除">`
                };
                arr.push(allInformation);
                console.log(arr);
                let str = JSON.stringify(arr);
                localStorage.setItem("shopCar", str);
            }
        }
    }
};