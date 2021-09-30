
var btn = document.getElementById('btn');
        // handle button click
        btn.addEventListener('click',function(){
        	const rbs = document.querySelectorAll('input');
            let score=0;
            for (const rb of rbs) {
                if (rb.checked) {
                    if(rb.className=="correct"){
                        score += 10;

                    }
                    else if(rb.className=="incorrect"){
                        score+=1;
                    }
                    else{
                        score+=0;
                    }

                    
                }
            }
            alert("Your Score is:"+score);

        });