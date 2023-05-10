const Register = require("../Model/RegisterSech");

module.exports = async (req, res) => {
  try {
    console.log(req.body.password)
    




    
    const register = new Register({
      fname: req.body.fname,
      lname: req.body.lname,
      c_address: req.body.c_address,
      p_address: req.body.p_address,
      dob: req.body.dob,
      p_number: req.body.p_number,
      BloodGroup: req.body.bloodgroup,
      garden_name: req.body.garden_name,
      g_number: req.body.g_number,
      email: req.body.email,
      password: req.body.password,
    });

    const a = await register.save();

    res.json(a);
  } catch (error) {
    console.error(error);
  }
};
