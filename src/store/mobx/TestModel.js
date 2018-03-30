import { observable, computed, autorunAsync, action } from "mobx";
class Test {
    @observable title = "zhangsan";
    @action changeTitle() {
        this.title = (this.title == "zhangsan" ? "lisi" : "zhangsan");
    }
}
export default new Test();