function sr(){ 
    var name = document.getElementById("name").value;
    var runs = document.getElementById("num_of_runs").value;
    var balls = document.getElementById("num_of_balls").value;
    var strike_rate = (runs * 100) / balls;
    strike_rate = strike_rate.toFixed(2);

    if (strike_rate >= 120){
        document.getElementById("result").innerHTML = name + " " + "strike rate is" + " " + strike_rate + ". It looks a like that you are a passionate T20 Player.";
    }
    else if (strike_rate >= 70 && strike_rate < 120){
            document.getElementById("result").innerHTML = name + " " + "strike rate is" + " " + strike_rate + ". It looks a like that you are a passionate ODI Player.";
        }
    else if (strike_rate > 0 && strike_rate < 70){
            document.getElementById("result").innerHTML = name + " " + "strike rate is" + " " + strike_rate + ". It looks a like that you are a passionate TEST Player.";
        }
    
}