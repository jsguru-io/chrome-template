export default interface GetWeeklyAverageHabitCompletionResponse {
    status: number,
    message: string,
    data: {
        efficiencyMean: number,
    }
}