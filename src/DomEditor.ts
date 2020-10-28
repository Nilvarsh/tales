/**
 * DOMオブジェクトを操作するクラス
 */
export class DomEditor {
  /**
   * 指定したHTMLオブジェクトのテキストを変更する
   * @param id id
   * @param text 置き換えるテキスト
   */
  changeTextById(id: string, text: string) {
    const html: HTMLElement | null = document.getElementById(id);
    // nullじゃない場合
    if (html) {
      html.textContent = text;
    }
  }

  /**
   * HTMLオブジェクトを生成する
   * @param element タグ名
   * @param id セットするid属性
   */
  createElement(element: string, id: string) {
    const existing_id: HTMLElement | null = document.getElementById(id);
    if (existing_id === null) {
      const created_element: HTMLElement = document.createElement(element);
      created_element.setAttribute("id", id);
    }
  }

  /**
   * HTMLオブジェクトに属性を付与する
   * @param id 対象HTMLオブジェクトのid
   * @param setAttrName セットする属性名
   * @param attrName 属性につける名前
   */
  setAttributeById(id: string, setAttrName: string, attrName: string) {
    const element: HTMLElement | null = document.getElementById(id);
    if (element !== null) {
      element.setAttribute(setAttrName, attrName);
    }
  }
}
