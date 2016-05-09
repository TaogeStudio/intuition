const KEY = 'BULLETS';
export default new class bulletStorage {
  constructor() {
    this.data = this.updateFromLocal() || [];
  }

  updateFromLocal() {
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem(KEY));
    } catch(e) {
      console.error('Got something wrong ...');
    }
    return data;
  }

  setList(name, records) {
    this.data = this.updateFromLocal();
    this.data.getList(name).record = records;
    return localStorage.setItem(KEY, JSON.stringify(this.data));
  }

  getList(name) {
    return this.data.find(record => name === record.name) || [];
  }
};
