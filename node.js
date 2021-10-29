// Global Variables.
// Creating array for resulting the tags of search output.
let tag_array = [];
// Variable to start search from the children nodes instead of self.
let x = 0;
// Variable for Splitting the string selector only the first time.
let y = 0;
// String array for storing the selector split.
let strng;
// Array for returning the stored result of multiple search like 'div span'.
let internal_array = [];

// Creating class NODE.
class Node {
    constructor(tag,id,children,classes){
        // Tag Name for eg - div, span,etc.
        this.tag = tag;
        // ID Name.
        this.id = id;
        // Array of Childrens.
        this.children = children;
        // Array of Class Names.
        this.classes = classes;
    }

// Defining search method in NODE class.
    search(selector) {
      // Checking if input is not null.
      if(!selector){
        let a = "Search Parameter cannot be blank! Enter a parameter to search.";
        return a;
      }
      // If condition to split the string selector just only once.
          if(y === 0){
            strng = selector.split(" ");
            y++;
            // Only if the string selector has ' ' (space) in it, then it will go into this loop, otherwise mose ahead.
            if(selector.includes(" ")){
              for(let i=0; i < this.children.length; i++){
                if(strng[0] === this.children[i].tag){    // Checking if the first element of the strng[0] like div, then only search for strng[1] in that node.
                  internal_array.push(this.children[i].search(strng[1]));
                } 
            }
              return internal_array[0];
            }
          }
          // Loop for traversing the tree. Irrespective of the selector's value, this loop will traverse through the whole tree. 
            while(true){ // starting the loop.
              if(x === 0){ // To enter the children nodes, otherwise would have included its tag search also.
                 x++;
                 for(let i=0; i < this.children.length; i++){
                  this.children[i].search(selector); // Recursion
              }
                break; // breaking the loop.
               }
               // Searching on the basis of CLASS. The loop will traverse through every element, so if this condition matches on any element, it will push it into the resulting arary.
               if(this.classes.includes(selector)){
                tag_array.push(this.id);
                break; // breaking the loop.
               }
               // If the selector doesn't matches with the tag of first child's tag, it will then go searching into the children nodes of this first child node.
              if(selector !== this.tag){
                  for(let i=0; i < this.children.length; i++){
                      this.children[i].search(selector); // Recursion
                  }
                  break; // breaking the loop.
              } else if(selector === this.tag ) {
                // If the selectors matches with the tag of first child's tag, then it will push its ID into the resulting array and then search for the selector in its children nodes.
                  tag_array.push(this.id);
                  for(let j=0; j < this.children.length; j++){
                      this.children[j].search(selector); // Recursion
                  }
                  break; // breaking the loop.
              }
          }
          return tag_array; // Returning the tag_array which contains the IDs of all the matched tags or classes in the tree.
          
            
        }
    }
// Creating Node Object manually of every element present in the HTML DOM.
let randomNode = new Node("span","span-6",[],[".randomSpan"]); // node of span-6
let spanNode5 = new Node("span","span-5",[],[".note", ".mania"]); // node of span-5
let spanNode4 = new Node("span","span-4",[],[".mania"]); // node of span-4
let divNode4 = new Node("div","div-4",[spanNode4,spanNode5],[]); // node of div-4
let Nodelbl1 = new Node("label","lbl-1",[],[]); // node of label-1
let Nodesec1 = new Node("section","sec-1",[Nodelbl1],[]); // node of section-1
let divNode3 = new Node("div","div-3",[Nodesec1],[".subContainer2"]); // node of div-3
let spanNode3 = new Node("span","span-3",[],[".sub1-span3"]); // node of span-3
let p1 = new Node("p","para-1",[],[".sub1-p1", ".note"]); // node of para-1
let divNode2 = new Node("div","div-2",[p1,spanNode3],[".subContainer1"]); // node of div-2
let spanNode2 = new Node("span","span-2",[],[]); // node of span-2
let spanNode1 = new Node("span","span-1",[],[".note"]); // node of span-1
let divNode1 = new Node("div","div-1",[spanNode1,spanNode2,divNode2,divNode3,divNode4],[".mainContainer"]); // node of div-1
let body = new Node("body","content",[divNode1,randomNode],[]); // node of body



// Testing
console.log("Started...");
// Test case 1 -
console.log('Test case 1');
console.log(divNode1.search("span"));
tag_array = [];
x = 0;
y = 0;
// Test case 2 -
console.log('Test case 2');
console.log(divNode1.search(".note"));
tag_array = [];
x = 0;
y = 0;
// Test case 3 -
console.log('Test case 3');
console.log(divNode1.search("label"));
tag_array = [];
x = 0;
y = 0;
// Test case 4 -
console.log('Test case 4');
console.log(p1.search(".note"));
tag_array = [];
x = 0;
y = 0;
// Test case 5 -
console.log('Test case 5');
console.log(divNode1.search("div"));
tag_array = [];
x = 0;
y = 0;
// Test case 6 -
console.log('Test case 6');
console.log(randomNode.search("div"));
tag_array = [];
x = 0;
y = 0;
// Test case 7 -
console.log('Test case 7');
console.log(divNode2.search("section"));
tag_array = [];
x = 0;
y = 0;
// Test case 8 -
console.log('Test case 8');
console.log(body.search());
tag_array = [];
x = 0;
y = 0;
// Error conditions need to be handled
// invalid input need to be handled

// Test case 9 -
console.log('Test case 9');
console.log(body.search("section"));
tag_array = [];
x = 0;
y = 0;
// Test case 10 -
console.log('Test case 10');
console.log(body.search("div span"));
tag_array = [];
x = 0;
y = 0;