function login(x) {
    waittsec(x);
    console.log("Harshit login successful");
}

function getdata(x) {
    waittsec(x);
    console.log("data fetched");
}

function calculateddata(x) {
    waittsec(x);
    console.log("data calculated for MUKUL");
}

function senddata(x) {
    waittsec(x);
    console.log("data sent to MUKUL");
}

function logout(x) {
    waittsec(x);
    console.log("Harshit logout successful");
}

function waittsec(time) {
    const t = new Date().getTime() + time * 1000;
    while (new Date().getTime() < t) {}   
}

// Sequential calls
login(8);
getdata(5);
calculateddata(3);
senddata(1);
logout(1);
