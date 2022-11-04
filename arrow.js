// 1. odd nos.
const odd = (arr)=>{
    for(let i in arr){
        if(arr[i]%2!==0){
            console.log(arr[i])
        }
    }
    }
    odd([1,2,3,4,5,6,7,8,9,10]);
    
    
    
    //2. convert string into title caps
    const title_Caps =(str)=>{
    for(let i in str){ 
     lowCase  = str[i].toLowerCase().split(``);
     outPut = str[i].toLowerCase().split(``).slice(1);
     str[i] = str[i].charAt(0).toUpperCase();
         outPut.push(str[i]);
         outPut.unshift(outPut[outPut.length-1]);
         outPut.pop();
      console.log(outPut.join(``));
    }
    }
    title_Caps(["HELLO","WELCOME","GUYS"]);
    
    
    
    
    //3. sum of the arrays
    const sum =(arr)=>{
       sum_of_Array = arr.reduce((acc,curr)=>acc+curr,0);
       return sum_of_Array;
    }
    console.log(sum([1,2,3,4,5,6,7,8,9,10]));
    
    
    
    
    
    //4. prime nos.
    
    const prime_No =(arr)=>{
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
    }
    prime_No([1,2,3,4,5,6,7,8,9,10]);
    
    
    
    // 5. palindromes
    const arr = [12321,"abroad","civic",78996];
    const palindromes = (arr)=>{
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
    }
    palindromes([12321,"abroad","civic",123456,"ififi"]);