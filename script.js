function stringChop(str, size) {
  // your code here
	let array=[]
	let a=size;
	let s=""
for(let i=0; i<=a; i++){
		if(i!==a){
			s+=str[i]
		}else{
			array.push(s)
			a=2*size
			s=""
			
		}

	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));






















































