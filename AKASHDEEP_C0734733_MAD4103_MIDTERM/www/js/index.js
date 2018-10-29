
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


document.getElementById("sbutton").addEventListener("click", function () {
    var from = document.getElementById('From').value;
    var to = document.getElementById('To').value;
    var type = document.getElementsByName('type').value;
    var distance = 0.0;
    var fair = 0.0;
    var per_km = 0.81;
    var d = new Date();
    var base = 2.50;
    var service_fee = 1.75;
    var h = d.getHours();
    var distance_charge = 0.0;
    if (h > 9 && h < 12)
    {
        per_km = per_km + (per_km * 20 / 100);
        //alert(per_km);
    }
    if (from == "275 Yorkland Blvd" && to == "CN Tower")
    {
        distance = 22.9;
        distance_charge = (distance * per_km);
        fair = base + (distance_charge) + 1.75;
        fair = fair.toFixed(2);
        // alert(fair);

        if (fair < 5.50)
        {
            fair = 5.50;
        }


        if (type == "direct")
        {

            fair = base + (base * 10 / 100) + (distance_charge) + 1.75;
            fair = fair.toFixed(2);
        }

        distance_charge = distance_charge.toFixed(2);
        document.getElementById("top-div").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("sfrom").innerHTML = from;
        document.getElementById("sto").innerHTML = to;
        document.getElementById("booking-fee").innerHTML = base;
        document.getElementById("distance-charge").innerHTML = distance_charge;
        document.getElementById("service-fee").innerHTML = service_fee;
        document.getElementById("total").innerHTML = fair;



    } else if (from == "Fairview Mall" && to == "Tim Hortons")
    {
        distance = 1.2;
        distance_charge = (distance * per_km);
        fair = 2.50 + (distance_charge) + 1.75;
        fair = fair.toFixed(2);
        if (fair < 5.50)
        {
            fair = 5.50;
        }

        if (type == "direct")
        {
            fair = 2.50 + (2.50 * 10 / 100) + (distance_charge) + 1.75;
            fair = fair.toFixed(2);
        }
        distance_charge = distance_charge.toFixed(2);

        document.getElementById("top-div").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("sfrom").innerHTML = from;
        document.getElementById("sto").innerHTML = to;
        document.getElementById("booking-fee").innerHTML = base;
        document.getElementById("distance-charge").innerHTML = distance_charge;
        document.getElementById("service-fee").innerHTML = service_fee;
        document.getElementById("total").innerHTML = fair;


    } else if (from == "")
    {
        alert("Enter Start Location");
    } else if (to == "")
    {
        alert("Enter Destination");
    } else if (type == "" || type  == null)
    {
        alert("please select ride type");
    } else
    {
        alert("Please enter valid input");
    }
    //  alert(from + to + type + fair);
}); 