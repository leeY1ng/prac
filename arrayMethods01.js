function f(url){
	var obj = {};
	var str = url.split("?");
	var str1 = str[1].split("&");
	var str2 = str1.map(function(x){
		return x.split("=");
});
	str2.map(function(x){
		Object.defineProperty(obj,x[0],{
			value: x[1]
});
});
	return obj;
}

function f(str){
	var ar=[];
	var patt = str.match(/\W/);
	var arr = str.split(patt);
	ar.push(arr.map(function(x){return x.replace(/[a-z]/,x.charAt(0).toUpperCase())}));
	var arrr = ar.reduce(function(x,y){return x.concat(y)});
	var s = arrr.reduce(function(x,y){return x+y});
	return s;
}


var threeSum = function(nums) {
    var arr=[],ar=[];
    var len = nums.length;
    for(var x=0;x<len;x++){
        for(var y=x+1;y<len;y++){
            for(var z = y+1;z<len;z++){
                if(nums[x]+nums[y]+nums[z]===0){
                    ar.push(nums[x],nums[y],nums[z]);
                    arr.push(ar);
                    ar=[];
                }
            }
        }
    }
   for(var m=0;m<arr.length;m++){
       arr[m].sort(function(x,y){return x-y});
   }
    
    function compare(ar,arr){
	if(ar.length!==arr.length) return false;
	function f(x,y){return x-y};
	ar.sort(f);
	arr.sort(f);
	for(var i=0;i<ar.length;i++){
		if(ar[i]!==arr[i]){
			return false;
}
}
	return true;
}
    for(var p=0;p<arr.length;p++){
        
        for(var q=p+1;q<arr.length;q++ ){
            if(compare(arr[p],arr[q])){
                arr.splice(arr[q],1);
                q--;
            }
        }
    }
    return arr;
};