// const TypeWriter = function(textEl, words, wait = 3000) {
//     this.textEl = textEl;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// Type Method
// TypeWriter.prototype.type = function() {
//     // Index of current word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullTxt = this.words[current];

//     // Check if deleting
//     if(this.isDeleting) {
//         // Remove character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
    
//     // Insert txt into element
//     this.textEl.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//         // Go faster when deleting
//         typeSpeed /= 2;
//     }

//     // Check if the word is complete by comparing the current this.txt and the full word
//     if(!this.isDeleting && this.txt === fullTxt ) {
//         // Make a pause at end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting  = true;
//     } else if(this.isDeleting && this.txt === "") {
//         this.isDeleting = false;
//         // Move to the next word
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(()=> this.type(), typeSpeed);
// }

// ES6 Class

class TypeWriter {
    constructor(textEl, words, wait = 3000){
        this.textEl = textEl;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
         // Index of current word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
        // Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    // Insert txt into element
    this.textEl.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        // Go faster when deleting
        typeSpeed /= 2;
    }

    // Check if the word is complete by comparing the current this.txt and the full word
    if(!this.isDeleting && this.txt === fullTxt ) {
        // Make a pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting  = true;
    } else if(this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(()=> this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.text-type');
    // The words array must be in single quotes '' not in double quotes ""
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    // Initialize the TypeWriter
    new TypeWriter(txtElement, words, wait);
}