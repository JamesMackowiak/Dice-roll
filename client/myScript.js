function roll()
{
    var d1 = Math.floor((Math.random()*6)+1);
    var d2 = Math.floor((Math.random()*6)+1);
    var d3 = Math.floor((Math.random()*6)+1);
    var d4 = Math.floor((Math.random()*6)+1);
    var d5 = Math.floor((Math.random()*6)+1);


    alert("You rolled " +d1+ ", "+d2+ ", "+d3+ ", "+d4+ ", "+d5);
    return;
}