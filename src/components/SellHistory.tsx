import { useSaleHGetQuery } from "../redux/features/saleHistory/saleHApi";

type TsellH = {
    _id: string,
    buyerNaame: string,
    quantity: number,
    dateOfSale: string
}

const SellHistory = () => {
  const { data: TShoes } = useSaleHGetQuery("");
  // console.log(TShoes);
  return (
    <div className="grid grid-cols-3">
      {TShoes?.data?.map((m :TsellH ,i: number) => (
        <div key={m._id} className="border-2 m-2 p-2 rounded-lg  mx-auto ">
            <p>{i+1}</p> .
          <h2>{m.buyerNaame}</h2>
          <h2>{m.dateOfSale}</h2>
          <h2>{m.quantity}</h2>
        </div>
      ))}
    </div>
  );
};

export default SellHistory;
