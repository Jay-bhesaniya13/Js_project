
let array=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']



// ********************************************//

// FOR BACKGROUND
let x="#";

for(let i=0;i<6;i++)
    {
       let y= Math.floor( Math.random()*16 );
        x+=array[y] ;
    }
    console.log(x)
    document.querySelector('body').style.backgroundColor=x
    document.getElementById('color').innerHTML=x;


 // ********************************************//


function change_color()
{
    document.getElementById('button_click').play();
     x="#";

    for(let i=0;i<6;i++)
    {
       let y= Math.floor( Math.random()*16 );
        x+=array[y] ;
    }
    console.log(x)
    document.querySelector('body').style.backgroundColor=x
    document.getElementById('color').innerHTML=x;

}

//***********************************************//

function copy()
{
    navigator.clipboard.writeText('x');
    alert(x+'is copied')
}