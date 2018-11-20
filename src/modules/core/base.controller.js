class BaseController {
  addNewRecord(req, res) {
    console.log('Iam the base controller')
  }
}

class childController extends BaseController {
  addNewRecord(req, res) {
    console.log('i am the child controller')
    super.addNewRecord(req, res)
  }
}

var c = new childController()
c.addNewRecord()

var b = new BaseController()
b.addNewRecord()
