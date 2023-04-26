import {BaseController} from "./baseController";

export class MainPageController extends BaseController {
    getPhotos() {
        return this.instance.get(`article/all/`)
    }
    getMembers(){
        return this.instance.get( `member/all/`)
    }
    getDocs(){
        return this.instance.get(`docs/all/`)
    }
}
