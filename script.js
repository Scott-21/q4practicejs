function myFunction(){
    //problem 1 :D
    let yesID = prompt("Are you wearing your school ID? (yes/no)", "")
    if (yesID && yesID.toLowerCase() === "yes") {
        alert("Welcome to the event!")
        document.getElementById("test").textContent = "welcome!"
    }
    else {
        document.getElementById("test").textContent = "1. no event welcome"
    }

    //problem 2 :p
    let yesSenior = prompt("Are you a senior citizen? (yes/no)", "")
    let yesStudent = prompt("Are you a student then? (yes/no)", "")
    if (yesSenior === "yes" || yesStudent === "yes") {
        alert("you get discounted !!")
         document.getElementById("test2").textContent = "2. yes discounts"
    } else {
        alert("nvm twin u pay normal fare no discounts for u")
        document.getElementById("test2").textContent = "2. no discounts"
    }

    //problem 3 :O 
    let quizScore = prompt("whats ur quiz score? i wont judge .", "")
    quizScore = Number(quizScore)
    
    if (quizScore >= 90 && quizScore <= 100) {
        alert("excellent job twin")
        document.getElementById("test3").textContent = "3. Excellent!"
    } else if (quizScore >= 75 && quizScore < 90) {
        alert("berry good")
        document.getElementById("test3").textContent = "3. Good job!"
    } else if (quizScore >= 60 && quizScore < 75) {
        alert("well be happy u passed twin")
        document.getElementById("test3").textContent = "3. You passed!"
    } else if (quizScore < 60 && quizScore >= 0) {
        alert("not gonna judge but i think u need to review")
        document.getElementById("test3").textContent = "3. eed to Review"
    } else {
        alert("not valid score, try again .")
        document.getElementById("test3").textContent = "3. Not Valid."
    }
    
    //problem quatro o_o
    let dataSub = prompt("You ran out of data. Please subscribe to the following promos to connect back to your favorite sites. (A, B, C)", "").toUpperCase()  // ← FIXED: added ()
    
    switch (dataSub) { 
        case "A": 
            alert("Promo A: 1GB data valid for 1 day")
            document.getElementById("test4").textContent = "4. Promo A: 1GB data valid for 1 day"
            break;
        case "B": 
            alert("Promo B: 5GB data valid for 7 days") 
            document.getElementById("test4").textContent = "4 Promo B: 5GB data valid for 7 days"
            break;
        case "C":
            alert("Promo C: 10GB data valid for 30 days") 
            document.getElementById("test4").textContent = "4. Promo C: 10GB data valid for 30 days"
            break; 
        default:
            alert("Invalid choice. Please select A, B, or C.")
            document.getElementById("test4").textContent = "4. Invalid choice"
    }
    //smth smth problem 5 maybe 4
    const fullName = prompt("Enter your full name:");
    const lowerName = fullName.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < lowerName.length; i++) {
        const char = lowerName[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            vowelCount++;
    }
}
    const message = "Your name " + fullName +" contains " + vowelCount + " vowels.";
    alert(message);
    document.getElementById("test5").textContent = "5. Your name " + fullName +" contains " + vowelCount + " vowels.";

    // prolem six(seven??)
    const username = prompt("Create a username:");
    let hasSpace = false;

        
    for (let i = 0; i < username.length; i++) {
        if (username[i] === " ") {
            hasSpace = true;
            break; 
        }
    }
    if (hasSpace) {
        document.getElementById("test6").textContent ="6. Username must not contain spaces.";
        alert("no spaces pls, try again");
    } else if (username.length < 6) {
        document.getElementById("test6").textContent ="6. Username must be at least 6 characters.";
        alert("not long enough, it should be like 6 - 7 characters long");
    } else {
        document.getElementById("test6").textContent ="6. Valid username.";
        alert("yippee u did it nice username");
    }

    //problem 7(lucky 7)
    const passwordcorrect = "Grade9JS";
    let attempts = 0;
    let loggedIn = false;

    while (attempts < 3) {
        const password = prompt("Enter password (Attempt " + attempts + " of 3):");
    
        if (password === passwordcorrect) {
            document.getElementById("test7").textContent = "7. Login successful."
            alert("Login successful.");
            loggedIn = true;
            break;
        } else {
            attempts++;
            if (attempts < 3) {
                alert("Incorrect password." + (3 - attempts) +" attempts remaining.");
            }
        }
    }
    if (!loggedIn) {
        document.getElementById("test7").textContent = "7. Account locked. Too many failed attempts."
        alert("Account locked. Too many failed attempts.");
    }
}