export default interface GetHabitStrikesGoalAccomplishmentResponse {
    status: number,
    message: string,
    data: {
        strikesGoal: number,
        weeksInRowAccomplished: number,
        habitname: string,
    }
}