export default interface GetHabitWeeklyStatsResponse {
    status: number,
    message: string,
    data: {score: number, weekEndDate: string}[]
}