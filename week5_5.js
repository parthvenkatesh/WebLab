function palindrome(arr){
	let mylist = []
	for(let i =0;i<arr.length;i++)
		mylist.push(arr[i])
	for(let i = arr.length-2;i>=0;i--)
		mylist.push(arr[i])
	return mylist
}

console.log(palindrome([1,2,3,4]))
