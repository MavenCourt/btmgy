export type CalendarEventCategory = "activity" | "birthday" | "anniversary" | "other" | "regular";

export type CalendarEvent = {
  id: string;
  title: string;
  category: CalendarEventCategory;
  section: "Month Activities" | "Birthday & Anniversaries" | "Other Activities" | "Regular";
  dateLabel: string;
  time?: string;
  responsibility?: string;
  remarks?: string;
  details?: string;
  days?: number[];
  startDay?: number;
  endDay?: number;
};

export type CalendarMonth = {
  monthIndex: number;
  month: string;
  focus: string;
  regular: CalendarEvent[];
  events: CalendarEvent[];
};

const sundayCore = (
  monthKey: string,
  entries: Array<{ label: string; title: string; responsibility: string; remarks?: string }>,
): CalendarEvent[] =>
  entries.map((entry, index) => ({
    id: `${monthKey}-regular-sunday-${index + 1}`,
    title: `Sunday Worship - ${entry.title}`,
    category: "regular",
    section: "Regular",
    dateLabel: entry.label,
    time: "11am",
    responsibility: entry.responsibility,
    remarks: entry.remarks,
  }));

const weeklyCore = (
  monthKey: string,
  remarks?: string,
  includeSundaySchool = false,
  includeFridayPrayer = false,
): CalendarEvent[] => [
  ...(includeSundaySchool
    ? [
        {
          id: `${monthKey}-regular-sunday-school`,
          title: "Sunday School",
          category: "regular" as const,
          section: "Regular" as const,
          dateLabel: "Sunday",
          time: "3pm",
          responsibility: "Sunday School Department",
          remarks,
        },
      ]
    : []),
  {
    id: `${monthKey}-regular-wednesday`,
    title: "Wednesday Night Service",
    category: "regular",
    section: "Regular",
    dateLabel: "Wednesday",
    time: "6pm",
    responsibility: "Apostle Cordel / Bible Study and Worship teams",
    remarks,
    details: "Prayer, Bible study, worship, and Bible recap as scheduled.",
  },
  ...(includeFridayPrayer
    ? [
        {
          id: `${monthKey}-regular-friday-prayer`,
          title: "Corporate Prayer",
          category: "regular" as const,
          section: "Regular" as const,
          dateLabel: "Friday",
          time: "6pm",
          responsibility: "Sis Gillian",
          remarks,
        },
      ]
    : []),
  {
    id: `${monthKey}-regular-intercession`,
    title: "Intercession Prayer via WhatsApp",
    category: "regular",
    section: "Regular",
    dateLabel: "Saturday",
    time: "6:30am",
    responsibility: "Sis Gillian",
    remarks,
  },
  {
    id: `${monthKey}-regular-dance`,
    title: "Dance Ministry",
    category: "regular",
    section: "Regular",
    dateLabel: "Saturday",
    time: "12-4pm",
    responsibility: "Sis Naomi",
    remarks,
  },
  {
    id: `${monthKey}-regular-youth`,
    title: "Youth Ministry",
    category: "regular",
    section: "Regular",
    dateLabel: "Saturday",
    time: "4pm",
    responsibility: "Bro Cymian",
    remarks,
  },
  {
    id: `${monthKey}-regular-women`,
    title: "Women Ministry",
    category: "regular",
    section: "Regular",
    dateLabel: "2nd Sunday",
    time: "After church",
    responsibility: "Sis Petrunlla",
    remarks,
  },
  {
    id: `${monthKey}-regular-men`,
    title: "Men Ministry",
    category: "regular",
    section: "Regular",
    dateLabel: "3rd Sunday",
    time: "After church",
    responsibility: "Bro Daniel",
    remarks,
  },
];

