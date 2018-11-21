const Validator = {
  runValidations: (req, res, next) => {
    // check for required fields
    const expectedProperties = ['name', 'email', 'comment'];
    const missingProperties = expectedProperties.reduce((acc, item) => { // eslint-disable-line
      if (!req.body[item]) {
        acc.push(item);
      }
      return acc;
    }, []);

    if (missingProperties.length > 0) {
      return res.status(400).json({
        message: 'Missing properties',
        missingProperties,
      });
    }

    // validate fields
    const errors = Validator.validateFields(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        message: 'client error',
        errors,
      });
    }
    return next();
  },
  validateFields: (payload) => {
    const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    const errors = [];
    if (!payload.name || (payload.name.trim() === '')) {
      errors.push('Enter a valid name');
    }
    if (!payload.comment || (payload.comment.trim() === '')) {
      errors.push('Message cannot be empty');
    }
    if (!payload.email || (payload.email.trim() === '')) {
      errors.push('Enter a valid email address');
    }
    if (!emailRegex.test(payload.email)) {
      errors.push('Provided email address is invalid');
    }

    return errors;
  },
};

export default Validator;
