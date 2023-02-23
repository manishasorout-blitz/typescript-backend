import BillModel from "@/models/bill.model";

export default class BillDao {
  private billModel = BillModel;
  public createBill = async (title: string, amount: number, expense_date: Date) => {
    return await this.billModel.create({ title, amount, expense_date });
  };
  public getAllBills = async () => {
    return await this.billModel.find();
  };
  public deleteBill = async (id: number | string) => {
    return await this.billModel.updateOne(
      { id },
      {
        $set: {
          is_active: false,
        },
      },
    );
  };
}
