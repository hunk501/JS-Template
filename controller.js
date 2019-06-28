var RenderTemplate = (function() {
    
    var self = {};

    // Private    
    var generate = function(data) {
        return data.map(function(book){
            return `
            <div id="div${ book.id }">
                <p>ID: ${ book.id }</p>
                <p>Title: ${ book.title }</p>
                <p>Author: ${ book.author }</p>
                <p id="book${book.id}"> 
                    Selected 
                    <input type="radio" name="book${book.id}" value="1" ${ book.selected==1 ? 'checked':''}/> Yes &nbsp;
                    <input type="radio" name="book${book.id}" value="0" ${ book.selected==0 ? 'checked':''}/> No
                    <button onclick="RenderTemplate.click(this);">Click</button>
                </p>
            </div><hr>
            `;
        }).join(''); 
    }

    // Public
    self.render = function(domID, dataObject) {        
        document.getElementById(domID).innerHTML = generate(dataObject);   
    }

    self.click = function(element) {
        var parent = element.parentNode;
        var mother = parent.parentElement.id
        var attr = document.getElementById(mother);
        attr.setAttribute('class', 'active');
        console.log(parent.id);
        console.log(mother);
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