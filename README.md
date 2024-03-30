# PayTrack

PayTrack -
Is an app designed for tracking work hours and pay checks for hourly employees. What makes this app unique, is that it shows you, in REAL-TIME, how much money you have made during your shift, and for the week. This makes it convenient to clock yourself in and out of work every day, and see how much money you are making. The app is not intended to be 100% accurate with its paycheck estimates. Instead, it is intended to give you a rough estimate that is usually very close to what you should expect on your real pay check. The actual deductions and pay structures always vary, and this app is not intended to track with that kind of accuracy. The purpose is really just to help you keep track of your work hours, and get a good estimate for how much you should expect on your pay check. Its also a good motivator, for when you need to remind yourself why you're working so many hours.

The app will start with basic functionality in version one, and I intend to improve upon it through multiple updated versions. The first version will include the following features:

1.  a simple clock-in, clock-out.
2.  changes in deduction rates, and pay rate.
3.  a timer, displaying your current shift time (how long you've been working so far).
4.  active net pay and gross pay for the current working shift.
5.  active net pay and gross pay for the current week.
6.  will display if you have reached overtime or not.
7.  will store a history log of the past six weeks of shifts.
8.  will have a history page where you can view the history.
9.  will have a clock-in & clock-out button, a history button.

Restrictions for the first version:

1. Will only work with weekly pay cycles, not set up for bi-weekly. This is because if I added this functionality, I would want to create a setup screen where the user could enter if its weekly or biweekly pay, and the app would adjust the pay cycles and overtime calculations accordingly.
2. Overtime rate is not adjustable.
3. There is no pause or lunch break functionality.
4. No config or settings screen.
5. Deletes records after 6 weeks, to save space in the database.
6. Work week always ends Monday 12:00AM.

The website is built using the MERN stack. The front-end will be installed with Vite instead of create-react-app.
