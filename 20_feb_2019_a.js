let data_content=[                                                                  
    {                                                     
        type_of_data:'grocery',
        percentage_of_discount : 20 ,
    },
    {
        type_of_data:'cloth',
        percentage_of_discount : 30 ,
    },
    {
        type_of_data: 'footwear',
        percentage_of_discount : 40 ,
    },
    {
        type_of_data:'appliances',
        percentage_of_discount : 50 ,
    },
    {
        type_of_data: 'jewellery' ,
        percentage_of_discount : 60 ,
    }
]
let input_type =window.prompt('Enter type')
let input_amount=Number(window.prompt('Enter amount'))
amount_data(input_type,input_amount)

function amount_data(input_type,input_amount)
{
    for(i=0;i<data_content.length;i++)
    {
        if(data_content[i].type_of_data==input_type)
        {  
            let Type_of_data = data_content[i].type_of_data
            let Amount = input_amount
            let Discount =data_content[i].percentage_of_discount
            let reduced_amount =(input_amount*data_content[i].percentage_of_discount)/100
            let Discount_amount = reduced_amount
            let amount_paid=(input_amount-reduced_amount)
            let Amount_paid = amount_paid

            var object=
            [
            {"Type_of_data" : Type_of_data ,
            "Amount" : Amount,
            "Discount" : Discount,
            "Discount_amount" : Discount_amount,
            "Amount_paid" :Amount_paid,}
            ]
            
        }
        else
        {
            console.log('Type do not exist')
        }
        
    }
    
    return object
}


