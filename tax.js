const amount = document.getElementById("user-input");
const result = document.getElementById("result");
const normal_tax = document.getElementById("normal_tax");
const less_rebate = document.getElementById("less_rebate");
const rebate_tax = document.getElementById("rebate_tax");
const rebate_cess = document.getElementById("rebate_cess");
const normalcess = document.getElementById("normalcess");
const net_tax = document.getElementById("net_tax");
const container = document.querySelector(".container")
var year = document.getElementById("year");

function find(){

    amount.removeAttribute("class", "shake")

    amount.style.color = 'black';
    amount.style.borderColor = 'var(--clr-family-2)'
    normal_tax.style.color = 'black';
    less_rebate.style.color = 'black';
    rebate_tax.style.color = 'black';
    rebate_cess.style.color = 'black';
    normalcess.style.color = 'black';
    net_tax.style.color = 'black';

    if(year.value == 1)
        check1();
    else if (year.value == 2)
        check2();
    else if (year.value == 3)
        check3()
}

function check1(){

    if( (amount.value >= 0) && (amount.value <= 250000) ){

        normal_tax.value = '0';
        less_rebate.value = '0';
        rebate_tax.value = '0';
        rebate_cess.value = '0';
        normalcess.value = '0';
        net_tax.value = 'Nill';
    }
    else if( (amount.value >250000) && (amount.value <= 500000) ){
        
        var amt = (amount.value - 250000) * 5/100;
        var rebate = amt;
        var total = amt - rebate;

        normal_tax.value = amt;
        less_rebate.value = rebate;
        rebate_tax.value = '0';
        rebate_cess.value = '0';
        normalcess.value = '───';
        net_tax.value = total;
    }

    else if ((amount.value >500000) && (amount.value <= 1000000)){

        amt = ((amount.value - 500000) * 20/100) + 12500;
        cess = amt * 4/100;
        total = amt + cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = cess;
        net_tax.value = total;
    }

    else if(amount.value > 1000000){

        amt = ((amount.value - 1000000) * 30/100) + 12500 + 100000;
        cess = amt * 4/100;
        total = amt + cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = cess;
        net_tax.value = total;
    }

    else{

        amount.setAttribute("class", "shake")

        amount.style.color = 'red';
        amount.style.borderColor = 'red'
        normal_tax.style.color = 'red';
        less_rebate.style.color = 'red';
        rebate_tax.style.color = 'red';
        rebate_cess.style.color = 'red';
        normalcess.style.color = 'red';
        net_tax.style.color = 'red';

        normal_tax.value = '0';
        less_rebate.value = '0';
        rebate_tax.value = '0';
        rebate_cess.value = '0';
        normalcess.value = '0';
        net_tax.value = 'Loss C/F';
    }

}


