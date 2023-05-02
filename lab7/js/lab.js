// Author: Miyuki Motose
// Date: 5/2/2023

// Constants

function sortUsername(){
    //prompt user for username
    var userName = window.prompt("Please enter your name. I'm going to fix it.");
    console.log("userName =", userName);
    userName = userName.toLowerCase();
    userName.replace(/( )/g, "");
    
    //make string into array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

//Output
document.writeln("Heya! I fixed your name, you're welcome, ", 
    sortUsername(), "</br>");