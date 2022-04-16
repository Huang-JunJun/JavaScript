import ExportJsonExcel from 'js-export-excel';

export default function downloadExcel () {
    const datas = this.state.data ? this.state.data : '';//表格数据
      let option={};
      let dataTable = [];
      if (datas) {
        for (const data in datas) {
          if(data){
            let obj = {
                orderId: data.orderId,
            }
            dataTable.push(obj);
          }
        }
      }
      option.fileName = '售后订单信息列表'
      option.datas=[
        {
          sheetData:dataTable,
          sheetName:'sheet',
          sheetFilter:[orderId],
          sheetHeader:['售后单编号'],
        //   sheetHeader:['售后单编号','关联订单号','售后发起方','售后类型','售后商品','售后金额','售后时间','状态','操作'],
        }
      ];
    
      let toExcel = new ExportJsonExcel(option); 
      toExcel.saveExcel();        
}