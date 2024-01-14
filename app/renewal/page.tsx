// import { BillDesk } from "@/components";
import dynamic from "next/dynamic";
import { fetchPaymentList, fetchDeviceList } from "@/api";

const BillDesk = dynamic(() => import("@/components/renewal/BillDesk"), {
  ssr: true,
  loading: () => null,
});

const Reneal = async () => {
  const resultPaymentList = await fetchPaymentList(
    "241e87cbaa4e47fb84741231b3f1d6df"
  );
  const resultDeviceList = await fetchDeviceList(
    "f4b91506181d499faeae69c42f55421e"
  );

  return (
    <div className="flex w-full h-screen items-center justify-center text-sm">
      <div
        className="flex flex-col sm:w-[450px] w-[354px] h-[500px] px-8 py-7 items-center border border-neutral-300 rounded-lg mt-[-150px]"
        // style={{ height: "500px", width: "450px" }}
      >
        <div className="text-sm sm:text-xl">자급제 휴대폰 계산기</div>
        <BillDesk
          deviceList={resultDeviceList}
          paymentList={resultPaymentList}
        />
      </div>
    </div>
  );
};

export default Reneal;
