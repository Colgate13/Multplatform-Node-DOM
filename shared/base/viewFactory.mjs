import NotImplementedException from "../notImplementedExeception.mjs"

export default class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name);
  }
}