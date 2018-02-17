import moment from "moment";

/*
Converts a string (in RFC2822 or ISO format) or moment 
object into a user-friendly string representation.
If the specified date is on the same day, displays the time only.
Otherwise, displays the day of month and month.
*/
export const displayTime = date => {
  let time = moment(date);
  return time.isSame(moment(), "day")
    ? time.format("h:mma")
    : time.format("D MMM");
};
