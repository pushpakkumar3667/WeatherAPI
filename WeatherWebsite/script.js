window.onload=function()
{
    const fix="http://api.openweathermap.org/data/2.5/weather?q=";
    let state=document.querySelector("#handel").value;
    let ctry=","+"IN";
    let ky="&APPID="+"2368b1d8d1a76ad602b16fb8a033e412";
    let prod=fix+state+ctry+ky;
    
    
    
    $.ajax(
        {
            type : 'GET',
            url : prod,
            success :function(data)
            {

                $(data.main).each(function(index,value)
                {

                    var goal=value.temp-273;
                    document.querySelector("#tmpr").innerText=goal.toFixed(2);
                });
                $(data.cod).each(function(index,value)
                {

                    var golag=value;
                    document.querySelector("#statename").innerText=golag;
                });

                // $.ajax(
                //     {
                //         type : 'GET',
                //         url : prod,
                //         success :function(data)
                //         {
            
                //             $(data.name)
                //             {
                //                 console.log(data.name);
                //             }
            
                //         },
                //         error:function(jqXHR, errorText, error)
                //         {
                //             console.log(errorText,error);
                //         }
                //     }
                // );

            },
            error:function(jqXHR, errorText, error)
            {
                console.log(errorText,error);
            }
        }
    );

    
    
}
