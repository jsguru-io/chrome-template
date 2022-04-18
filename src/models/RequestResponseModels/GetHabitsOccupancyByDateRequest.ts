
interface GetHabitsOccupancyByDateRequest {
    data: {
        date: string, // mm/dd/yyyy
        id: string, // habitID
    }

    typeRequest: string
}

export default GetHabitsOccupancyByDateRequest