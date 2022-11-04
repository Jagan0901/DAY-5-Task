// 1. odd nos.
(function (arr){ 
 for(let i in arr){
    if(arr[i]%2!==0){
        console.log(arr[i])
    }
}
})([1,2,3,4,5,6,7,8,9,10]);


//2. convert string into title caps
(function (str){
    for(let i in str){ 
     lowCase  = str[i].toLowerCase().split(``);
     outPut = str[i].toLowerCase().split(``).slice(1);
     str[i] = str[i].charAt(0).toUpperCase();
         outPut.push(str[i]);
         outPut.unshift(outPut[outPut.length-1]);
         outPut.pop();
      console.log(outPut.join(``));
    }
    })(["HELLO","WELCOME","GUYS"]);


//3. sum of the arrays
(function (arr){
    sum_of_Array = arr.reduce((acc,curr)=>acc+curr,0);
    console.log(sum_of_Array);
 })(([1,2,3,4,5,6,7,8,9,10]));


//4. prime nos.

(function (arr){
    array_of_Primenos = arr.filter((e)=>{
        for(let i=2; i<=Math.sqrt(e);i++){
            if(e%i===0){
                return false;
            }
        }
        return true;
    })
   for(let i in array_of_Primenos){ 
    console.log(array_of_Primenos[i]);
}
})([1,2,3,4,5,6,7,8,9,10]);


// 5. palindromes
(function (arr){
const arr1 = arr.map((e)=> `${e}`);
// console.log(arr1);
for(let j=0; j<=arr1.length; j++){
    
 for(let i=0; i<arr1[j].length/2;i++){
    
if (arr1[j][i] === arr1[j][arr1[j].length - 1 - i]) {
    // return arr1[j]; 
    console.log(`${arr1[j]} is a palindrome`);     
}else{
    console.log(`${arr1[j]} is not a palindrome`);
}
 }
}
})([12321,"abroad","civic",123456,"ififi"]);


//6. Median
(function (arr){
    const arr2 = arr.sort((a,b)=>a-b);
     const mid  = Math.floor(arr2.length/2);
   
     if(arr2.length %2 !=0){
        console.log(arr2[mid])
       }else {
        console.log((arr2[mid-1]+arr2[mid])/2);   
          } 
        })
   ([4,5,2,1,3,6,7,8])
   (function (arr){
    const arr2 = arr.sort((a,b)=>a-b);
     const mid  = Math.floor(arr2.length/2);
   
     if(arr2.length %2 !=0){
        console.log(arr2[mid])
       }else {
        console.log((arr2[mid-1]+arr2[mid])/2);   
          } 
        })
   ([100,50,25,75,0])

   


//7. duplicates
(function (arr){
    const arr3 = [...new Set(arr)];
    console.log(arr3);
})([1,2,3,2,4,5]);
(function (arr){
    const arr3 = [...new Set(arr)];
    console.log(arr3);
})(["Klaus Michealson","Rebecca Michealson","Stefan Salvatore","Katherine Pierce","Klaus Michealson"]);


// //8. rotating the array
(function (arr,N,K){
    K = K%N;
    var str1 ="";
    var str2 ="";
    for(let i=0; i<N; i++){
     if(i<K){
         str1 =  str1+ arr[N+i-K] 
         // console.log(str1);
     }else{
         str2 = str2+(arr[i-K])
         str3 = str1+str2
         // console.log(str3);
     }
    }
    return str3.split(``);   
 })
 (console.log(([1,2,3,4,5],5,1)));