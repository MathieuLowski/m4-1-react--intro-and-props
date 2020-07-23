After forking this into your class org, you can add the lectures slides, and or notes, here for easy student access.

//////////////////////////////PRACTICE EXERCISE/////////////////////////////////////////
Rewrite the css into style components.
CSS:
.btn{
color:tomato;
font-weight: bold;
padding: 20px;
}

.btn:hover, btn:focus{
transform: translateY(-3px);
}
.icon{
width:32px;
height: 32px;
}

EXPRESS:
const Button = styles.button`color:tomato; font-weight: bold; padding: 20px; &:hover, &:focus{ transform: translateY(-3px); }`;
const Icon = styles.i`width:32px; height:32px;`;
function IconsButton(props) =>{
<button>
<i className="icon">
{props.icon}
</i>
{props.children}
</button>
}

//////////////////////////////PRACTICE EXERCISE/////////////////////////////////////////
Rewrite the css into style components.

.paragraph{
font-size:18px;
line-height:1.4;
color: #333;
}
.paragraph strong{
color: red;
}
.paragraph em{
color:#666;
}

EXPRESS:
const Par = styles.p`font-size:18px; line-height:1.4; color: #333;`;
function FantasticStory(props){
return(

<div>
<Par>
The <strong> quick</strong> red fox juped over the <em>lazy</em> dog.
</Par>
<Par>
The end.
</Par>
</div>
)
}
