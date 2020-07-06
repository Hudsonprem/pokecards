import React ,{useState} from 'react';
import Card from "./Card";



const CardList = ({poke})=>
{
  return(
        <div>
                {poke.map((user,i) => {

                    var newurl = user.url.slice(user.url.length -4,user.url.length-1);

                    function urlnum(url)
                    {
                    if(url.startsWith("/"))
                    {
                    return url.slice(1);
                    }
                    else if(url.startsWith("n"))
                    {
                    return url.slice(2);
                    }
                    else{
                        return url;
                    }
                    }
                
                    return(
                         <Card
                            key = {i}
                            id= {urlnum(newurl)}
                            name={ user.name }
                            email= {urlnum(newurl)}
                            />
                            )
                    }
                )}
        </div>
    );

}


export default CardList;
