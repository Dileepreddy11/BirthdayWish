function WishMe(){
      const name= document.getElementById("nameInput").value;

if(name.trim()=="")
{
  alert("Please enter your name.");
  return;
}
setTimeout(function(){
const birth=`Happy birthday to you,${name}🥳🎉💞🎈❤️`;
  document.getElementById("bday").textContent=birth;
},1000);
    }