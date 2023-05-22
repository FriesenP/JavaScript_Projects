function Vote_function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You are old enough to vote";
    document.getElementById("Age").innerHTML = Can_vote + " to vote.";
}
