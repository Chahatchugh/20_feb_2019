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
var input_type =window.prompt('Enter type')
var input_amount=Number(window.prompt('Enter amount'))
amount_data(input_type,input_amount)

function amount_data(input_type,input_amount)
{
    for(i=0;i<data_content.length;i++)
    {
        if(data_content[i].type_of_data==input_type)
        {
            console.log('Type of data : '+data_content[i].type_of_data)
            console.log('Amount : '+input_amount)
            console.log('Discount : '+data_content[i].percentage_of_discount)
            let reduced_amount =(input_amount*data_content[i].percentage_of_discount)/100
            console.log('Discount amount : '+ reduced_amount)
            let amount_paid=(input_amount-reduced_amount)
            console.log('Amount paid : '+amount_paid)
            
        }
        else if (input_type!=data_content[i].type_of_data)
        {
            console.log('Type do not exist')
        }
        
    }
}

