function sum()
{
    sum_of_number =0;
   for(var i=1;i<arguments.length;i++)
   {
        sum_of_number +=Number(arguments[i])
   }

   return sum_of_number
}

sum(2,4,5,6,5,12)