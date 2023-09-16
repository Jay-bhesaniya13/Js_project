let c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let sc=['!', '@' ,'#' ,'$' ,'%' ,'/' ,'*',"'" ];
let num=[0,1,2,3,4,5,6,7,8,9]


function fun()
{
    let pass="";
    c_len=document.getElementById('c_len').value;
    let n_len=document.getElementById('n_len').value;
    let sc_len=document.getElementById('sc_len').value;
   
    if(c_len)
    {
        for(let i=0;i<c_len;i++)
        {
        let y=Math.floor( Math.random()*52 );
        let tmp=c[y];
         pass=pass+tmp;
        
        }
        
    }
    if(sc_len)
    {
        for(let i=0;i<sc_len;i++)
        {
        let y=Math.floor( Math.random()*8 );
        let tmp=sc[y];
         pass=pass+tmp;
        
        }
        
    }
    if(n_len)
    {
        for(let i=0;i<n_len;i++)
        {
        let y=Math.floor( Math.random()*10 );
        let tmp=num[y];
         pass=pass+tmp;
        
        }
       
    }

    document.getElementById('p-text').innerHTML=pass;

}

function copy()
{
    let x=document.getElementById('p-text').innerHTML;
    if(x!= "password")
    {
    navigator.clipboard.writeText(x);
    alert(x+' is copied')
    }
}