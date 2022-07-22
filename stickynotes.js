const notesclass = document.getElementById("add_note");

let colors=[
    '#FFF8DC','#FFEBCD','#FFE4C4','#B0E0E6','#FFE4E1','#FFF0F5',
    '#FAF0E6','#FAEBD7','#D3D3D3',"#FFFACD","#FFEFD5","#FFDAB9",
    "#DDA0DD","#E6E6FA","#FFB6C1"
];



  
class stickynotes{
    
  constructor(noteid,buttonid,content,col){

    this.noteid=noteid;
    this.buttonid=buttonid;
    this.content=content;
    this.col = col;
        
    this.createnote(noteid,content);
    this.createbutton(buttonid);
  }


  createnote(noteid,content){

    var stickynote=document.createElement('div');
    stickynote.className="notes";
    stickynote.id=noteid;
    stickynote.contentEditable="true";
    stickynote.draggable="true"

    if (content!= ""){
      stickynote.innerHTML=content;
    }
        
    stickynote.setAttribute("placeholder","Type your note")
    stickynote.style.backgroundColor=this.col;
        
    notesclass.append(stickynote)
    stickynote.addEventListener("input", () => {
      updatenotes(noteid, stickynote.innerHTML);
    });
        
  }


  createbutton(buttonid){

    var closebutton = document.createElement('img');
    closebutton.className="close"
    closebutton.id=buttonid;
    closebutton.src="icons/close.png"
    closebutton.title="close"
    notesclass.append(closebutton)

    
    closebutton.onclick=function(){
      var removenote=document.getElementById(buttonid-0.5);
      var removebutton=document.getElementById(closebutton.id)
      
      removefromstorage(buttonid-0.5);
      removebutton.remove();
      removenote.remove();
    }


  }
}


getfromstorage().forEach((note) => {
    let newnnote = new stickynotes(note.noteid,note.buttonid,note.content,note.col);
    
});


function getfromstorage() {
  return JSON.parse(localStorage.getItem("stickynotes"));
}


function savetostorage(notes) {
  localStorage.setItem("stickynotes", JSON.stringify(notes));
}



function updatenotes(id, newcontent) {
  let notes = getfromstorage();
  notes.forEach((note) => {
        if (note.noteid==id){
          note.content=newcontent
        }
  })
  savetostorage(notes);
}


  
function removefromstorage(id) {
    const notes = getfromstorage().filter((note)=>note.noteid!=id);
    savetostorage(notes);
}




function newnotes() {
    let notes = getfromstorage();
    let noteno=Math.floor(Math.random() *100000 );
    let content=""
    let col=colors[Math.floor(Math.random() *15 )]

    let newnnote = new stickynotes(noteno,noteno+0.5,content,col);
    notes.push(newnnote);
    savetostorage(notes);
    location.reload();
}

