import { BillService } from '@/services/bill.service';
import { NextFunction } from 'express';
import { CreateBillOfUserRequestBody } from './typings/bill.controller';

export default class BillController {
  private billService = new BillService();
  public createBillOfUser = async (req: any, res: any, next: NextFunction) => {
    try {
      const { title, amount, expense_date }: CreateBillOfUserRequestBody = req.body;
      const bill = await this.billService.createBillOfUserInService({ title, amount, expense_date });
      console.log(bill, 'created bill');
      res.sendformat({ message: ' bill sucessfully created' });
    } catch (error) {
      res.sendformat({ message: 'error' });
      next(error);
    }
  };
  public getAllBillsOfUser = async (req: any, res: any, next: NextFunction) => {
    try {
      const bills = await this.billService.getBillOfUserInService();
      console.log(bills, 'bills');
      res.send({ allbills: bills });
    } catch (error) {
      res.sendformat({ message: 'error in getting all  bills' });
      next(error);
    }
  };
  public deleteBillOfUser = async (req: any, res: any, next: NextFunction) => {
    try {
      const id = req.params.id;
      console.log('id of bill to be delteed', id);
      await this.billService.deleteBill({ id: _id });
      res.sendformat({ message: 'succesfully deleted' });
    } catch (error) {
      next(error);
    }
  };
}
