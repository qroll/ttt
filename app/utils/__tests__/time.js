import { displayTime } from "../time";

Date.now = jest.fn(() => 1487076708000); //14.02.2017

describe("Test time display", () => {
  it("should display the time on the same day", () => {
    let date = "2017-02-14T12:00";
    expect(displayTime(date)).toEqual("12:00pm");
  });

  it("should not pad the displayed time with zero", () => {
    let date = "2017-02-14T04:00";
    expect(displayTime(date)).toEqual("4:00am");
  });

  it("should not pad the displayed time with zero", () => {
    let date = "2017-02-14T16:00";
    expect(displayTime(date)).toEqual("4:00pm");
  });

  it("should display the date on different days", () => {
    let date = "2017-02-13T12:00";
    expect(displayTime(date)).toEqual("13 Feb");
  });

  it("should not pad the displayed day of month with zero", () => {
    let date = "2017-02-01T12:00";
    expect(displayTime(date)).toEqual("1 Feb");
  });
});
