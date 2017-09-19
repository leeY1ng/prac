function f1(nums){
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
    for(var i=0;i<arr.length;i++){
        arr[i].sort(function(x,y){return x-y});
    }
}

function f2(arr){
     
        function compare(ar,arr){
            if(ar.length!==arr.length) return false;
            function f1(x,y){return x-y};
            ar.sort(f1);
            arr.sort(f1);
            for(var i=0;i<ar.length;i++){
                if(ar[i]!==arr[i]){
                    return false;
                }
            }
            return true;
        }


        for(var j=0;j<arr.length;j++){
            for(var m=j+1;m<arr.length;m++){
            if(compare(arr[j],arr[m])){
                arr.splice(m,1);
                m--;
            }
            }
        }
        return arr;

}