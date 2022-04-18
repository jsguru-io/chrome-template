import Habit from "../Habit";

interface UncheckHabitRequest {
    data: Habit,
    typeRequest: string,
}

export default UncheckHabitRequest