

const insertNumber = (num) => 
{
    let existingNum = $("#result-field").val();
    $("#result-field").val(existingNum + num);
}

const clear_result = () => 
{
    $("#result-field").val("");
}