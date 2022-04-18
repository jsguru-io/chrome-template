import Habit from "../Habit";

interface CheckHabitResponse {
    status: number,
    message: string,
    data: Habit,
}

export default CheckHabitResponse