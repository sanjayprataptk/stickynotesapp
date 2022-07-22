const notes = document.querySelectorAll('.notes');

let srcid;
let targetid;

notes.forEach(note => {
  note.addEventListener("dragstart", function dragstarted(e) {
        srcid=note.id
        
    });
    note.addEventListener("dragover", function dragging(e) {
        e.preventDefault();
        
    });
    note.addEventListener("drop", function droping(e) {
        e.preventDefault();
        targetid=e.target.id;
        let stickynotes = getfromstorage();

        let targetindex
        let sourceindex

        for (var j = 0; j < stickynotes.length; j++){
            
            if (stickynotes[j].noteid==targetid){
                targetindex=j
                
            }
            
        }
        for (var j = 0; j < stickynotes.length; j++){
            
            if (stickynotes[j].noteid==srcid){
                sourceindex=j
                
            }
            
        }
        
        let temp=stickynotes[targetindex]
        stickynotes[targetindex]=stickynotes[sourceindex]
        stickynotes[sourceindex]=temp
        
        savetostorage(stickynotes);
        location.reload();
        
        
        
        
        
        
    });


});