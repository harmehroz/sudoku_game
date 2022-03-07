var h2 = document.querySelector('.h2');
function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 49 && x <= 57))
        return true;
    else
        return false;
}
var table = document.querySelector('.table');
var easy = [[2,null,5,null,null,9,null,null,4],
            [null,null,null,null,null,null,3,null,7],
            [7,null,null,8,5,6,null,1,null],
            [4,5,null,7,null,null,null,null,null],
            [null,null,9,null,null,null,1,null,null],
            [null,null,null,null,null,2,null,8,5],
            [null,2,null,4,1,8,null,null,6],
            [6,null,8,null,null,null,null,null,null],
            [1,null,null,2,null,null,7,null,8]];

var easybutton = document.querySelector(".easy");
window.addEventListener("load",(e)=>{
    easybutton.style.border = "2px solid blue";
    mediumbutton.style.border = null;
    hardbutton.style.border = null;

    let tr = table.firstElementChild;
    for(let i=0; i<9; i++)
    {
        let td = tr.firstElementChild;
        for(let j=0; j<9; j++)
        {
            
            td.firstElementChild.value = easy[i][j];
            td.firstElementChild.addEventListener("input",(e)=>{
                check(e);
            });
            td.firstElementChild.addEventListener("mouseup",(e)=>{
                highlight(e);
            });
            

            if(easy[i][j]!==null)
            {
                td.firstElementChild.disabled = true;     
            }
            else
            {
                td.firstElementChild.disabled = false;
            }
            td = td.nextElementSibling;

        }
        tr = tr.nextElementSibling;
    }
});
var easy = [[2,null,5,null,null,9,null,null,4],
            [null,null,null,null,null,null,3,null,7],
            [7,null,null,8,5,6,null,1,null],
            [4,5,null,7,null,null,null,null,null],
            [null,null,9,null,null,null,1,null,null],
            [null,null,null,null,null,2,null,8,5],
            [null,2,null,4,1,8,null,null,6],
            [6,null,8,null,null,null,null,null,null],
            [1,null,null,2,null,null,7,null,8]];

easybutton.addEventListener("click",(e)=>{
	h2.innerHTML = "";
    easybutton.style.border = "2px solid blue";
    mediumbutton.style.border = null;
    hardbutton.style.border = null;
    let tr = table.firstElementChild;
    for(let i=0; i<9; i++)
    {
        let td = tr.firstElementChild;
        for(let j=0; j<9; j++)
        {
            td.firstElementChild.setAttribute("class", "cell");
            td.firstElementChild.style.backgroundColor = "";
            td.firstElementChild.value = easy[i][j];
            if(easy[i][j]!==null)
            {
                td.firstElementChild.disabled = true;     
            }
            else
            {
                td.firstElementChild.disabled = false;
            }
            td = td.nextElementSibling;

        }
        tr = tr.nextElementSibling;
    }
});
var medium = [[null,null,6,null,9,null,2,null,null],
            [null,null,null,7,null,2,null,null,null],
            [null,9,null,5,null,8,null,7,null],
            [9,null,null,null,3,null,null,null,6],
            [7,5,null,null,null,null,null,1,9],
            [1,null,null,null,4,null,null,null,5],
            [null,1,null,3,null,9,null,8,null],
            [null,null,null,2,null,1,null,null,null],
            [null,null,9,null,8,null,1,null,null]];

var mediumbutton = document.querySelector(".medium");

mediumbutton.addEventListener("click",(e)=>{
	h2.innerHTML = "";
    mediumbutton.style.border = "2px solid blue";
    easybutton.style.border = null;
    hardbutton.style.border = null;
    let tr = table.firstElementChild;
    for(let i=0; i<9; i++)
    {
        let td = tr.firstElementChild;
        for(let j=0; j<9; j++)
        {
            
            td.firstElementChild.value = medium[i][j];
            // td.firstElementChild.addEventListener("change",check);
            td.firstElementChild.style.backgroundColor = "";
            td.firstElementChild.setAttribute("class", "cell");
            if(medium[i][j]!==null)
            {
                td.firstElementChild.disabled = true;     
            }
            else
            {
                td.firstElementChild.disabled = false;
            }
            td = td.nextElementSibling;

        }
        tr = tr.nextElementSibling;
    }
});

var hard = [[null,null,null,8,null,null,null,null,null],
            [7,8,9,null,1,null,null,null,6],
            [null,null,null,null,null,6,1,null,null],
            [null,null,7,null,null,null,null,5,null],
            [5,null,8,7,null,9,3,null,4],
            [null,4,null,null,null,null,2,null,null],
            [null,null,3,2,null,null,null,null,null],
            [8,null,null,null,7,null,4,3,9],
            [null,null,null,null,null,1,null,null,null]];

var hardbutton = document.querySelector(".hard");
hardbutton.addEventListener("click",(e)=>{
 	h2.innerHTML = "";
    hardbutton.style.border = "2px solid blue";
    mediumbutton.style.border = null;
    easybutton.style.border = null;

    let tr = table.firstElementChild;
    for(let i=0; i<9; i++)
    {
        let td = tr.firstElementChild;
        for(let j=0; j<9; j++)
        {
            
            td.firstElementChild.value = hard[i][j];
            // td.firstElementChild.addEventListener("change",check);
            td.firstElementChild.style.backgroundColor = "";
            td.firstElementChild.setAttribute("class", "cell");
            if(hard[i][j]!==null)
            {
                td.firstElementChild.disabled = true;     
            }
            else
            {
                td.firstElementChild.disabled = false;
            }
            td = td.nextElementSibling;

        }
        tr = tr.nextElementSibling;
    }
});

