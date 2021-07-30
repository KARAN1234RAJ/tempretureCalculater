const calculateTemp =()=>{

     const numberTemp = document.getElementById('temp').value;
     //console.log(numberTemp);

     const tempSelected = document.getElementById('temp_diff');
     const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;  
     //console.log(valueTemp);

     const celToFah =(cel)=>{
          let farenhiet = Math.round((cel*9/5)+32);
          return farenhiet;

     }
     const fahToCel =(fah)=>{
          let celsious =Math.round((fah-32)*5/9);
          return celsious;
     }
     let result;

     if(valueTemp =='cel'){
          result = celToFah(numberTemp);
          document.getElementById('resultContainer').innerHTML =`${result}°Farenhiets`;
     }else{
          result = fahToCel(numberTemp);
          document.getElementById('resultContainer').innerHTML =`${result}°Celsious`;
     }

}