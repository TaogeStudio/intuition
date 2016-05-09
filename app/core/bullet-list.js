import bulletStorage from './bullet-storage';

class Bullet {
  constructor(record) {
    this.type = record.type || 0;
    this.status = record.status || 0;
    this.content = record.content || '';
  }
}

export default class BulletList {
  constructor(listName = '') {
    this.name = listName;
    this.bullets = bulletStorage
    .getList(this.name)
    .map(record => new Bullet(record));
  }

  recordify() {
    return ({
      name: this.name,
      records: this.bullets.map(({ type, status, content }) => ({
        type,
        status,
        content,
      })),
    });
  }

  sync() {
    bulletStorage.setList(this.recordify());
  }

  count() {
    return this.bullets.length;
  }

  create(record, index) {
    this.bullets.splice(index || this.count(), 0, new Bullet(record));
    this.sync();
    return this.bullets;
  }

  delete(index) {
    this.bullets.splice(index, 1);
    this.sync();
    return this.bullets;
  }

  edit(record, index) {
    const bullet = this.bullets[index];
    this.bullets[index] = Object.assign(bullet, record);
    this.sync();
    return this.bullets;
  }
};