function check(e){
	var validate=[];
    let tr = table.firstElementChild;
    for(let i=0;i<9;i++)
    {
        validate[i]=[];
        let td = tr.firstElementChild;
        for(let j=0;j<9;j++)
        {
            validate[i][j]=td.firstElementChild.value;
            td = td.nextElementSibling;
        }
        tr = tr.nextElementSibling;
    }
    var id = e.target.id;
    var r_index = parseInt(id[0]);
    var c_index = parseInt(id[1]);
    var r = validate[r_index];
    var c = [];
    let answer = false;
    for(i=0; i<9; i++)
    {
    	c.push(validate[i][c_index]);
    }
    console.log(r_index);
    console.log(c_index);
   	for(let i in r)
   	{
          
   		if(r[i]==validate[r_index][c_index] && i!=c_index)
   		{
            answer=true;
   			break;
   		}
   	}
       if(answer==false)
       {
        for(let i in c)
        {
            if(c[i]==validate[r_index][c_index] && i!=r_index)
            {
                
                answer=true;
                break;
            }
            
        }
       }
       if(answer==false)
       {
           var r_start = r_index - r_index%3;
           var c_start = c_index - c_index%3;
           for(let i=r_start;i<r_start+3;i++)
           {
               for(let j=c_start;j<c_start+3;j++)
               {
                         if(validate[i][j]==validate[r_index][c_index] && (r_index!=i && c_index!=j))
                         {
                             answer=true;
                             break;
                         }
               }
           }
       }
       if(answer==true)
       {
        document.getElementById(id).setAttribute("class","redcell");
       }
       else
       {
        document.getElementById(id).setAttribute("class","blackcell");
       }
       e.target.backgroundColor
   	

    	
    
}
function highlight(e)
{
	h2.innerHTML = "";
	let highlight=[];
    let tr = table.firstElementChild;
    for(let i=0;i<9;i++)
    {
        highlight[i]=[];
        let td = tr.firstElementChild;
        for(let j=0;j<9;j++)
        {
            highlight[i][j]=td.firstElementChild;
            td.firstElementChild.style.backgroundColor = ""; 
            if(highlight[i][j].value==e.target.value && highlight[i][j].value!=="")
            {
            	highlight[i][j].style.backgroundColor = "aquamarine";
            }
            td = td.nextElementSibling;
        }
        tr = tr.nextElementSibling;
    }
    let id = e.target.id;
    let r_index = parseInt(id[0]);
    let c_index = parseInt(id[1]);
    let r = highlight[r_index];
    let c = [];
    for(i=0; i<9; i++)
    {
    	c.push(highlight[i][c_index]);
    }
   	for(let i of r)
   	{
   		if(!(i.getAttribute("class")==="redcell" || i.getAttribute("class")==="blackcell" ||i.style.backgroundColor=="aquamarine"))
   		{
    		i.style.backgroundColor = "#EFEFEF";
    	}
   	}
      
    for(let i of c)
    {
    	if(!(i.getAttribute("class")==="redcell" || i.getAttribute("class")==="blackcell" ||i.style.backgroundColor=="aquamarine"))
    	{
    		i.style.backgroundColor = "#EFEFEF";
    	}
    }
    let r_start = r_index - r_index%3;
    let c_start = c_index - c_index%3;
    for(let i=r_start;i<r_start+3;i++)
    {
        for(let j=c_start;j<c_start+3;j++)
        {
        	if(!(highlight[i][j].getAttribute("class")==="redcell" || highlight[i][j].getAttribute("class")==="blackcell" ||highlight[i][j].style.backgroundColor=="aquamarine"))
        	{
        		highlight[i][j].style.backgroundColor = "#EFEFEF";
        	}         
        }
    }
    
e.target.style.backgroundColor = 'aliceblue';
    	    
}

var validatebutton = document.querySelector(".validate");
validatebutton.addEventListener("click",(e)=>{


    
    var x;
	var gotNull = false;
    let tr = table.firstElementChild;
    for(let i=0;i<9;i++)
    {
        let td = tr.firstElementChild;
        for(let j=0;j<9;j++)
        {
            x=td.firstElementChild;
            if(x.getAttribute('class')==="redcell")
            {
            	// alert('Sudoku is wrong!,You still have red numbers!!');
            	h2.innerHTML = 'Sudoku is wrong!,You still have red numbers!!';
            	return;
            	// var h2 = document.createElement('H2');
            	// h2.innerHTML = "" 
            }
            
            if(x.value==="")
            {
            	gotNull = true;
            }
            td = td.nextElementSibling;
        }
        tr = tr.nextElementSibling;
    }
    
    if(gotNull===true)
    {
    	// alert('So far so good champ!!');
    	h2.innerHTML = 'So far so good champ!!';
    }
    else
    {
    	// alert('Congratulations, You have solved the sudoko');
    	h2.innerHTML = 'Congratulations, You have solved the sudoko';
    }
});