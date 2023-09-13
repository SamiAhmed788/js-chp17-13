//---------------------sawal no 1------------------
    var array = [[],[]];
//---------------------sawal no 2------------------
 var matrixArray = [[0, 1, 2, 3], [1, 0 ,1, 2], [2, 1, 0, 1]];

 var matrix = matrixArray.map(function(row) {
 return row.join(' ');
     }).join('\n');
     console.log(matrix);
// ---------------------sawal no 3------------------
     for(var i=0; i<=1; i++){
        console.log(i + "\n");
     }
// ====================sawal no 4=======================
 var tableNum = +prompt("please sir enter a number to  show to you multiplication");
     var tableLength = +prompt( " please sir enter length of multiplication");
     for(var i = 1; i<=tableLength; i++){
         console.log(tableNum + "×" + i + " = " + (tableNum*i));
     }
//---------------------sawwal no 5------------------
     var vagetable = ["tomato", "potato", "onion", "chilli", "ginger"];

     for(var i=0; i<vagetable.length; i++){
         console.log('Element at index ', i ,' is ', vagetable[i])
     }
//---------------------sawal no 6------------------
     var counting = ""
     var reverseCounting = "";
     var even = "";
     var odd = "";
     var series = "";
     for(var i=1; i<=15; i++){
         counting += i + ", ";
     }
     for(var i=10; i>0; i--){
        reverseCounting += i + ", ";
     }
     for(var i=0; i<=20; i+=2){
         even += i + ", "
     }
     for(var i=1; i<=20; i+=2){
         odd += i + ", "
     }
     for(var i=2; i<=20; i+=2){
         series += i + "k, "
     }
     console.log("Counting:\n" + counting);
     console.log("Reverse Counting:\n" + reverseCounting);
     console.log("Even:\n" + even);
     console.log("Odd:\n" + odd);
     console.log("Series:\n" + series);

//---------------------sawa no 7------------------
     var storeitems  = ["pencil", "eraser", "shopner", "scale", "pen"]
   var userSearch = prompt("Welcome to my store, What do you want ?");
   var searchCheck = false;
   var itemIndex;
   for(var i=0; i<=(storeitems.length-1); i++){
       if(userSearch==storeitems[i]){
           searchCheck = true;
           itemIndex = i;
       }
   }
   if(searchCheck){
       alert(userSearch + " is available at index " + itemIndex + " in our store");
   }
   else{
       alert("We are sorry. " + userSearch + " is not available in our stores");
   }

//---------------------sawal no 8------------------
    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
    for(var i=0; i<array.length; i++){
        if(array[i]>largestNum){
            largestNum=array[i];
        }
    }
    console.log("Array Item: " + array + "\nThe largest number is " + largestNum);

//---------------------sawal no 9------------------
    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
     for(var i=0; i<array.length; i++){
         if(array[i]<largestNum){
             largestNum=array[i];
         }
     }
     console.log("Array Item: " + array + "\nThe smallest number is " + largestNum);

//---------------------sawal no 10------------------
     var mulOfFive = "";
     for (var i=0; i<=100; i+=5){
         mulOfFive += i + ", ";
     }
     console.log(mulOfFive);