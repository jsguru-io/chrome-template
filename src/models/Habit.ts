interface Habit {
    id: string,
    checked: boolean,
    habitName: string,
    strikesGoal: number,
    strikesDone: number,
    dateString: string, // mm/dd/yyyy
    startDate: string
}

export interface HabitWeek {
    id: string,
    habitName: string,
    strikesGoal: number,
    strikesDone: number,
    dates: string[]
}

export interface HabitData {
    id: string,
    habitName: string,
    strikesGoal: number,
    startDate: string,
    endDate: string,
}

export interface CheckedDate {
    dateString: string,  // mm/dd/yyyy
    checked: boolean
}

export default Habit
