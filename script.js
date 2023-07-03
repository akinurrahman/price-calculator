// Selecting the required elements
const priceInKG = document.querySelector('#priceInKG')
const select = document.querySelector('#select')
const rowThree = document.querySelector('#rowThree')
const gm = document.querySelector('[value="gm"]')
const rs = document.querySelector('[value="RS"]')
const output = document.querySelector('#output')

// Function to update placeholders and radio button values based on the dropdown selection
const updatePlaceholder = () =>{
    if(select.value === "Gram quantity"){
        rowThree.placeholder = "Enter quantity in grams"
        gm.value = "gm"
        rs.value = "RS"
        output.placeholder = "Your bill amount "
        
    } else {
        rowThree.placeholder = "Enter amount of goods"
        rs.value = "gm"
        gm.value = "RS"
        output.placeholder = "Your goods quantity"
        
    } 
}

// Calling the updatePlaceholder function to set initial values
updatePlaceholder()

// Adding event listener to the select dropdown
select.addEventListener('change', updatePlaceholder)

// Function to perform the calculation based on the dropdown selection and input value
const calculation = () =>{
    if(select.value === "Gram quantity" ){
      output.value =  (priceInKG.value / 1000) * rowThree.value
    } else {
        output.value = (rowThree.value * 1000)/priceInKG.value
    }
}

// Adding event listener to the input field for quantity/amount to perform the calculation
rowThree.addEventListener('input',calculation)