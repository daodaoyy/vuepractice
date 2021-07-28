const fs = require("fs");
const path = require("path");
const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    console.log('this----', this.ctx)
    await this.ctx.render('index.html')
  }
}

module.exports = HomeController;
