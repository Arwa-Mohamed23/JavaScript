function getUserInfo() {

    var userName = prompt("Enter your name:");
    if (!userName || userName.trim() === "") {
      console.log("Name is required. Please refresh and try again.");
      return;
    }
  
    var gradesInput = prompt("Enter your grades:");
  
    var gradesArray = gradesInput.split(",");
  
    console.log("Welcome, " + userName);
    console.log("Your Grades:");
    console.table(gradesArray);
  
    var total = 0;
    for (var i = 0; i < gradesArray.length; i++) {
      total += parseFloat(gradesArray[i]);
    }
    var averageGrade = total / gradesArray.length;
    console.log("Average Grade:", averageGrade);
  }
  
  getUserInfo();