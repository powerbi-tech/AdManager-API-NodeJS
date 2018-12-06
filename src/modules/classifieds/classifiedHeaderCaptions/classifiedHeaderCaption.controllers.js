import Client from './classifiedHeaderCaptions.model'
import BaseController from '../core/base.controller'

export default class ClientController extends BaseController {
  static async addNewRecord(req, res) {
    console.log(req.body)
    super.addNewRecord(req, res, Client)
  }

  static async getById(req, res) {
    super.getById(req, res, Client)
  }

  static async getList(req, res) {
    super.getList(req, res, Client, '')
  }
  static async getListWithParams(req, res) {
    super.getListWithParams(req, res, Publication)
  }

  static async updateRecord(req, res) {
    super.updateRecord(req, res, Client)
  }
  static async deleteRecord(req, res) {
    super.deleteRecord(req, res, Client)
  }
  static async bulkUpdateRecords(req, res) {
    super.bulkUpdateRecords(req, res, Client)
  }
}
