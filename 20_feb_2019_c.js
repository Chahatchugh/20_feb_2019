function add(sum_of_number)
{
    return function(total_sum)
    {
        if (typeof total_sum!='undefined')

        {
            sum_of_number=sum_of_number+total_sum
            return arguments.callee
        }
        else
        {
            return sum_of_number
        }
    }
}
add(1)(2)(3)()