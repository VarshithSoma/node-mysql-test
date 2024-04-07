const db = require("../config/db");
const { post } = require("../routes/postRoutes");
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  async save() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const date = `${yyyy}-${mm}-${dd}`;
    let sql = `
        insert into posts(
            title,
            body,
            created_at
        )
        values('${this.title}', '${this.body}', '${date}')
        `;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "select * from posts;";
    return db.execute(sql);
  }
  static findById(id) {
    try {
      let sql = `select * from posts where id=${id};`;
      return db.execute(sql);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Post;
