import { ToDoData } from "../ToDo";

export interface AddNewToDoRequest {
  data: ToDoData;
  typeRequest: string;
}
