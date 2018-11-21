class Tribute {
  static comment(req, res) {
    console.log('You posted a tribute', req.body);
  }

  static fetchTributes(req, res) {
    console.log('You fetched tributes');
  }
}

export default Tribute;
