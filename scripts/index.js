function changestage()
        {
            var obj = document.getElementById("selected");
            var idx = obj.selectedIndex;
            var opt = document.getElementById(String(idx));
            var txt = opt.value; 
            var img = document.getElementById("imgs");
            img.src = "/splatoon-tool/images/resize/"+txt+".jpg";
        }