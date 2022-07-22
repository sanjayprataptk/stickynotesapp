var note=document.getElementById("add_note");
note.oncontextmenu = rightClick;
note.onclick=hideMenu;

function hideMenu() {
    document.getElementById(
        "toolbar").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();
    if (document.getElementById(
        "toolbar").style.display == "block")
        hideMenu();
    else {
        var menu = document
            .getElementById("toolbar")
              
        menu.style.display = 'block';
        menu.style.left = e.pageX +13+ "px";
        menu.style.top = e.pageY + 15+"px";
    }
}


function formatDoc(sCmd) {
  
   document.execCommand(sCmd, false);
    
}



