export default interface GetHabitWeeklyStatsRequest {
    data: {
        id: string, // HabitID
        numOfWeeks: number, // How many weeks u want to display, beggining with the first week before current week
    },
    typeRequest: string
}