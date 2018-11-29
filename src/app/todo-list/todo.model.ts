/**
 * 待辦事項的資料物件模型
 *
 * @export
 * @class Todo
 */

export class Todo {

  /**
   * 事項名稱
   * @private
   * @memberof Todo
   */
  private title = ''

  /**
   * 完成與否
   * @private
   * @memberof Todo
   */
  private completed = false

    /**
     * 是否處於編輯模式
     *
     */
    private editMode = false;

    /**
     * 取得此事是否處於編輯模式
    */
   get editing(): boolean {
     return this.editMode
   }

    /**
     * 設定此事向是否可被編輯
    */
   set editable(bl: boolean){
     this.editMode = bl;
   }

    /**
     * Creates an instance of Todo.
     *
     * @param {string} title - 待辦事項的名稱
     * @memberof Todo
     */
    constructor(title: string) {
      this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
    }

    /**
     * 設定事項名稱
    */
   setTitle(title: string): void {
     this.title = title
   }

  /**
   * 此事項是否已經完成
   *
   * @readonly
   * @type {boolean}
   * @memberof Todo
   */
  get done(): boolean {
    return this.completed;
  }

  /**
   * 設定是否完成
   */
  setCompleted(completed: boolean): void{
    this.completed = completed
  }

  /**
   * 取得事項名稱
   *
   * @returns {string}
   * @memberof Todo
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 來回切換完成狀態
   *
   * @memberof Todo
   */
  toggleCompletion(): void {
    this.completed = !this.completed;
  }


}
