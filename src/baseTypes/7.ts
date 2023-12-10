/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  MONDAY = 'workday',
  TUESDAY = 'workday',
  WANSDAY = 'workday',
  THURSDAY = 'workday',
  FRIDAY = 'workday',
  SATURDAY = 'restday',
  SUNDAY = 'restday'
 }
 function isWeekend(day: DayOfWeek): boolean {
   return 'restday' === day;
  }
 
  ;