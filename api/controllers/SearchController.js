var request = require('request');
module.exports = {
  search : function(req,res,nex){
    console.log(req.body.street);
    console.log(req.param('street'));
    var street = req.body.street;
    request.get({ url : 'https://integration-controll.herokuapp.com/control/search?s='+street},function(err,response,control){
      console.log('primera respuesta',control);
      request.get({url : 'https://integration-trafic.herokuapp.com/trafic/search?s='+street},function(err,response,trafic){
        console.log('segunda respuesta',trafic);
        return res.view('results', { street : street,trafic : trafic, control : control});
      })
    });
  }
}
