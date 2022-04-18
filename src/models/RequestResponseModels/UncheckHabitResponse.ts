import Habit from "../Habit";

interface UncheckHabitResponse {
    status: number,
    message: string,
    data: Habit,
}

export default UncheckHabitResponse