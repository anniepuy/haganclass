<script>
                function results() {
                    var name = document.getElementById('name-label').value;
                    var email = document.getElementById('email-label').value;

                    document.write("<h1>Your PowerPoint Project Submission</h1>");
                    document.write("<h3>Here is your graded items</h3>");

                    document.write(name + "<br/>");
                    document.write(period +"br/>");
                
                    if (document.getElementById('1st-label').checked){
                        period = document.getElementById('1st-label').value;
                    } else if(document.getElementById('3rd-label').checked){
                        period = document.getElementById('3rd-label').value;
                    } else if(document.getElementById('4th-label').checked){
                        period = document.getElementById('4th-label').value;
                    } else if(document.getElementById('5th-label').checked){
                        period = document.getElementById('5th-label').value;
                    } else if(document.getElementById('6th-label').checked){
                        period = document.getElementById('6th-label').value;
                    
                    var title-slide;
                    switch (document.getElementsByName('pp_me_lastname')) {
                        case yes:
                            title-slide = "Yes, there was a title slide";
                            break;
                        case no:
                            title-slide = "No, there was no title slide"
                            break;
                    }
                }
            </script>