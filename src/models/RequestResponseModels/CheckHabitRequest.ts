import Habit from "../Habit";

interface CheckHabitRequest {
    data: Habit,
    typeRequest: string,
}

export default CheckHabitRequest