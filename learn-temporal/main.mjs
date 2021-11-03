import { Temporal } from "@js-temporal/polyfill";
const tc39meetings = [
  {
    dateTime: "2019-01-28T10:00",
    timeZone: "America/Phoenix",
  },
  {
    dateTime: "2019-03-26T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-06-04T10:00",
    timeZone: "Europe/Berlin",
  },
  {
    dateTime: "2019-07-23T10:00",
    timeZone: "America/Los_Angeles",
  },
  {
    dateTime: "2019-10-01T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-12-03T10:00",
    timeZone: "America/Los_Angeles",
  },
];

// To follow the meetings remotely from Tokyo, calculate the times you would
// need to join:
const localTimeZone = Temporal.PlainDateTime.from("2021/09/16");

console.log(localTimeZone.toString());
