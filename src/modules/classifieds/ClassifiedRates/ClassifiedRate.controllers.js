import Model from './c'
import BaseController from '../../core/base.controller'

export default class ClassifiedRatesController extends BaseController {
  static async addNewRecord(req, res) {
    console.log(req.body)
    super.addNewRecord(req, res, Model)
  }

  static async getById(req, res) {
    super.getById(req, res, Model)
  }

  static async getList(req, res) {
    super.getList(req, res, Model, '')
  }
  static async getListWithParams(req, res) {
    super.getListWithParams(req, res, Model)
  }

  static async updateRecord(req, res) {
    super.updateRecord(req, res, Model)
  }
  static async deleteRecord(req, res) {
    super.deleteRecord(req, res, Model)
  }
  static async bulkUpdateRecords(req, res) {
    super.bulkUpdateRecords(req, res, Model)
  }
}
