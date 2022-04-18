import { ToDoData } from "../ToDo";

interface GetToDoResponse {
  status: number;
  message: string;
  data: ToDoData[];
}

export default GetToDoResponse;
