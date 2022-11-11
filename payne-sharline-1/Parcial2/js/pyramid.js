// Numeros de la piramide
let arrayPyramid = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3],
    [4, 6, 3, 3, 2],
  ];
  
  function calcular(arrayPyramid, i, j) {
    
    if (i == arrayPyramid.length) {
      return 0;
    }
    let suma;
    suma = arrayPyramid[i][j] + 
        Math.max(
            calcular(arrayPyramid, i + 1, j), 
            calcular(arrayPyramid, i + 1, j + 1));
    return suma;
  }
  
  function ChangeColor(){
    var mayor = 0;
    var j=0, i=0;
  
    var changeElemente = document.getElementById((i+1)+"-"+ (j+1) + "-" +arrayPyramid[i][j]);
    changeElemente.className = "recorrdio";
  
    for( i = 1; i < arrayPyramid.length; i++ ){
      console.log( arrayPyramid[i][j]);
  
      if(arrayPyramid[i][j] > arrayPyramid[i][j+1] ){
        mayor = arrayPyramid[i][j];
      }else {
        mayor = arrayPyramid[i][j+1];
        j +=1;
      }
      console.log((i+1)+"-"+mayor);
      changeElemente = document.getElementById((i+1)+"-"+ (j+1) + "-"+mayor);
      changeElemente.className = "recorrdio";
      mayor = 0;
    } 
  };
  
  
  function ChangeColor2(){
    var mayor = 0;
    var j=0, i=0;
    for( i = 0; i < arrayPyramid.length; i++ ){
      console.log( arrayPyramid[i][j]);
      for(j = 0; j < arrayPyramid[i].length; j++ ){
        if(arrayPyramid[i][j] > mayor){
          mayor = arrayPyramid[i][j];
          console.log("mayor " + mayor);
        } 
        console.log("recor" + i+"-"+j)
  
      }
      console.log((i+1)+"-"+mayor);
      const changeElemente = document.getElementById((i+1)+"-"+mayor);
      changeElemente.className = "recorrdio";
      mayor = 0;
    } 
  };
  
  
  var sumAlta = 0;
  
  function Sumatot(arrayPyramid) {
    return calcular(arrayPyramid, 0, 0);
  }
  
  function respuesta() {
    document.getElementById("sumFinal").innerHTML= Sumatot(arrayPyramid);
    console.log(Sumatot(arrayPyramid));
    ChangeColor();
  
  }
   
  piramide();
  
  function piramide(){
    let count = 0;
    const div = document.getElementById("piramyd");
    arrayPyramid.forEach((rows) => {
      count++;
      const parentDiv = document.createElement("div");
      parentDiv.id = "parent" + count;
      div.appendChild(parentDiv);
      var posi = 1;
      rows.forEach((column) => {
  
        const divParent = document.getElementById("parent" + count);
        const childDiv = document.createElement("div");
        childDiv.textContent = column;
        childDiv.id = (count + "-" +  posi + "-" + column) ;
        divParent.appendChild(childDiv);
        posi ++;
      });
    });
  }