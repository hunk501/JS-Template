var RenderTemplate = (function() {
    
    var self = {};

    /**
     | ----------------------------------
     |  Private function
     | ----------------------------------
     */
    var generate = function(data) {
        return data.map(function(book){
            return `
            <div id="div${ book.id }" data-id="${ book.id }">
                <p>ID: ${ book.id }</p>
                <p>Title: ${ book.title }</p>
                <p>Author: ${ book.author }</p>
                <p id="book${book.id}"> 
                    Selected 
                    <input onchange="RenderTemplate.clickRadio(this);" type="radio" name="book${book.id}" value="1" ${ book.selected==1 ? 'checked':''}/> Yes &nbsp;
                    <input onchange="RenderTemplate.clickRadio(this);" type="radio" name="book${book.id}" value="0" ${ book.selected==0 ? 'checked':''}/> No
                    <button onclick="RenderTemplate.click(this);">Click</button>
                </p>
            </div><hr>
            `;
        }).join(''); 
    }

    /**
     | ----------------------------------
     |  Public function
     | ----------------------------------
     */
    self.render = function(domID, dataObject) {        
        document.getElementById(domID).innerHTML = generate(dataObject);   
    }
    
    // Button Click 
    self.click = function(element) {
        var parent = element.parentNode;
        var mother = parent.parentElement.id
        // Div
        var attr = document.getElementById(mother);        
        attr.setAttribute('class', 'active');
        
        console.log(parent.id);
        console.log(mother);
        console.log(attr.getElementsByTagName('input'));

        var radio = attr.getElementsByTagName('input');        
        for(var i=0; i < radio.length; i++) {
            console.log('value: '+ radio[i].value + ' checked: '+ radio[i].checked );
        }
    }

    // Radio onchange
    self.clickRadio = function(element) {
        var current_element = element.parentNode;
        var mother = current_element.parentNode;
        console.log(element.value);
        console.log(mother.id);
        console.log(mother.getAttribute('data-id'));
    }
    
    return self;
})();


// Usage
let json_data = [
    {
        id: 1,
        title: 'Book1',
        author: 'Dennis',
        selected: true
    },
    {
        id: 2,
        title: 'Book2',
        author: 'John',
        selected: false
    },
    {
        id: 3,
        title: 'Book3',
        author: 'Denise',
        selected: true
    }
];
RenderTemplate.render('app', json_data);