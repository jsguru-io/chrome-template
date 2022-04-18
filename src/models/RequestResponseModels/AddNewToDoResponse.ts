import { ToDoData } from "../ToDo";

interface AddNewToDoResponse {
  status: number;
  message: string;
  data: ToDoData;
}

export default AddNewToDoResponse;
