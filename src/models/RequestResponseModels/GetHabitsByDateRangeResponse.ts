import Habit, {HabitWeek} from "../Habit"

interface GetHabitsByDateRangeResponse {
    status: number,
    message: string,
    data: HabitWeek[],
}

export default GetHabitsByDateRangeResponse