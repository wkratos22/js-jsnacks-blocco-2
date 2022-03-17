const array1 = [1,2,3,4,5,6,7];
const array2 = [1,2,3,4,5,6,7,9,10,11,12,13];

if (array1 < array2) {
 array1.push.apply(array1, array2);
}
else
{

}
console.log(array1)
console.log(array2)