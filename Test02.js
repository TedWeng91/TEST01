function allCellToString() {
    var a = "03/23/2018 17:30*03/20/2018 17:30"
    var b = a.split("*")
    var res = b.map(function (item,index,input) {  
        return Number(new Date(item))
})
console.log(Math.max.apply(null,res));
    console.log(Array.max(res));
    console.log(Number(new Date(b[0])));
  
    var ary = [12,23,24,42,1];  
    var res = ary.map(function (item,index,input) {  
        return item*10;  
    })  
    console.log(res);//-->[120,230,240,420,10];  原数组拷贝了一份，并进行了修改
    console.log(ary);//-->[12,23,24,42,1]；  原数组并未发生变化


    var a = "1,2,3"
    a.split(",").forEach( function(item){
                item = parseInt(item)
    })
    console.log(a);
    console.log(parseInt("1"));
    // var s = sheetsArr[0].getRange( 1, 1, sheetsArr[0].getLastRow(), 1 ).getValues()
    // for(var i = 0;i<s.length;i++){
    //     s[i] = "a" + s[i];
        
    //   sheetsArr[0].getRange( i+1,5, 1, 1 ).setValue(s[i]);
      
      
    }

allCellToString()

