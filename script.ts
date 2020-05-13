//Concat
let concati=(arr) =>{
  return arr.flat();
}
let x=[1,2,[3],[[4,5]]];
console.log(concati(x));

//Chunk

let chunk=(array:Array<Number>, size:Number)=> {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
}
console.log(chunk([1,2,3,4,5],2));

//Compact

let compact = (array1:Array<any>)=>{
  let compact_arr=[];
  array1.filter(function(value){
    if(value!==0 && value!="" && value!==undefined  &&  value!==false )
    compact_arr.push(value);
  })
  return compact_arr;
}
console.log(compact([1,2,"",undefined]));


//formPairs
let formPairs=(keys:Array<any>,values:Array<any>)=>{
  var result = {};
  keys.forEach((key, i) => result[key] = values[i]);
  console.log(result);
}
var keys = ['One', 'Two', 'Three'];
var values = [11, 22, {id:1,name:"madhuri"}]
formPairs(keys,values);


//Intersection
let intersection=(arr1:Array<any>,arr2:Array<any>)=>{
let common = arr1.filter(element => arr2.indexOf(element) !== -1);
  return common;
}
console.log(intersection([1,2,3],[1,4,5]));

//tail
let tail=(taarr:Array<any>)=>{
  const taarr1=[];
  for(let i=1;i<taarr.length;i++){
    taarr1.push(taarr[i]);
  }
  return taarr1;
}
console.log(tail([1,2,3,4,5]));


//head
let head=(hearr:Array<any>)=>{
  if(hearr.length>1){
    return hearr[0];
  }
  else{
    return undefined;
  }
}
console.log(head([]));
console.log(head(['1',2,3]));


//indexOf

let indexOf=(arri:Array<any>,sear:any,start?:Number)=>{
  if(start>0){
    for(let i=0;i<arri.length;i++)
    {
        if(arri[i]===sear)
        {
          return i;
        }
        else{
          return -1;
        }
    }

  }
  else{
    for(let i=arri.length-1;i>=0;i--)
    {
        if(arri[i]===sear)
        {
          return i;
        }else{
          return -1;
        }
    }
  }
}
console.log(indexOf([1,2,3,'a'],'a',-1));
