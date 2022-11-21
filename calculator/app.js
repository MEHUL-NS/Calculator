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
    length(){
        return this.items.length;
    }
}

var stack= new Stack();
stack.push(0);




const clean = document.querySelector('.clear');
const screen = document.querySelector('.screen')
const selectionValues = document.querySelectorAll('[data-val]');
const selectionOpers = document.querySelectorAll('[data-oper]');



selectionValues.forEach(selectionValue => {
    selectionValue.addEventListener('click', e => {
      const value = selectionValue.dataset.val
      displayValue(value)                          
    })
})
var operator = "+";
selectionOpers.forEach(selectionOper =>{
    selectionOper.addEventListener('click' , e=>{        
      stack.push(parseInt(screen.innerText));
      calculate(operator);
      operator = selectionOper.dataset.oper; 
      screen.innerText=" ";
      if(operator=="="){
        screen.innerText = stack.pop();
        stack.push(0);
        operator = "+";
      }
    })
})
clean.addEventListener('click' , e=>{
    screen.innerText = "";
    for(var i=0;i<=stack.length();i++)
        stack.pop();
    stack.push(0);
})


function displayValue(selectionName){
    screen.innerText = screen.innerText + selectionName;
}

function calculate(op){
    var sec = stack.pop();
    var first = stack.pop();
   
    if(op=="+") stack.push(first + sec);
    if(op=="-") stack.push(first - sec);
    if(op=="*") stack.push(first * sec);
    if(op=="/"){
        if(sec!=0) stack.push(first / sec);
        else screen.innerText = "Error";
    } 
}




