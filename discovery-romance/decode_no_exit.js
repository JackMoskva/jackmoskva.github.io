window.onbeforeunload = function () {
};
var exit = true;
function confirmExit() {
    if (exit)
        return " ";
}
function Tick() {
    window.setTimeout("Tick()", 1000);
}
var Timer;
var TotalSeconds;
function CreateTimer(TimerID, Time) {
    Timer = document.getElementById(TimerID);
    TotalSeconds = Time;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}
function Tick() {
    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}
function UpdateTimer() {
    Timer.innerHTML = TotalSeconds;
}
function Tick() {
    if (TotalSeconds <= 0) {
        return false;
    }
    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}
function UpdateTimer() {
    var Seconds = TotalSeconds;
    var Days = Math.floor(Seconds / 86400);
    Seconds -= Days * 86400;
    var Hours = Math.floor(Seconds / 3600);
    Seconds -= Hours * (3600);
    var Minutes = Math.floor(Seconds / 60);
    Seconds -= Minutes * (60);
    var TimeStr = LeadingZero(Minutes) + " Minuten und " + LeadingZero(Seconds) + " Sekunden";
    Timer.innerHTML = TimeStr;
    if ((LeadingZero(Minutes) < 1) && (LeadingZero(Seconds) <= 30)) {
        document.getElementById('timer').setAttribute("class", "warning_timer");
        document.getElementById('timer').setAttribute("className", "warning_timer");
    }
}
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : +Time;
}
Date.prototype.getMonthName = function () {
    var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    return monthNames[this.getMonth()];
}
var now = new Date();
if (now.getMonth() == 11) {
    var current = new Date(now.getFullYear() + 1, 0, 1).getMonthName();
}
else {
    var current = new Date(now.getFullYear(), now.getMonth() + 1, 1).getMonthName();
}
$(document).ready(function () {
    CreateTimer("timer", 779)
    document.getElementById("monthz").innerHTML = current;
    $("#popup-close").on('click', function () {
        $("#popup-wrapper").hide();
    })
    $(".steps-button").each(function () {
        $(this).on("click", function (e) {
            $(this).parents(".question").hide().next().show();
            e.preventDefault;
            return false;
        })
    });
    $(".steps-button-final").on("click", function (e) {
        $("#q4").hide(0, function () {
            $("#final, #v1, #results-header").fadeIn().focus();
        });
        setTimeout(function () {
            $("#v1").hide();
            $("#v2").show();
        }, 2000);
        setTimeout(function () {
            $("#v2").hide();
            $("#v3").show();
        }, 4500);
        setTimeout(function () {
            $("#v3").hide();
            $("#v4").show();
        }, 6000);
        setTimeout(function () {
            $("#v4").hide();
            $("#v5").show();
        }, 8500);
        e.preventDefault;
        return false;
    });
    $(".option").click(function () {
        if ($('.selected').length < 3 || $(this).hasClass('selected')) {
            $(this).toggleClass("selected")
        }
    });
    $(".option2").click(function () {
        if ($('.selected2').length < 3 || $(this).hasClass('selected2')) {
            $(this).toggleClass("selected2")
        }
    });
    $(".option3").click(function () {
        if ($('.selected3').length < 3 || $(this).hasClass('selected3')) {
            $(this).toggleClass("selected3")
        }
    });
    $(".option4").click(function () {
        if ($('.selected4').length < 3 || $(this).hasClass('selected4')) {
            $(this).toggleClass("selected4")
        }
    });

    $("#out").click(function(){
        window.onbeforeunload = null;
        document.location = $("#out").attr("href") + "?" + window.location.href.slice(window.location.href.indexOf('?') + 1);
        return false;
    });
});
