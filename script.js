const displayContent = (eventId, displayValue) => {
    document.getElementById(eventId).style.display = displayValue
  }
  const displayInnerHTML = (eventId, value) => {
    document.getElementById(eventId).innerHTML = value
  }
  const displayInputValue = (eventId, inputValue) => {
    document.getElementById(eventId).value = inputValue
  }
  const displayRelevantRow = (event) => {
    displayContent ('cm_row',  event) 
    displayContent ('km_row',  event) 
    displayContent ('yd_row',  event) 
    displayContent ('in_row',  event) 
    displayContent ('ft_row',  event) 
    displayContent ('ml_row',  event) 
  }
    displayRelevantRow('none')
    
  // Create a function to clear all input fields
  const clearInputFields = (event, empty) => {
    displayInputValue ('input_value',  empty) 
    displayInputValue ('cm_result',  event) 
    displayInputValue ('km_result',  event) 
    displayInputValue ('yd_result',  event) 
    displayInputValue ('in_result',  event) 
    displayInputValue ('ft_result',  event) 
    displayInputValue ('ml_result',  event) 
  }
    clearInputFields(0)
  


  const checkBtn = document.getElementById("check_btn")
  checkBtn.onclick = () => {
    var selectScale = document.getElementById('select_scale').selectedIndex 
    var scaleOption = document.getElementById('select_scale').options
  
    displayInnerHTML('err_msg', '')
    
    if (scaleOption[selectScale].id == '') {
      displayInnerHTML('err_msg', 'Please Select a Convertion Scale')            
      displayContent('input_container', 'none')
      displayContent('current_convertee', 'none')
      clearInputFields('')
      return displayRelevantRow('none')
    }   
    
      displayContent('input_container', 'block')
      displayInnerHTML('current_convertee', scaleOption[selectScale].innerText)
      displayContent('current_convertee', 'block')
      displayRelevantRow('block')
      clearInputFields(0)
    
    if (scaleOption[selectScale].id == 'cm') return displayContent ('cm_row', 'none')            
    if (scaleOption[selectScale].id == 'km') return displayContent ('km_row', 'none')            
    if (scaleOption[selectScale].id == 'yd') return displayContent ('yd_row', 'none')            
    if (scaleOption[selectScale].id == 'in') return displayContent ('in_row', 'none')            
    if (scaleOption[selectScale].id == 'ft') return displayContent ('ft_row', 'none')            
    if (scaleOption[selectScale].id == 'ml') return displayContent ('ml_row', 'none')
  }
   
  const inputValue = document.getElementById("input_value")
  inputValue.oninput = () => {
    var selectScale = document.getElementById('select_scale').selectedIndex 
    var scaleOption = document.getElementById('select_scale').options
    
    if (scaleOption[selectScale].id == 'cm') {
       displayInputValue ('km_result', inputValue.value * 0.00001)
       displayInputValue ('yd_result', inputValue.value * 0.010936)
       displayInputValue ('in_result', inputValue.value * 0.3937)
       displayInputValue ('ft_result', inputValue.value * 0.032808)
       displayInputValue ('ml_result', inputValue.value * 0.00006214)
    }
    if (scaleOption[selectScale].id == 'km') {
       displayInputValue ('cm_result', inputValue.value * 100000)
       displayInputValue ('yd_result', inputValue.value * 1093.613)
       displayInputValue ('in_result', inputValue.value * 39370)
       displayInputValue ('ft_result', inputValue.value * 3280.84)
       displayInputValue ('ml_result', inputValue.value * 0.6214)
    }
    if (scaleOption[selectScale].id == 'yd') {
       displayInputValue ('cm_result', inputValue.value * 91.44)
       displayInputValue ('km_result', inputValue.value * 0.0009144)
       displayInputValue ('in_result', inputValue.value * 36)
       displayInputValue ('ft_result', inputValue.value * 3)
       displayInputValue ('ml_result', inputValue.value * 0.00056818181)
    }
    if (scaleOption[selectScale].id == 'in') {
       displayInputValue ('cm_result', inputValue.value * 2.54)
       displayInputValue ('km_result', inputValue.value * 0.0000254)
       displayInputValue ('yd_result', inputValue.value * 0.03)
       displayInputValue ('ft_result', inputValue.value * 0.083333)
       displayInputValue ('ml_result', inputValue.value * 0.000015783)
    }
    if (scaleOption[selectScale].id == 'ft') {
       displayInputValue ('cm_result', inputValue.value * 30.48)
       displayInputValue ('km_result', inputValue.value * 0.000305)
       displayInputValue ('yd_result', inputValue.value * 0.333)
       displayInputValue ('in_result', inputValue.value * 12)
       displayInputValue ('ml_result', inputValue.value * 0.000189)
    }
    if (scaleOption[selectScale].id == 'ml') {
       displayInputValue ('cm_result', inputValue.value * 160934.4)
       displayInputValue ('km_result', inputValue.value * 1.609)
       displayInputValue ('yd_result', inputValue.value * 1760)
       displayInputValue ('in_result', inputValue.value * 63360)
       displayInputValue ('ft_result', inputValue.value * 5280)
    }
  }