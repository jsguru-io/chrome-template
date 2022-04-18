export type HabitsOccupancy = number // Maps a percent value to a round number. 21.3% -> 21

interface GetHabitsOccupancyByDateResponse {
    status: number,
    message: string,
    data: {habitsOccupancy: HabitsOccupancy},
}

export default GetHabitsOccupancyByDateResponse