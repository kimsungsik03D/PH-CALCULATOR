import { ResultType } from "@/types";

const ResultDetail = ({ data }: { data: ResultType }) => {
  const totalPrice = (): number => {
    const paymentDiscountPrice =
      Number(data.payment.late) * 0.01 * Number(data.device.price);
    const totalDiscount =
      Number(paymentDiscountPrice) + Number(data.sale.salePrice);
    const totalPrice = Number(data.device.price) - Number(totalDiscount);

    return totalPrice / 10000;
  };

  return (
    <div
      className={`absolute transition-all top-[196px] z-10 bg-white w-full border shadow-sm rounded-lg p-3 h-auto overflow-hidden color-inherit subpixel-antialiased rounded-b-large text-small`}
    >
      <div className="flex items-center  justify-between">
        <b>{data.device.name}</b>
        <p className="text-default-500">
          {totalPrice()}
          만원
        </p>
      </div>
      {data.payment.name && (
        <div className="flex items-center  justify-between">
          <b>{data.payment.name}</b>
          <p className="text-default-500">
            -
            {Math.floor(
              Number(data.payment.late ?? 0) * 0.01 * data.device.price
            )}
            원
          </p>
        </div>
      )}
      {data.sale.saleInfo && (
        <div className="flex items-center  justify-between">
          <b>{data.sale.saleInfo}</b>
          <p className="text-default-500">-{data.sale.salePrice}원</p>
        </div>
      )}
    </div>
  );
};

export default ResultDetail;
