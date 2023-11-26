var date1 = new Date("8/15/2018");
function add_zero(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}
function calc_dur(){
    var currentdate = new Date(); 
    var diff=currentdate.getTime()-date1.getTime();

    var diff_str = ""+ Math.floor(diff / (1000 * 3600 * 24 * 365)) + " years, "
                    + add_zero(Math.floor((diff / (1000 * 3600 * 24))%365)) + " days, "
                    + add_zero(Math.floor((diff / (1000 * 3600))%24)) + " hours, "
                    + add_zero(Math.floor((diff / (1000 * 60))%60)) + " mins, and "
                    + add_zero(Math.floor((diff / (1000))%60)) + " secs.";

    var datetime = currentdate.getFullYear() + "/" 
                    + ((currentdate.getMonth()+1) < 10 ? "0" : "") 
                    + (currentdate.getMonth()+1)  + "/" 
                    + ((currentdate.getDate()) < 10 ? "0" : "") 
                    + (currentdate.getDate())  + " " 

                    + (currentdate.getHours() < 10 ? "0" : "") 
                    + currentdate.getHours() + ":" 
                    + (currentdate.getMinutes() < 10 ? "0" : "") 
                    + currentdate.getMinutes() + ":" 
                    + (currentdate.getSeconds() < 10 ? "0" : "") 
                    + currentdate.getSeconds();
    return [datetime,diff_str];
}

function updateClock() {
    let [datetime,diff_str] = calc_dur();
    document.getElementById("dt-1551").innerHTML= "<p>Now is " + datetime + "</p>" 
    +"<p>Quit? Not possible anymore. </p>"
	+"<p>The website author registered the website merely for a joke, and have successfully defended the Ph.D thesis on August 4th of 2023."
                + "<p>The author have keep this site for: " + diff_str + "</p>";
    setTimeout(updateClock, 1000);
}
updateClock();
