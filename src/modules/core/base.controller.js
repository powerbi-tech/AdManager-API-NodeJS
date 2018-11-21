import HTTPStatus from 'http-status'
import constants from '../../config/constants'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export default class BaseController {
  static async addNewRecord(req, res, model) {
    try {
      console.log('calling create controller')
      const newRecord = await model.create(req.body)
      return res.status(HTTPStatus.CREATED).json(newRecord)
    } catch (e) {
      console.log('error:',e)
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
  }

  static async getById(req, res, model) {
    try {

      const record =  await  model.findById(req.params.id)
    
      return res.status(HTTPStatus.OK).json({
        ...record.toJSON()
      })
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
  }

  static async getList(req, res, model,selectFields='') {
    const limit = parseInt(req.query.limit, 0)
    const skip = parseInt(req.query.skip, 0)

    if (limit === 0) {
      limit = constants.DEFAULT_PAGE_SIZE
    }

    model
      .find({},selectFields, (err, records) => {
        if (err) {
          res.status(HTTPStatus.BAD_REQUEST).json(err)
        }
        res.status(HTTPStatus.OK).json(records)
      })
      .limit(limit)
      .skip(skip)
  }

  static async updateRecord(req, res, model) {
    try {
      const modifiedRecord = await model.findById(req.params.id)

      Object.keys(req.body).forEach(key => {
        modifiedRecord[key] = req.body[key]
      })

      return res.status(HTTPStatus.OK).json(await modifiedRecord.save())
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
  }

  static async deleteRecord(req, res, model) {
    try {
      const deletedRecord = await model.findById(req.params.id)

      await deletedRecord.remove()
      return res.sendStatus(HTTPStatus.OK)
    } catch (e) {
      console.log(e)
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
  }
}