const earlyRegular = (monthKey: string, remarks?: string, includeSundaySchool = false) => [
  ...sundayCore(monthKey, [
    { label: "1st Sunday", title: "Communion", responsibility: "Sis Delicia; Sis Jackie", remarks },
    { label: "2nd Sunday", title: "Members Day", responsibility: "Sis Petrunlla; Sis Gillian", remarks },
    { label: "3rd Sunday", title: "Visitors Day", responsibility: "Bro Daniel; Sis Naomi", remarks },
    { label: "4th Sunday", title: "Family Day", responsibility: "Sis Marcel; Sis Tracey", remarks },
  ]),
  ...weeklyCore(monthKey, remarks, includeSundaySchool, false),
];

const laterRegular = (monthKey: string) => [
  ...sundayCore(monthKey, [
    { label: "1st Sunday", title: "Communion", responsibility: "Bro Cymian; Sis Tracey; Sis Naomi" },
    { label: "2nd Sunday", title: "Members Empowerment", responsibility: "Sis Petrunlla; Sis Gillian; Sis Inessa" },
    { label: "3rd Sunday", title: "Visitors Day", responsibility: "Bro Daniel; Sis Shevon; Bro Dwayne" },
    { label: "4th Sunday", title: "Family Day", responsibility: "Sis Jacqueline; Sis Marcel; Sis Rose" },
    { label: "5th Sunday", title: "Children/Youth Sunday", responsibility: "Bro Cymian; Sis Inessa; Sis Christ" },
  ]),
  ...weeklyCore(monthKey, undefined, false, true),
];

