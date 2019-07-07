class List{
    constructor(){
        this.nums = [];
        this.size = 0;
    }

    _sort(){
        this.nums.sort((a, b) => a - b);
    }

    add(element){
        this.nums.push(element);
        this.size++;
        this._sort();
    }

    remove(index){
        if (index >= this.size) {
            throw new Error('Invalid index');
        } else if (index < 0) {
            throw new Error('Invalid index');
        }

        this.nums.splice(index, 1);
        this.size--;
        this._sort();
    }

    get(index){
        if (index < 0) {
            return;
        } else if (index >= this.size) {
            return;
        }

        return this.nums[index];
    }

}