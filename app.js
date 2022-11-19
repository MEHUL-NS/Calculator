// const b1 = document.querySelector('.one');
// const b2 = document.querySelector('.two');
// const b3 = document.querySelector('.three');
// const b4 = document.querySelector('.four');
// const b5 = document.querySelector('.five');
// const b6 = document.querySelector('.six');
// const b7 = document.querySelector('.seven');
// const b8 = document.querySelector('.eight');
// const b9 = document.querySelector('.nine');
// const b0 = document.querySelector('.zer0');
// const bPlus = document.querySelector('.plus');
// const bMinus = document.querySelector('.minus');
// const bMult = document.querySelector('.multiply');
// const bDivi = document.querySelector('.division');
// const bEquals = document.querySelector('.equals');
// const bDeci = document.querySelector('.decimal');

class Stack {  
    constructor(){    
        this.items = [];
    }      
    push(element){    
        this.items.push(element);
    }
    pop(){
        if(this.items.length==0)
            return "Underflow";
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length == 0;
        
    }
    printStack(){
        var str="";
        for(var i=this.items.length ; i>=0 ; i--){
            str += this.items[i] + " ";
        }
        return str;
    }    
}

var stack = new Stack();
console.log(stack.isEmpty());










const screen = document.querySelector('.screen')
const selectionButtons = document.querySelectorAll('[data-val]');


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const value = selectionButton.dataset.val
        displaySelection(value)
        stack.push(value);
        console.log(stack.isEmpty());
    })
  })



function displaySelection(selectionName){
    screen.innerText = screen.innerText + selectionName;
}





