function showDate() {
    var now = new Date();
    var nowTime = now.toLocaleString();
    var week = now.getDay(); //星期 
    var hour = now.getHours(); //小时
    var day = now.toDateString().substring(8, 10);
    if (day.substring(0, 1) == 0) {
        day = day.substring(1, 2)
    }
    //判断星期几 
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var getWeek = "星期" + weeks[week];
    var sc;
    //判断是AM or PM 
    if (hour >= 0 && hour < 5) {
        sc = '凌晨';
    }
    else if (hour > 5 && hour <= 7) {
        sc = '早上';
    }
    else if (hour > 7 && hour <= 11) {
        sc = '上午';
    }
    else if (hour > 11 && hour <= 13) {
        sc = '中午';
    }
    else if (hour > 13 && hour <= 18) {
        sc = '下午';
    }
    else if (hour > 18 && hour <= 23) {
        sc = '晚上';
    }
    $("#date").html("&nbsp;&nbsp;" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + day + " " + getWeek + " ");
}

function showTime() {
    var now = new Date();
    var hour = now.getHours(); //小时
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hour.toString().length == 1) {
        hour = "0" + hour
    }
    if (minutes.toString().length == 1) {
        minutes = "0" + minutes;
    }
    if (seconds.toString().length == 1) {
        seconds = "0" + seconds;
    }

    var timeValue = hour +":"+ minutes +":"+ seconds;
    //timeValue += ((hours > 12) ? hours - 12 : hours);
    //timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    //timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    timerID = setTimeout("showTime()", 1000);
    timerRunning = true;
    $("#time").html("&nbsp;&nbsp;" + timeValue + "&nbsp;&nbsp;");
}

$(document).ready(function () { showDate(); showTime(); });