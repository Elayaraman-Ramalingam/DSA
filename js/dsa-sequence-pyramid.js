let a=[4,5,7,2,1,7,9];
let b=0;

for(let i=0;i<a.length;i++){
  if(b<a[i+1]){
    b=a[i];
  }
}
console.log(b);