import Habit from "../Habit"

interface GetHabitsByDateResponse {
    status: number,
    message: string,
    data: Habit[],
}

export default GetHabitsByDateResponse