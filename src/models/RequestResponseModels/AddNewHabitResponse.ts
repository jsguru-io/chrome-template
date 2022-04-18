import {HabitData} from "../Habit";

interface AddNewHabitResponse {
    status: number,
    message: string,
    data: HabitData,
}

export default AddNewHabitResponse