import { Sequelize, QueryTypes } from "sequelize";

class MySQL {
  constructor() {
    this.sequelize = new Sequelize(
      process.env.SEQUELIZE_DB,
      process.env.SEQUELIZE_USER,
      process.env.SEQUELIZE_PASSWORD,
      {
        host: process.env.SEQUELIZE_HOST,
        dialect: process.env.SEQUELIZE_DIALECT,
      }
    );
  }

  async noted() {
    try {
      await this.sequelize.authenticate();
      console.log("MySQL Connection has been established.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async query(query) {
    return await this.sequelize.query(query);
  }
  async findById(id) {
    return await this.sequelize.query("SELECT * FROM users WHERE id = ?", {
      type: this.sequelize.QueryTypes.SELECT,
      replacements: [id],
    });
  }
  async findByEmail(email) {
    return await this.sequelize.query("SELECT * FROM users WHERE email = ?", {
      type: this.sequelize.QueryTypes.SELECT,
      replacements: [email],
    });
  }
  async findByToken(token) {
    return await this.sequelize.query("SELECT * FROM users WHERE token = ?", {
      type: this.sequelize.QueryTypes.SELECT,
      replacements: [token],
    });
  }
  async add(username, password, email, token, photo) {
    try {
      return await this.sequelize.query(
        "INSERT INTO users (username, password, email, token, photo) VALUES (?, ?, ?, ?, ?)",
        {
          type: this.sequelize.QueryTypes.INSERT,
          replacements: [username, password, email, token, photo],
        }
      );
    } catch (err) {
      return err;
    }
  }
  async actived(token, id) {
    return await this.sequelize.query(
      "UPDATE users SET token = ? WHERE id = ?",
      {
        type: this.sequelize.QueryTypes.UPDATE,
        replacements: [token, id],
      }
    );
  }
  async updatePassword(password, token, email) {
    return await this.sequelize.query(
      "UPDATE users SET password = ? , token = ? WHERE email = ?",
      {
        type: this.sequelize.QueryTypes.UPDATE,
        replacements: [password, token, email],
      }
    );
  }
  async updatePhoto(photo, email) {
    return await this.sequelize.query(
      "UPDATE users SET photo = ? WHERE email = ?",
      {
        type: this.sequelize.QueryTypes.UPDATE,
        replacements: [photo, email],
      }
    );
  }
  async delete(id) {
    return await this.sequelize.query("DELETE FROM bank_swifs WHERE id = ?", {
      type: this.sequelize.QueryTypes.DELETE,
      replacements: [id],
    });
  }
}

export default MySQL;
