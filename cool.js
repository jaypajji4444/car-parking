var cars=[],bikes=[],c=0,b=0,camt=0,bamt=0,daily=0;


function car(no,hrs=1)
{
    if(c<=5)
    {
cars[c]=no;
c++;
camt=camt+hrs*50;
console.log("welcome!! car no:"+no)
daily++;

    }
    else
    {
        console.log("Sorry there isnt any space for you!!");
    }
}


function bike(no,hrs=1)
{
    if(b<=5)
    {
        console.log("welcome!! bike no:"+no);
        bikes[b]=no;
        b++;
        bamt=bamt+hrs*20;
        daily++;
    }
    else
    {
        console.log("There is no psace!!");
    }
}

function car_exit(no,hrs)
{
    for(x in cars)
    {
        if(no==cars[x])
        {
            
            if(hrs==1)
            {
                
                console.log("goodbye");
                if(cars.length>=2)
                {
                    
                for(var j=x;j<=cars.length-2;j++)
                {
                    cars[j]=cars[++j];
                    j--;
                }
                delete cars[cars.length-1];
                c--;

                }

                else
                {
                    
                    delete cars[x];
                    c--;
                }
            
            }
            else
            {
                console.log(cars[x]+"car have some extra etra hours")
                hrs=hrs-1;
                console.log("pay extra amt of:"+(hrs*50));
                camt=camt+hrs*50;
                console.log("goodbye");
                if(cars.length>=2)
                {
                    
                for(var j=x;j<=cars.length-2;j++)
                {
                    cars[j]=cars[++j];
                    j--;
                  
                }
                delete cars[cars.length-1];
                c--;
                }

                else
                {
                    delete cars[x];
                    c--;
                }
            
                
                
            }
        }
    }
}

function bike_exit(no,hrs)
{
    for(x in bikes)
    {
        if(no==bikes[x])
        {
            
            if(hrs==1)
            {
                
                console.log("goodbye");
                if(bikes.length>=2)
                {
                    
                for(var j=x;j<=bikes.length-2;j++)
                {
                    bikes[j]=bikes[++j];
                    j--;
                }
                delete bikes[bikes.length-1];
                b--;

                }

                else
                {
                    
                    delete bikes[x];
                    b--;
                }
            
            }
            else
            {
                console.log(bikes[x] +" bike have some extra etra hours")
                hrs=hrs-1;
                console.log("pay extra amt of:"+(hrs*20));
                bamt=bamt+hrs*20;
                console.log("goodbye");
                if(bikes.length>=2)
                {
                    
                for(var j=x;j<=bikes.length-2;j++)
                {
                    bikes[j]=bikes[++j];
                    j--;
                  
                }
                delete bikes[bikes.length-1];
                b--;
                }

                else
                {
                    delete bikes[x];
                    b--;
                }
            
                
                
            }
        }
    }
}

function statements()
{
    console.log("Total cars current:"+c);
    console.log("Total bike current:"+b);
    console.log("Amount from car:"+camt);
    console.log("amount from bike:"+bamt);
    console.log("Total revemue:"+(camt+bamt));
    console.log("vehicles total in :"+daily);
}

bike(13);
bike(16);
bike(12);
bike(34)

bike(16);
car(13);
car(16);
car_exit(16,3);
bike_exit(12,2)
car(22)
bike(32)


statements()
console.log(bikes)
console.log(cars)


