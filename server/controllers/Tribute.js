import '@babel/polyfill';
import models from '../models';

const { Tributes } = models;

class Tribute {
  static async comment(req, res) {
    try {
      const [data, created] = await Tributes.findOrCreate({ where: req.body });
      const message = created ? 'Message posted successfully' : 'You have already posted this message';
      const statusCode = created ? 201 : 409;
      return res.status(statusCode).json({ message, data });
    } catch (e) {
      return res.status(500).json({
        message: 'An error occurred',
      });
    }
  }

  static async fetchTributes(req, res) {
    try {
      const data = await Tributes.all();
      const message = data.length ? 'Posted messages' : 'No messages yet.';
      const statusCode = data.length ? 200 : 404;
      return res.status(statusCode).json({ message, data });
    } catch (e) {
      return res.status(500).json({
        message: 'An error occurred',
      });
    }
  }
}

export default Tribute;
