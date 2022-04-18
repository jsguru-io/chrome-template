
interface GetHabitsByDateRangeRequest {
    data: {
        startDate: string, // 'mm/dd/yyyy'
        endDate: string, // 'mm/dd/yyyy', not included
    },
    typeRequest: string
}

export default GetHabitsByDateRangeRequest