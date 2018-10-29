
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
    var type = document.forms["ride-form"]["type"].value;
    var distance = 0.0;
    var fair = 0.0;
    var per_km = 0.81;
    var d = new Date();
    var h = d.getHours();
    if (h > 9 && h < 12)
    {
        per_km = per_km + (per_km * 20 / 100);
        //alert(per_km);
    }
    if (from == "275 Yorkland Blvd" && to == "CN Tower")
    {
        distance = 22.9;
        fair = 2.50 + (distance * per_km) + 1.75;
        fair = fair.toFixed(2);

        if (fair < 5.50)
        {
            fair = 5.50;
        }

        if (type == "direct")
        {
            fair = 2.50 + (2.50 * 10 / 100) + (distance * per_km) + 1.75;
            fair = fair.toFixed(2);
        }


    } else if (from == "Fairview Mall" && to == "Tim Hortons")
    {
        distance = 1.2;
        fair = 2.50 + (distance * per_km) + 1.75;
        fair = fair.toFixed(2);
        if (fair < 5.50)
        {
            fair = 5.50;
        }

        if (type == "direct")
        {
            fair = 2.50 + (2.50 * 10 / 100) + (distance * per_km) + 1.75;
            fair = fair.toFixed(2);
        }


    } else if (from == "")
    {
        alert("Enter value");
    } else if (to == "")
    {
        alert("Enter value");
    } else if (type == "")
    {
        alert("plese select ride type");
    }
    
    else
    {
        alert("Please enter valid input");
    }
    //  alert(from + to + type + fair);
}); 