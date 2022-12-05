import fetchAPI from "../Config/API";

// Services for history controller
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;

// Get All history data
export const getHistoryService = async (userId) => {
  const url = `${ROOT_API_PAYLENS}/history/${userId}`;
  const response = await fetchAPI({ url, method: "GET" });
  return response;
};

export const getListTransactionHistory = async (userId) => {
  const history = (await getHistoryService(userId))?.data
  const listTransaction = history.data.map(data=>{
    if(data?.topUp){
      return {
        picture: "/avatar.png",
        name: data.topUp.userId.username,
        transaction: "Top Up",
        nominal:  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.topUp.topAmount),
        date: new Date(data.topUp.createdAt).toLocaleString('id-ID'),
        label: "Top Up"
      }
    }else if(data?.transfer){
      const {transfer} = data;
      const isIncomingTransfer = transfer.userReceiver.id == userId

      if(isIncomingTransfer){
        return {
          picture: "/avatar.png",
          name: transfer.user.username,
          transaction: "Transfer ( Income )",
          nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transfer.amount),
          date: new Date(transfer.createdAt).toLocaleString('id-ID'),
          label: `Transfer from ${transfer.user.username}`
        }
      }else{
        return {
          picture: "/avatar.png",
          name: transfer.userReceiver.username,
          transaction: "Transfer ( Expense )",
          nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(- transfer.amount),
          date: new Date(transfer.createdAt).toLocaleString('id-ID'),
          label: `Transfer to ${transfer.userReceiver.username}`
        }
      }
    } 
    return data
  })

  return listTransaction
}

export const getListHistoryForChart = async (userId) => {
  const history = (await getHistoryService(userId))?.data

  const listData = history.data.map(data=>{
    if(data?.topUp){
      return {
        id: data.topUp.id,
        amount: data.topUp.topAmount,
        label: new Date(data.topUp.createdAt).toLocaleDateString('id-ID'),
        date: new Date(data.topUp.createdAt).toLocaleString('id-ID'),
      }
    }else if(data?.transfer){
      const { transfer } = data
      const isIncomingTransfer = transfer.userReceiver.id == userId

      if(isIncomingTransfer){
        return {
          id: transfer.id,
          amount: transfer.amount,
          label: new Date(transfer.createdAt).toLocaleDateString('id-ID'),
          date: new Date(transfer.createdAt).toLocaleString('id-ID')
        }
      }else{
        return {
          id: transfer.id,
          amount: - (transfer.amount),
          label: new Date(transfer.createdAt).toLocaleDateString('id-ID'),
          label: new Date(transfer.createdAt).toLocaleString('id-ID'),
        }
      }
    }
    else return data

  })

  return listData


}

// // Create book
// export const createBookService = async (data) => {
//   const url = `${ROOT_API_LIBRARY}/books`;
//   const response = await fetchAPI({ url, method: "POST", data });
//   return response;
// };