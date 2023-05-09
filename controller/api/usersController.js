const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require("path");
const users = db.User;

const controller = {
    list: async (req, res) => {
      try {
        const users = await db.User.findAll();
        const response = {
          meta: {
            status: 200,
            total: users.length,
            url: "api/user",
          },
          data: users,
        };
        res.send(response);
      } catch (error) {
        res.status(500).send(error);
      }
    },
    getById: async (req, res) => {
      try {
        const user = await db.User.findByPk(req.params.id);
        if (!user) {
          return res.status(404).send({
            status: 404,
            error: "Usuario no encontrado",
          });
        }
        const response = {
          meta: {
            status: 200,
            url: `api/user/${user.id}`,
          },
          data: user,
        };
        res.send(response);
      } catch (error) {
        res.status(500).send(error);
      }
    },
  }
  
  module.exports = controller;
  