export interface TodoListDtoModel {
  id: number;
  title: string;
  isOpen: boolean;
  tasks: TaskDtoModel[];
}

export interface TaskDtoModel {
  id: number;
  title: string;
  isCompleted: boolean;
}
