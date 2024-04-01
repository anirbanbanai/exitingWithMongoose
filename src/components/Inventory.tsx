import { Button } from "@material-tailwind/react";
import { useShoesDeleteMutation } from "../redux/features/shoes/shoesApi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FcDeleteDatabase } from "react-icons/fc";
import { Modal } from "./Modal";
// import { useAddSaleHMutation } from "../redux/features/saleHistory/saleHApi";
// import { useAppDispatch } from "../redux/hooks";
import { SellModal } from "./SellModal";

type TShoes = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  model: string;
  style: string;
  size: string;
  color: string;
  releaseDate: string;
  role: string;
  quantity: number
};

type TInitial = {
  m: TShoes;
};

type subData = {
  acknowledged: boolean;
  deletedCount: number;
};

type DTD = {
  data: subData;
  message: string;
  statusCode: number;
  success: boolean;
};

type DDD = {
  data: DTD;
};

const Inventory = (m: TInitial) => {
  
  const [deleteShoes] = useShoesDeleteMutation();
  // const dispatch = useAppDispatch()
  // const [addSaleH] = useAddSaleHMutation();
  const { _id, role, name, price, brand, model, color, size, quantity } =
    m.m as TShoes;

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const da = await deleteShoes({ _id: id });
        console.log(da);
        if ((da as DDD).data.data.deletedCount === 1) {
          toast.success((da as DDD).data.message);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1503);
        }
      }
    });
  };

  return (
    <>
      <div className="mt-6 border-2  m-2 rounded-xl  p-5">
        <div className="grid grid-cols-2 gap-2">
          <p>
            Name: <b className="font-semibold">{name}</b>
          </p>
          <p>
            Brand: <b className="font-semibold">{brand}</b>
          </p>
          <p>
            Color: <b className="font-semibold">{color}</b>
          </p>
          <p>
            Model: <b className="font-semibold">{model}</b>
          </p>
          <p>
            Price: <b className="font-semibold">{price}</b>
          </p>
          <p>
            Size: <b className="font-semibold">{size}</b>
          </p>
          <p>
            Role: <b className="font-semibold">{role}</b>
          </p>
          <p>
            Quantity: <b className="font-semibold">{quantity}</b>
          </p>
        </div>
        <div className="mt-3 w-full mx-auto flex justify-between gap-1 mb-0 pb-0">
          <Button
            type="submit"
            onClick={() => handleDelete(_id)}
            placeholder={""}
            variant="gradient"
            size="sm"
            color="red"
          >
            <FcDeleteDatabase className="text-2xl" />
          </Button>

          <Modal  main={m.m}/>
          <SellModal  main={m.m}/>
        </div>
      </div>
    </>
  );
};

export default Inventory;