export const calendar2026Months: CalendarMonth[] = [
  {
    monthIndex: 0,
    month: "January",
    focus: "Prayer Month",
    regular: [
      ...earlyRegular("jan", undefined, true).map((event) => ({
        ...event,
        remarks:
          event.title.includes("Members Day") || event.id.includes("youth") || event.id.includes("women") || event.id.includes("men")
            ? "Not Completed"
            : "Completed",
        responsibility: event.id.endsWith("sunday-school") ? "Sis Inessa John" : event.responsibility,
      })),
    ],
    events: [
      { id: "jan-bday-delicia", title: "Birthday - Sister Delicia Joseph", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Fri 9th", days: [9], time: "-", responsibility: "Sister Delicia Joseph", remarks: "Ack." },
      { id: "jan-bday-rolex", title: "Birthday - Bro Rolex Moore", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Tues 13th", days: [13], time: "-", responsibility: "Bro Rolex Moore", remarks: "Not Ack." },
      { id: "jan-bday-amelia", title: "Birthday - Sis Amelia Vincent", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Wed 28th", days: [28], time: "-", responsibility: "Sis Amelia Vincent", remarks: "Not Ack." },
      { id: "jan-consecration", title: "Consecration, Communion and Covenant Sunday", category: "activity", section: "Month Activities", dateLabel: "Sunday 4th", days: [4], time: "11am", responsibility: "Senior Leader", remarks: "Completed" },
      { id: "jan-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 4th", days: [4], time: "After church", responsibility: "Senior Leader", remarks: "Completed" },
      { id: "jan-prayer-fasting", title: "Prayer & Fasting", category: "activity", section: "Month Activities", dateLabel: "Mon 5th - 25th", startDay: 5, endDay: 25, time: "6:00-6:00", responsibility: "Prayer Ministry", remarks: "Completed" },
      { id: "jan-noon-prayer", title: "Noon Day Prayer", category: "activity", section: "Month Activities", dateLabel: "Fri 9th, 16th, 23rd, 30th", days: [9, 16, 23, 30], time: "12 Noon", responsibility: "Prayer Department", remarks: "Not Completed" },
      { id: "jan-half-night", title: "Half Night Prayer", category: "activity", section: "Month Activities", dateLabel: "Fri 9th, 16th, 23rd, 30th", days: [9, 16, 23, 30], time: "7pm-12am", responsibility: "Prayer Department", remarks: "Completed" },
      { id: "jan-quarterly-leaders", title: "Quarterly Department Leaders Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 11th", days: [11], time: "After church", responsibility: "Senior Leader", remarks: "Completed" },
      { id: "jan-deeper-life", title: "Deeper Life", category: "activity", section: "Month Activities", dateLabel: "Tues 13th - Thurs 15th", startDay: 13, endDay: 15, time: "6:00pm", responsibility: "Senior Leader", remarks: "Completed" },
      { id: "jan-prayer-camp", title: "Prayer Camp", category: "activity", section: "Month Activities", dateLabel: "Sat 17th - Sun 18th", startDay: 17, endDay: 18, time: "All day", responsibility: "Prayer Department", remarks: "Not Completed" },
      { id: "jan-tnm-prayer-rally", title: "TNM National Prayer Rally", category: "activity", section: "Month Activities", dateLabel: "Sat 24th", days: [24], time: "2:00pm", responsibility: "Senior Leader", remarks: "Completed" },
      { id: "jan-prayer-walk", title: "Prayer Walk & Breakfast", category: "activity", section: "Month Activities", dateLabel: "Sunday 25th", days: [25], time: "11:00am", responsibility: "Prayer Department", remarks: "Completed" },
      { id: "jan-kingdom-come", title: "Kingdom Come Deeper Life", category: "other", section: "Other Activities", dateLabel: "29th January", days: [29], time: "6:00", responsibility: "Bro Cymian; Sis Naomi; Bro Adler", remarks: "Attended" },
    ],
  },
  {
    monthIndex: 1,
    month: "February",
    focus: "Bible Study Month",
    regular: earlyRegular("feb", "Complete", false),
    events: [
      { id: "feb-bday-kevon", title: "Birthday - Bro Kevon Archer", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Thur. 5th", days: [5], time: "-", responsibility: "Bro Kevon Archer", remarks: "Not Ack" },
      { id: "feb-bday-shevon", title: "Birthday - Sis Shevon Savory", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Fri 6th", days: [6], time: "-", responsibility: "Sis Shevon Savory", remarks: "Ack." },
      { id: "feb-bday-sidney", title: "Birthday - Bro Sidney Blackman", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Sat. 7th", days: [7], time: "-", responsibility: "Bro Sidney Blackman", remarks: "Ack." },
      { id: "feb-bday-jacqueline", title: "Birthday - Sis Jacqueline Agrippa", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Tues 10th", days: [10], time: "-", responsibility: "Sis Jacqueline Agrippa", remarks: "Ack." },
      { id: "feb-vision", title: "Vision Sunday", category: "activity", section: "Month Activities", dateLabel: "Sunday 1st", days: [1], time: "11:00am", responsibility: "Senior Leader", remarks: "Complete", details: "The source calendar lists this as 11:00pm; 11:00am is shown here to match the normal Sunday worship time." },
      { id: "feb-cslt", title: "CSLT Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 1st", days: [1], time: "After church", responsibility: "Senior Leader", remarks: "Not Complete" },
      { id: "feb-bible-study-launch", title: "Bible Study Launch", category: "activity", section: "Month Activities", dateLabel: "Sunday 8th", days: [8], time: "11am", responsibility: "Bible Study Dep.", remarks: "Complete" },
      { id: "feb-curry-que", title: "Curry-Que", category: "activity", section: "Month Activities", dateLabel: "Monday 23rd", days: [23], time: "12pm", responsibility: "Fundraising Dep.", remarks: "Complete" },
      { id: "feb-mother-assignment", title: "Mother on Assignment", category: "other", section: "Other Activities", dateLabel: "28th February", days: [28], time: "9-5", responsibility: "Sis Petrunlla; Sis Inessa; Sis Nyo", remarks: "Attended" },
    ],
  },
  {
    monthIndex: 2,
    month: "March",
    focus: "Outreach/Missions Month",
    regular: earlyRegular("mar", "Complete", false),
    events: [
      { id: "mar-bday-bethel", title: "Birthday - Bethel Chimezie", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Tuesday 3rd", days: [3], time: "-", responsibility: "Bethel Chimezie", remarks: "Ack" },
      { id: "mar-bday-cymian", title: "Birthday - Cymian Griffith", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Monday 9th", days: [9], time: "-", responsibility: "Cymian Griffith", remarks: "Ack" },
      { id: "mar-bday-petrunlla", title: "Birthday - Petrunlla Joseph", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Monday 16th", days: [16], time: "-", responsibility: "Petrunlla Joseph", remarks: "Ack" },
      { id: "mar-bday-marcelle", title: "Birthday - Marcelle Griffith", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Tuesday 24th", days: [24], time: "-", responsibility: "Marcelle Griffith", remarks: "Ack" },
      { id: "mar-bday-micah", title: "Birthday - Micah Joseph", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Monday 30th", days: [30], time: "-", responsibility: "Micah Joseph", remarks: "Ack" },
      { id: "mar-outreach-launch", title: "Launch of Outreach Program", category: "activity", section: "Month Activities", dateLabel: "Sun. 1st", days: [1], time: "11am", responsibility: "Evangelism & Outreach Dep", remarks: "Complete" },
      { id: "mar-women-outreach", title: "Women Outreach - Visitation & Open-air", category: "activity", section: "Month Activities", dateLabel: "Week of 8th", startDay: 8, endDay: 14, time: "-", responsibility: "Women Outreach", remarks: "Complete", details: "Visitation: 6; open air; Sis Jackie residence; 17 persons; 10 onlookers." },
      { id: "mar-men-outreach", title: "Men Outreach", category: "activity", section: "Month Activities", dateLabel: "Week of 15th", startDay: 15, endDay: 21, responsibility: "Men Outreach", remarks: "Complete", details: "Visitation, open air, and Men Focus Sunday." },
      { id: "mar-children-outreach", title: "Children Outreach", category: "activity", section: "Month Activities", dateLabel: "Week of 22nd", startDay: 22, endDay: 28, responsibility: "Children Outreach", remarks: "Complete", details: "Visitation, open air, and Children Focus Sunday." },
      { id: "mar-youth-outreach", title: "Youth Outreach", category: "activity", section: "Month Activities", dateLabel: "Week of 29th", startDay: 29, endDay: 31, responsibility: "Youth Outreach", remarks: "Complete", details: "Visitation and Youth Focus Sunday." },
      { id: "mar-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sun 1st", days: [1], time: "After church", responsibility: "Senior Leader", remarks: "Complete" },
      { id: "mar-prayer-meal", title: "Prayer for the Meal", category: "activity", section: "Month Activities", dateLabel: "Sat 7th", days: [7], time: "12noon", responsibility: "Care Ministry", remarks: "Not Complete" },
      { id: "mar-buy-block", title: "Launch of Buy a Block Campaign", category: "activity", section: "Month Activities", dateLabel: "Sun 15th", days: [15], time: "11am", responsibility: "Fundraising Dep", remarks: "Complete" },
      { id: "mar-night-worship", title: "Night of Worship", category: "activity", section: "Month Activities", dateLabel: "Fri 27th", days: [27], time: "6pm", responsibility: "Worship and Music Department", remarks: "Postponed 10.4.2026" },
      { id: "mar-palm-sunday", title: "Palm Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 29th", days: [29], time: "11:00am", responsibility: "Easter Committee", remarks: "Complete" },
      { id: "mar-children-youth", title: "Children/Youth Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 29th", days: [29], time: "11am", responsibility: "Sunday School/Youth Ministry", remarks: "Complete" },
      { id: "mar-impact-guyana", title: "Impact Guyana Crusade", category: "other", section: "Other Activities", dateLabel: "7th March, 2026", days: [7], time: "6pm", responsibility: "Apostle Cordel; Sis Petrunlla; Bro Micah", remarks: "Attended" },
      { id: "mar-aog-conclave", title: "AOG Youth Leadership Camp (Conclave)", category: "other", section: "Other Activities", dateLabel: "13-15 March, 2026", startDay: 13, endDay: 15, time: "-", responsibility: "Sis Petrunlla; Bro Cymian; Bro Adler", remarks: "Attended" },
      { id: "mar-sound-mind", title: "Sound Mind Workshop", category: "other", section: "Other Activities", dateLabel: "14 March, 2026", days: [14], time: "9-12.30", responsibility: "Apostle Glenda; 17 persons", remarks: "Complete" },
    ],
  },
  {
    monthIndex: 3,
    month: "April",
    focus: "Easter",
    regular: laterRegular("apr"),
    events: [
      { id: "apr-bday-steven", title: "Birthday - Steven Jones", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Saturday 3rd", days: [3], time: "-", responsibility: "Steven Jones" },
      { id: "apr-bday-jared", title: "Birthday - Jared Staton", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Thursday 29th", days: [29], time: "-", responsibility: "Jared Staton" },
      { id: "apr-prayer-fasting", title: "Prayer & Fasting", category: "activity", section: "Month Activities", dateLabel: "Wed 1st - Tues 7th", startDay: 1, endDay: 7, time: "6:00am-6:00pm", responsibility: "Prayer Dep." },
      { id: "apr-easter-watch", title: "Easter Watch", category: "activity", section: "Month Activities", dateLabel: "Thurs 2nd", days: [2], time: "6:00pm", responsibility: "Easter Committee" },
      { id: "apr-good-friday", title: "Good Friday", category: "activity", section: "Month Activities", dateLabel: "Fri 3rd", days: [3], time: "9:00am", responsibility: "Easter Committee" },
      { id: "apr-march-witness", title: "March of Witness", category: "activity", section: "Month Activities", dateLabel: "Sat 4th", days: [4], time: "9:00am", responsibility: "Easter Committee" },
      { id: "apr-easter-sunday", title: "Easter Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 5th", days: [5], time: "11:00am", responsibility: "Easter Committee" },
      { id: "apr-hat-show", title: "Hat Show", category: "activity", section: "Month Activities", dateLabel: "Sun 5th", days: [5], time: "11:00am", responsibility: "Women Ministry" },
      { id: "apr-kite-distribution", title: "Kite Distribution", category: "activity", section: "Month Activities", dateLabel: "Sun 5th", days: [5], time: "3:00pm", responsibility: "Easter Committee" },
      { id: "apr-night-worship", title: "Night of Worship", category: "activity", section: "Month Activities", dateLabel: "Fri 10th", days: [10], time: "6:00pm", responsibility: "Worship Dep" },
      { id: "apr-funeral", title: "Funeral", category: "activity", section: "Month Activities", dateLabel: "Mon 13th", days: [13], time: "11am", responsibility: "Sam" },
      { id: "apr-baptism", title: "Baptism", category: "activity", section: "Month Activities", dateLabel: "Wed 15th", days: [15], time: "7:00pm", responsibility: "Bro Alex Bobsemple" },
      { id: "apr-quarterly-leaders", title: "Quarterly Department Leaders Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 19th", days: [19], time: "After church", responsibility: "Senior Leader" },
      { id: "apr-youth-conference", title: "Youth Conference", category: "activity", section: "Month Activities", dateLabel: "Sat. 25th", days: [25], time: "9:00am", responsibility: "Youth Ministry" },
      { id: "apr-bible-quiz", title: "Individual - Bible Quiz Competition", category: "activity", section: "Month Activities", dateLabel: "Wed. 29th", days: [29], time: "6:00pm", responsibility: "Bible Study Dep." },
    ],
  },
  {
    monthIndex: 4,
    month: "May",
    focus: "Women Month",
    regular: laterRegular("may"),
    events: [
      { id: "may-bday-kevon", title: "Birthday - Kevon Archer", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Saturday 2nd", days: [2], time: "-", responsibility: "Kevon Archer" },
      { id: "may-bday-oni", title: "Birthday - Oni Ponton", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Monday 4th", days: [4], time: "-", responsibility: "Oni Ponton" },
      { id: "may-bday-dwayne", title: "Birthday - Dwayne Joseph", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Wed 20th", days: [20], time: "-", responsibility: "Dwayne Joseph" },
      { id: "may-bday-gail", title: "Birthday - Gail Kirkman", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Sunday 24th", days: [24], time: "-", responsibility: "Gail Kirkman" },
      { id: "may-anniv-joseph", title: "Anniversary - Cordel & Petrunlla Joseph", category: "anniversary", section: "Birthday & Anniversaries", dateLabel: "Mon 25th", days: [25], time: "-", responsibility: "Cordel & Petrunlla Joseph" },
      { id: "may-tnm-conference", title: "TNM National Conference", category: "activity", section: "Month Activities", dateLabel: "Fri 1st - Tues 5th", startDay: 1, endDay: 5, responsibility: "Senior Leader", details: "Saint Stanislaus College, Brickdam." },
      { id: "may-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Monday 18th", days: [18], time: "7pm", responsibility: "Senior Leader" },
      { id: "may-women-conference", title: "Women Conference", category: "activity", section: "Month Activities", dateLabel: "Date not listed", time: "10am", responsibility: "Women Department" },
      { id: "may-baptism", title: "Baptism", category: "activity", section: "Month Activities", dateLabel: "Tues 5th", days: [5], time: "8am", responsibility: "Sis Doreen Small" },
      { id: "may-mothers-day", title: "Mother Day", category: "activity", section: "Month Activities", dateLabel: "Sun. 10th", days: [10], time: "11am", responsibility: "Mother's Day Committee" },
      { id: "may-cultural-day", title: "Cultural Day", category: "activity", section: "Month Activities", dateLabel: "Sat 23rd", days: [23], time: "2pm", responsibility: "Women Department" },
      { id: "may-barbeque", title: "Barbeque", category: "activity", section: "Month Activities", dateLabel: "Sat 23rd", days: [23], time: "12pm", responsibility: "Fundraising Dep." },
      { id: "may-family-day", title: "Family Day - Botanical Gardens", category: "activity", section: "Month Activities", dateLabel: "Sun 24rd", days: [24], time: "10am", responsibility: "Care Committee" },
      { id: "may-pentecost", title: "Pentecost Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun. 24th", days: [24], time: "11am", responsibility: "Easter Committee" },
      { id: "may-children-youth", title: "Children/Youth Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 31st", days: [31], time: "11am", responsibility: "Sunday School/Youth Ministry" },
    ],
  },
  {
    monthIndex: 5,
    month: "June",
    focus: "Men Month",
    regular: laterRegular("jun"),
    events: [
      { id: "jun-bday-pascal", title: "Birthday - Pascal Emmanuel", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Mon 1st", days: [1], time: "-", responsibility: "Pascal Emmanuel" },
      { id: "jun-bday-elijah", title: "Birthday - Elijah Wright", category: "birthday", section: "Birthday & Anniversaries", dateLabel: "Tues 16th", days: [16], time: "-", responsibility: "Elijah Wright" },
      { id: "jun-prayer-meal", title: "Prayer for the Meal", category: "activity", section: "Month Activities", dateLabel: "Sat 13th", days: [13], time: "12noon", responsibility: "Care Ministry" },
      { id: "jun-pastries", title: "Pastries Competition", category: "activity", section: "Month Activities", dateLabel: "Sun 14th", days: [14], time: "After church", responsibility: "Women Ministry" },
      { id: "jun-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 21st", days: [21], time: "After church", responsibility: "Senior Leader" },
      { id: "jun-fathers-day", title: "Father's Day", category: "activity", section: "Month Activities", dateLabel: "Sun 21st", days: [21], time: "11am", responsibility: "Committee" },
      { id: "jun-baptism", title: "Baptism", category: "activity", section: "Month Activities", dateLabel: "Sat 27th", days: [27], time: "8am", responsibility: "Pastor" },
      { id: "jun-anniversary", title: "Church Anniversary & Awards", category: "activity", section: "Month Activities", dateLabel: "Sun 28th", days: [28], time: "2:00PM", responsibility: "Anniversary & Awards Committee" },
    ],
  },
  {
    monthIndex: 6,
    month: "July",
    focus: "Youth Month",
    regular: [],
    events: [
      { id: "jul-quarterly-leaders", title: "Quarterly Department Leaders Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 5th", days: [5], time: "After church", responsibility: "Senior Leader" },
      { id: "jul-youth-camp", title: "Youth Camp", category: "activity", section: "Month Activities", dateLabel: "Mon 6th - Sat 11th", startDay: 6, endDay: 11, time: "-", responsibility: "Youth Ministry" },
      { id: "jul-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 12th", days: [12], time: "After church", responsibility: "Senior Leader" },
      { id: "jul-wedding", title: "Wedding", category: "activity", section: "Month Activities", dateLabel: "Sat 25th", days: [25], time: "4pm" },
      { id: "jul-bible-quiz", title: "Departmental - Bible Quiz Competition", category: "activity", section: "Month Activities", dateLabel: "Wed. 29th", days: [29], time: "6:00pm", responsibility: "Bible Study Dep." },
    ],
  },
  {
    monthIndex: 7,
    month: "August",
    focus: "Children Month",
    regular: [],
    events: [
      { id: "aug-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Monday 24th", days: [24], time: "Online", responsibility: "Senior Leader" },
      { id: "aug-vbs-lodge-sophia", title: "Vacation Bible School - Lodge & Sophia", category: "activity", section: "Month Activities", dateLabel: "Mon 3rd - Fri 7th", startDay: 3, endDay: 7, time: "8:30am", responsibility: "Sunday School Department" },
      { id: "aug-vbs-fun-day", title: "Vacation Bible School - Fun Day", category: "activity", section: "Month Activities", dateLabel: "Sat 8th", days: [8], time: "2:30pm", responsibility: "Sunday School Department" },
      { id: "aug-vbs-closing", title: "Vacation Bible School - Closing Session", category: "activity", section: "Month Activities", dateLabel: "Sun 9th", days: [9], time: "2:00pm", responsibility: "Sunday School Department" },
      { id: "aug-fun-day-fair", title: "Fun Day & Fair", category: "activity", section: "Month Activities", dateLabel: "Sat 29th", days: [29], time: "2pm", responsibility: "Fundraising Dep." },
      { id: "aug-children-youth", title: "Children/Youth Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 30th", days: [30], time: "11am", responsibility: "Sunday School/Youth Ministry" },
    ],
  },
  {
    monthIndex: 8,
    month: "September",
    focus: "Evangelism Month",
    regular: [],
    events: [
      { id: "sep-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 20th", days: [20], time: "After church", responsibility: "Senior Leader" },
      { id: "sep-evan-workshop", title: "Evan Workshop", category: "activity", section: "Month Activities", dateLabel: "Sun 13th", days: [13], time: "11am", responsibility: "Evangelism Dep" },
      { id: "sep-prayer-meal", title: "Prayer for the Meal", category: "activity", section: "Month Activities", dateLabel: "Sat 12th", days: [12], time: "12noon", responsibility: "Care Ministry" },
      { id: "sep-crusade", title: "Crusade", category: "activity", section: "Month Activities", dateLabel: "Wed 23rd - Fri 25th", startDay: 23, endDay: 25, time: "6:00pm", responsibility: "Evangelism Dep" },
      { id: "sep-youth-sports", title: "Youth Sports", category: "activity", section: "Month Activities", dateLabel: "Sat 26th", days: [26], time: "10am", responsibility: "Police Ground" },
      { id: "sep-bible-quiz", title: "Categories - Bible Quiz Competition", category: "activity", section: "Month Activities", dateLabel: "Wed. 30th", days: [30], time: "6:00pm", responsibility: "Bible Study Dep." },
    ],
  },
  {
    monthIndex: 9,
    month: "October",
    focus: "Care Month",
    regular: [],
    events: [
      { id: "oct-quarterly-leaders", title: "Quarterly Department Leaders Meeting", category: "activity", section: "Month Activities", dateLabel: "Sun 18th", days: [18], time: "Online", responsibility: "Senior Leader" },
      { id: "oct-prayer-meal", title: "Prayer for the Meal", category: "activity", section: "Month Activities", dateLabel: "Sun 10th", days: [10], time: "12noon", responsibility: "Care Ministry" },
      { id: "oct-cancer-awareness", title: "Cancer awareness and health day", category: "activity", section: "Month Activities", dateLabel: "Sun 11th", days: [11], time: "2pm", responsibility: "Women Ministry" },
      { id: "oct-harvest", title: "Harvest", category: "activity", section: "Month Activities", dateLabel: "Sun 18th", days: [18], time: "11am", responsibility: "Care Min. Dep" },
      { id: "oct-tnm-convention", title: "TNM National Convention", category: "activity", section: "Month Activities", dateLabel: "Sun 25th", days: [25], time: "2pm", responsibility: "Senior Leader" },
    ],
  },
  {
    monthIndex: 10,
    month: "November",
    focus: "Dance Month",
    regular: [],
    events: [
      { id: "nov-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Sunday 15th", days: [15], time: "After church", responsibility: "Senior Leader" },
      { id: "nov-night-dance", title: "Night of Dance", category: "activity", section: "Month Activities", dateLabel: "Sat 28th", days: [28], time: "6pm", responsibility: "Dance Ministry" },
      { id: "nov-pageant", title: "Women Ministry Pageant", category: "activity", section: "Month Activities", dateLabel: "Sat 28th", days: [28], time: "6pm", responsibility: "Women Ministry", remarks: "Postponed to February" },
      { id: "nov-children-youth", title: "Children/Youth Sunday", category: "activity", section: "Month Activities", dateLabel: "Sun 29th", days: [29], time: "11am", responsibility: "Sunday School/Youth Ministry" },
    ],
  },
  {
    monthIndex: 11,
    month: "December",
    focus: "Christmas",
    regular: [],
    events: [
      { id: "dec-cslt", title: "Church Seniors Leadership Team Meeting", category: "activity", section: "Month Activities", dateLabel: "Monday 21st", days: [21], time: "Online", responsibility: "Senior Leader" },
      { id: "dec-caroling", title: "Caroling", category: "activity", section: "Month Activities", dateLabel: "Fri 11th", days: [11], time: "6pm", responsibility: "Christmas Comm." },
      { id: "dec-youth-social", title: "Youth Social", category: "activity", section: "Month Activities", dateLabel: "Sat 12th", days: [12], time: "4pm", responsibility: "Youth Department" },
      { id: "dec-prayer-meal", title: "Prayer for the Meal", category: "activity", section: "Month Activities", dateLabel: "Sat 12th", days: [12], time: "12noon", responsibility: "Care Ministry" },
      { id: "dec-sunday-school-party", title: "Sunday School Party", category: "activity", section: "Month Activities", dateLabel: "Sun 13th", days: [13], time: "3pm", responsibility: "Sunday School Dep" },
      { id: "dec-christmas-concert", title: "Christmas Concert", category: "activity", section: "Month Activities", dateLabel: "Fri 18th", days: [18], responsibility: "Christmas Comm." },
      { id: "dec-church-social", title: "Church Social", category: "activity", section: "Month Activities", dateLabel: "Sun 20th", days: [20], time: "3pm", responsibility: "Christmas Comm." },
      { id: "dec-christmas-morning", title: "Christmas Morning Service", category: "activity", section: "Month Activities", dateLabel: "Fri 25th", days: [25], time: "6am", responsibility: "Christmas Committee" },
      { id: "dec-bible-quiz", title: "General - Bible Quiz Competition", category: "activity", section: "Month Activities", dateLabel: "Wed. 30th", days: [30], time: "6:00pm", responsibility: "Bible Study Dep." },
      { id: "dec-new-years-eve", title: "New Year's Eve Service", category: "activity", section: "Month Activities", dateLabel: "Thurs 31st", days: [31], time: "9:30pm", responsibility: "Church Leadership" },
    ],
  },
];