function check2(){
    
    if( (amount.value >= 0) && (amount.value <= 300000) ){

        normal_tax.value = '───';
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = '───';
        net_tax.value = 'Nill';
    }

    else if( (amount.value >300000) && (amount.value <= 600000) ){
        
        var amt = (amount.value - 300000) * 5/100;
        var rebate = amt;
        total = amt - rebate;
        var cess = total * 4/100;

        normal_tax.value = amt;
        less_rebate.value = rebate;
        rebate_tax.value = amt - rebate;
        rebate_cess.value = cess;
        normalcess.value = '───';
        net_tax.value = total;
    }

    else if( (amount.value >600000) && (amount.value <= 900000) ){

        amt = ((amount.value - 600000) * 10/100) + (300000 * 5/100)
        var normal_cess = amt * 4/100;

        if (amount.value <= 700000){

            rebate = amt;
            total = amt - rebate;
            cess = total * 4/100;

            normal_tax.value = amt;
            less_rebate.value = rebate;
            rebate_tax.value = amt - rebate;
            rebate_cess.value = cess;
            normalcess.value = '───';
            net_tax.value = total;

        }else if ( (amount.value > 700000) && (amount.value <=725000)){
            
            var tax_reduce = amount.value - 700000;
            var after_rebate = tax_reduce;
            cess = after_rebate * 4/100;
            total = tax_reduce + cess;

            normal_tax.value = amt;
            less_rebate.value = amt - tax_reduce;
            rebate_tax.value = after_rebate;
            rebate_cess.value = cess;
            normalcess.value = '───';
            net_tax.value = total;

        }else{

            total = amt + normal_cess;

            normal_tax.value = amt;
            less_rebate.value = '───';
            rebate_tax.value = '───';
            rebate_cess.value = '───';
            normalcess.value = normal_cess;
            net_tax.value = total;
        }
    }

    else if( (amount.value >900000) && (amount.value <= 1200000) ){
        
        amt = ((amount.value - 900000) * 15/100) + (300000 * 5/100) + (300000 * 10/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else if( (amount.value >1200000) && ( amount.value <= 1500000 ) ){
        
        amt = ((amount.value - 1200000)  * 20/100) + (300000 * 5/100) + (300000 * 10/100) + (300000 * 15/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else if( (amount.value >1500000) ){
        
        amt = ((amount.value - 1500000)  * 30/100) + (300000 * 5/100) + (300000 * 10/100) + (300000 * 15/100) + (300000 * 20/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else{

        amount.setAttribute("class", "shake")

        amount.style.color = 'red';
        amount.style.borderColor = 'red'
        normal_tax.style.color = 'red';
        less_rebate.style.color = 'red';
        rebate_tax.style.color = 'red';
        rebate_cess.style.color = 'red';
        normalcess.style.color = 'red';
        net_tax.style.color = 'red';
        
        normal_tax.value = '0';
        less_rebate.value = '0';
        rebate_tax.value = '0';
        rebate_cess.value = '0';
        normalcess.value = '0';
        net_tax.value = 'Lose C/F';
    }

}

function check3(){
    
    if( (amount.value >= 0) && (amount.value <= 300000) ){

        normal_tax.value = '───';
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = '───';
        net_tax.value = 'Nill';
    }

    else if( (amount.value >300000) && (amount.value <= 700000) ){
        
        var amt = (amount.value - 300000) * 5/100;
        var rebate = amt;
        total = amt - rebate;
        var cess = total * 4/100;

        normal_tax.value = amt;
        less_rebate.value = rebate;
        rebate_tax.value = amt - rebate;
        rebate_cess.value = cess;
        normalcess.value = '───';
        net_tax.value = total;
    }

    else if( (amount.value >700000) && (amount.value <= 1000000) ){

        amt = ((amount.value - 600000) * 10/100) + (300000 * 5/100)
        var normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else if( (amount.value >1000000) && (amount.value <= 1200000) ){
        
        amt = ((amount.value - 900000) * 15/100) + (300000 * 5/100) + (300000 * 10/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else if( (amount.value >1200000) && ( amount.value <= 1500000 ) ){
        
        amt = ((amount.value - 1200000)  * 20/100) + (300000 * 5/100) + (300000 * 10/100) + (300000 * 15/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else if( (amount.value >1500000) ){
        
        amt = ((amount.value - 1500000)  * 30/100) + (300000 * 5/100) + (300000 * 10/100) + (300000 * 15/100) + (300000 * 20/100);
        normal_cess = amt * 4/100;
        total = amt + normal_cess;

        normal_tax.value = amt;
        less_rebate.value = '───';
        rebate_tax.value = '───';
        rebate_cess.value = '───';
        normalcess.value = normal_cess;
        net_tax.value = total;
    }

    else{

        amount.setAttribute("class", "shake")

        amount.style.color = 'red';
        amount.style.borderColor = 'red'
        normal_tax.style.color = 'red';
        less_rebate.style.color = 'red';
        rebate_tax.style.color = 'red';
        rebate_cess.style.color = 'red';
        normalcess.style.color = 'red';
        net_tax.style.color = 'red';
        
        normal_tax.value = '0';
        less_rebate.value = '0';
        rebate_tax.value = '0';
        rebate_cess.value = '0';
        normalcess.value = '0';
        net_tax.value = 'Lose C/F';
    }

}

function reset(){

    amount.removeAttribute("class", "shake")

    amount.style.color = 'black';
    amount.style.borderColor = 'var(--clr-family-2)'
    normal_tax.style.color = 'black';
    less_rebate.style.color = 'black';
    rebate_tax.style.color = 'black';
    rebate_cess.style.color = 'black';
    normalcess.style.color = 'black';
    net_tax.style.color = 'black';

    amount.value = '';
    normal_tax.value = '';
    less_rebate.value = '';
    rebate_tax.value = '';
    rebate_cess.value = '';
    normalcess.value = '';
    net_tax.value = '';
}

var mode_btn = document.getElementById("mode_btn")
mode_btn.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if (document.body.classList.contains("dark_theme")){
        mode_btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }else{
        mode_btn.innerHTML = `<i class="fa-solid fa-sun"></i>` 
    }
}

function show(){
    document.getElementById("aboutDetails").style.display = "flex"
}

function notShow(){
    document.getElementById("aboutDetails").style.display = "none"
}

function help(){
    document.getElementById("htu").style.display = "flex"
}

function closeHelp(){
    document.getElementById("htu").style.display = "none"
}
