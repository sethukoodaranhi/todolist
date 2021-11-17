$(function(){
    $('#user_error').hide();
    $('#paswd_error').hide();
    var erroruser=false;
    var errorpswd=false;

    function checkuser()
    {
        var user=$('#username').val();
        
        if(user!="admin")
        {
            $('#user_error').html("Invalid user name");
            $('#user_error').show();
            $('#username').css("border","1px solid red")
            erroruser=true;
        }
        else{
            $('#user_error').hide();
            $('#username').css("border","1px solid green");
        }
    }
    function checkpswd()
    {
        var pswd=$('#pswd').val();
        
        if(pswd!="1234")
        {
            $('#paswd_error').html("invalid password");
            $('#paswd_error').show();
            $('#pswd').css("border","1px solid red");
            errorpswd=true;
        }
        else{
                $('#pswd_error').hide();
                $('#pswd').css("border","1px solid green");
        }
    }
    $('#login').submit(function(){
        erroruser=false;
        errorpswd=false;
        checkuser();
        checkpswd();
        if(erroruser===false && errorpswd===false)
        {
            alert("Successfully Loged");
            return true;
        }
        else{
            alert("Please fill correctly")
            return false;
        }

    });
});