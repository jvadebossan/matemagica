import {makeAutoObservable, observable, action} from 'mobx'

class HeartStore{
    hearts = 3
    constructor(){
        makeAutoObservable(this)
    }

    increment = (type) => {
        switch(type){
            case '+':
                this.hearts += 1;
                break;
            case '-':
                this.hearts -= 1;
                break;
        }
    }
    reset = () => {
        this.hearts = 3
    }
}

export default new HeartStore()