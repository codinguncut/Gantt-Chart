example();

function example() {

var tasks = [
{"startDate":new Date("Sun Dec 09 08:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 09:54:19 EST 2013"),"taskName":"P Job","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 08:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 08:58:43 EST 2014"),"taskName":"E Job","status":"SUCCEEDED"},
{"startDate":new Date("Sun Jan 09 11:08:42 EST 2012"),"endDate":new Date("Sun Feb 09 11:33:42 EST 2013"),"taskName":"D Job","status":"FAILED"},
{"startDate":new Date("Sun May 09 12:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 12:54:56 EST 2012"),"taskName":"F Job","status":"SUCCEEDED"},
{"startDate":new Date("Sat Dec 08 23:12:24 EST 2013"),"endDate":new Date("Sun Dec 09 00:26:13 EST 2014"),"taskName":"A Job","status":"KILLED"}];

var taskStatus = {
    "SUCCEEDED" : "bar",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed"
};

var taskNames = [ "D Job", "P Job", "E Job", "A Job", "N Job", "F Job" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};

