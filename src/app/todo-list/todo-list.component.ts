import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  /**
   *待辦事項狀態的列舉
   *
   * @memberof TodoListComponent
   */
  TodoStatusType = TodoStatusType;


  /**
   *目前狀態
   *
   * @private
   * @memberof TodoListComponent
   */
  private status = TodoStatusType.All;

    /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框元素實體
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement): void {

    const todo = inputRef.value.trim();

    if(todo){
      this.todoListService.add(todo)
      console.log(inputRef.value)
      inputRef.value = '';
      }
    }

    /**
     * 取得代辦清單
     *
     * @return {Todo[]}
     * @memberof TodoListComponent
     */
    getList(): Todo[] {

      let list: Todo[] = [];
      switch(this.status){

        case TodoStatusType.Active:
        list = this.getRemainingList();
        break;

        case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;

        default:
        list = this.todoListService.getList();
        break;
      }
      return list;
    }

    /**
     * 移除代辦事項
     *
     */
    remove(index: number): void {
      this.todoListService.remove(index)
    }

    removeCompleted(): void {
      this.todoListService.removeCompleted();
    }

    /**
     * 開始編輯待辦事項
     */
    edit(todo: Todo): void {
      todo.editable = true;
    }

    /**
     * 更新待辦事項
     */
    update(todo: Todo, newTitle:string): void{
      const title = newTitle.trim();

      //如果有輸入名稱則修改事項名稱
      if(title){
        todo.setTitle(title);
        todo.editable = false;
      }
      //如果沒有名稱則刪除該項待辦事項
      else{
        const index = this.getList().indexOf(todo);
        if(index !== -1){
          this.remove(index);
        }
      }
    }

    /**
     * 取消編輯狀態
     */
    cancelEditing(todo: Todo): void{
      todo.editable = false;
    }

    /** 取得未完成的待辦清單 */
    getRemainingList(): Todo[]{
      return this.todoListService.getWithCompleted(false)
    }

    /**
     *取得已完成的代辦事項
     *
     * @returns {Todo[]}
     * @memberof TodoListComponent
     */
    getCompletedList(): Todo[] {
      return this.todoListService.getWithCompleted(true)
    }

    /**
     *設定狀態
     *
     * @param {number} status
     * @memberof TodoListComponent
     */
    setStatus(status: number):void{
      this.status = status
    }

    /**
     *檢查目前狀態
     *
     * @param {number} status
     * @returns {boolean}
     * @memberof TodoListComponent
     */
    checkStatus(status: number): boolean{
      return this.status === status;
    }

    /**
     *取得所有待辦事項清單(不受狀態影響)
     *
     * @returns {Todo[]}
     * @memberof TodoListComponent
     */
    getAllList(): Todo[] {
      return this.todoListService.getList()
    }

    /**
     *所有待辦事項是否都已完成
     *
     * @returns {boolean}
     * @memberof TodoListComponent
     */
    allCompleted(): boolean{
      return this.getAllList().length === this.getCompletedList().length
    }

    setAllTo(completed: boolean): void{
      this.getAllList().forEach((todo)=>{
        todo.setCompleted(completed)
      })
    }

}
