var nameEl = document.getElementById('name')
var numberEl = document.getElementById('number')
var submitBtn = document.querySelector(".submitBtn")
var box = document.querySelector('.box');
var info = [];

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    //console.log(nameEl.value, numberEl.value);
    
    info.push({name: nameEl.value, value: numberEl.value});

    for(var i = 0; i < info.length; i++){
        localStorage.setItem(i, JSON.stringify(info[i]));
    }
    display(nameEl.value, numberEl.value);
    
    nameEl.value = '';
    numberEl.value = '';
})

function getItems(){
    for(var i = 0; i < localStorage.length; i++){
        if(localStorage.length > 0){
            var index = localStorage.key(i);
            var value = JSON.parse(localStorage.getItem(index));

            info.push(value);
            display(value.name, value.value);   
        }

        //console.log(value);
         
    }
    //console.log(info);
    
}

function display(name, number){
    var infobox = document.createElement('div');
    infobox.classList.add('col-1', 'm-2', 'border-end', 'border-dark')

    var displayNameEl = document.createElement('h3');
    displayNameEl.textContent = name;
    infobox.appendChild(displayNameEl);

    var displayNumberEl = document.createElement('h3')
    displayNumberEl.textContent = number;
    infobox.appendChild(displayNumberEl);

    

    box.appendChild(infobox);
}

getItems();