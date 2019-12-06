$(document).ready(function(){
  $("form#favoritethings").submit(function(){
    event.preventDefault();

    var cat = $("input#catinput").val();
    var dog = $("input#doginput").val();
    var person = $("input#personinput").val();


    function addIt(id,input){
      var node = document.createElement("li");
      var textnode = document.createTextNode(input);
      node.appendChild(textnode);
      document.getElementById(id).appendChild(node);
    };
    
    addIt("catlist",cat);
    addIt("doglist",dog);
    addIt("peoplelist",person);
  });
});
