//Class Work Day 3


// Q13 SumNumbers
function SumNumbers(n)
{
   function add()

}




// Q12



// Q11 Create A Closure Add
// function Add(n)
// {
//     return function ()
//     {
//         console.log(-30+n)
//     }
// }
// const Summ = Add(80)
// Summ()


// Q10 Recursive Pow
// function RecursivePow(a,b)
// {
//     if(a==1)
//     {
//         return 1
//     }
//     return Math.pow(a,b)
// }
// console.log(RecursivePow(2,4))



//Q9Sum Recursion
// function RecursiveSum(a)
// {
//     if(a==1)
//     {
//         return 1
//     }
//     return a+RecursiveSum(a-1)
// }console.log(RecursiveSum(5))




//Q8Factorial Recusrion
// function Factorial(a)
// {
//     if(a==1)
//     {
//         return 1
//     }
//     return a*Factorial(a-1)
// }console.log(Factorial(5))






//Q7 Equal or not
// function EqualOrNot(a,b)
// {
//     if(a===b)
//     {
//         return "True"
//     }
//     else
//     {
//         return "False"
//     }
// }
// console.log(EqualOrNot("5","5"))



// Q6 Triangle-Area
// function TriangleArea(b,h) 
// {
//     return (b*h)/2
// }
// console.log(TriangleArea(3,2))


// Q5
// function Cubes(a,b)
// {
//  return Math.pow(a,b)
// }
// console.log(Cubes(5,3))


//Q4
// function Cubes(a,b)
// {
//  return Math.pow(a,b)
// }
// console.log(Cubes(5,2))

// Function FOR
// function Cubes(a,b)
// {   let res=1
//     for(let i=1;i<=b; i++)
//     {
//         res*=a
//     }   
//     return res
// }
// console.log(Cubes(3,3))

// POW RECURSION
// function Cubes(a,b)
// {
//     if(a==1)
//     {
//         return 1
//     }
//     return Math.pow(a,b)
// }
// console.log(Cubes(5,3))
//Q3
// function Morethan(a,b,c=100)
// {
//     if(a+b>c && b+a>c)
//     {return "TRUE"}
//     else
//     {return "FALSE"}
// }
// console.log(Morethan(40,50))


//Q2 Arguments
// function ArgumentCounter(a)
// {
//     return arguments.length
// }
// console.log(ArgumentCounter(13,45,67,98))


//Q1
// function BasicCalculator(a,b,c)
// {
//     if(b=="+")
//     {
//        return a+c
//     }
   
//     if(b=="-")
//     {
//         return a-c
//     }
    
//     if(b=="/")
//     {
//         return a/c
//     }
    
//     if(b=="*")
//     {
//         return a*c
//     }
// }
// console.log(BasicCalculator(2,"+",2))




//Home Practice Day2








//Home Task Day 1

//Q1
//function Hypotenuse(a,b,c)
//{
//    c=(a*a)+(b*b)
//    return Math.sqrt(c)
//}
//console.log(Hypotenuse(3,4))


// //Q2
// function Age(a,d)
// {
//     let age=0
//     age=a*d
//     return age
// }
// console.log (Age(26,365))

// //Q3
// function SumPositiveNegativeZero(a,b,c,)
// {
//      let sum=0
//      let Positive=0
//      let Negative=0
//      let Zero=0
//      if(a>0 || b>0 || c>0)
//      {Positive++}
//      if(a<0 || b<0 || c<0)
//      {Negative++}
//      if(a==0 || b==0 || c==0)
//      {Zero++}
//      sum=a+b+c
//      return `     Sum: ${sum},

//      Positive: ${Positive},

//      Negative: ${Negative},
      
//      Zero: ${Zero}`
// }
// console.log(SumPositiveNegativeZero(14,-1,0,))


//Q4 Reverse
// function Reverse(a){
//     let x=" "
//     let reverse=0
//     for (let i=a; i>0;) 
//     {
        
//         reverse= x+= i%10
//         i=Math.floor(i /= 10)
//     }
//     return reverse
// }
// console.log(Reverse(98765))








//Class work Day 1
//Q11
// function NumberCount(x,d)
// {
//     let cnt=0
//     for(let i=d; i<x+1; i++)
//     { 
//     if (i==d)
//     cnt++;
//     return cnt
//     }
// }
// console.log(NumberCount(110,11))



// //Q9 Factorial
// function Factorial(a){
    
//     for(i=1; i<=a; i++)
//     {
//         let test=1
//         test*=i
//     }
//     return b
// }
// console.log(Factorial(3))

//Q8
//function Hypotenuse(a,b,c)
//{
//    c=(a*a)+(b*b)
//    return Math.sqrt(c)
//}
//console.log(Hypotenuse(3,4))



// Q7
// function SquareNumber(a,b){
//     let square=0
//     for(i=1; i<=b; i++)
//     {
//         c=i*i
//         if(c>=a && c<=b)
//         {
//             console.log(square)
//         }
//     }
// }
// console.log(Kvadrat(1,10))



// Q6
// function EvenNumbers(a,b)
// {
//    for(let i=a; i<b; i++)
//    {
//        if(i%2==0)
//        console.log(i)
//    }
// }
// console.log(EvenNumbers(5,9))




// Q5
// function NumSum(a)
// {
// let first= Math.floor (a/10/10)
// let middle=Math.floor (a/10%10)
// let last=a%10
// let result=first+middle+last
// return result
// }
// console.log(NumSum(179))



// Q4
// function SumPos(a,b)
// {
// if(a>0&&b>0)
// return a+b
// else if (a>0&&b<0)
// return a
// else if (a<0&&b>0)
// return b
// }
// console.log(SumPos(4,-2))



// Q3 
//  function NextEven(a)
//  {
//  let NextEven=a-(a%2)+2
//  return NextEven
//  }
// console.log(NextEven(5))



// Q2
//function max(a,b,c)
//{
//    if(a>b&&b>c)
//    return a
//    else if(b>a&&a>c)
//    return b
//    else
//    return c
//}
//console.log(max(3,5,8))




// Q1
// function Sum(a,b){
//   let result=a+b
//    return result 
//}
//console.log(Sum(1,2))