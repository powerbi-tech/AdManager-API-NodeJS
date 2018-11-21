import HTTPStatus from 'http-status'

import Publication from './publication.model'
import BaseController from '../core/base.controller'

export default class PublicationController extends BaseController {
  static async addNewRecord(req, res) {
    super.addNewRecord(req, res, Publication)
  }

  static async getById(req, res) {
    super.getById(req, res, Publication)
  }

  static async getList(req, res) {
    super.getList(req, res, Publication, 'name')
  }
  static async updateRecord(req, res) {
    super.updateRecord(req, res, Publication)
  }
  static async deleteRecord(req, res) {
    super.deleteRecord(req, res, Publication)
  }
  static async bulkUpdateRecords(req, res) {
    super.bulkUpdateRecords(req, res, Publication)
  }
}
