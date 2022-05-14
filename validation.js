
            function validateForm(){
                var x = document.forms["myForm"]["fname"].value;
                if (x ==""){
                    alert("required fields must be entered");
                    return false;
                }

                var y = document.forms["myForm"]["pname"].value;
                if (y ==""){
                    alert("Enter Your Password");
                    return false;
            }
        }
            
        