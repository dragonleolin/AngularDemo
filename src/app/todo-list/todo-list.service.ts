
import { Injectable } from '@angular/core';

//Class
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

  constructor() { }

  /**
   * 取得代辦事項清單
   *
   * @return {string[]}
   * @memberof todoListService
   */
  getList(): Todo[] {
    return this.list;
  }



    /**
     * 新增待辦事項
     *@param {string} title - 代辦事項的標題
    * memberof TodoList istService
    */
    add(title: string): void {
      // 為避免傳入的TITLE是無效值或空白字串稍微判斷一下
      if(title || title.trim()) {
        this.list.push(new Todo(title))
      }
    }

    /**
     * 移除待辦事項
     *
     * @param {number} index - 待辦事項的索引位置
     * @memberof TodoListService
     */
    remove(index: number): void {
      this.list.splice(index, 1)
    }

    /** 取得已完成/未完成清單  */
    getWithCompleted(completed: boolean): Todo[]{
      return this.list.filter(todo => todo.done === completed)
    }

    /**
     *從清單中移除所有已完成之代辦事項
     *
     * @memberof TodoListService
     */
    removeCompleted(): void{
      this.list = this.getWithCompleted(false)
    }
}





