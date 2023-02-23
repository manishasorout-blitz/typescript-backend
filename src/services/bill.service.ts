import moment from 'moment';
import BillDao from '@/dao/bill.dao';

export class BillService {
  private billDao = new BillDao();

  public createBillOfUserInService = async ({ title, amount, expense_date }: { title: string; amount: number; expense_date: string }) => {
    const bill = await this.billDao.createBill(title, amount, moment(expense_date).toDate());
    return bill;
  };
  public getBillOfUserInService = async () => {
    const bills = await this.billDao.getAllBills();
    return bills;
  };
  public deleteBill = async (id: number | string) => {
    const delteduser = await this.billDao.deleteBill({ id });
    console.log(delteduser, 'inside the bill services');
  };
}
