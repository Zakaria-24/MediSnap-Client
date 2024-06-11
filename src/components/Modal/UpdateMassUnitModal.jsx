import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const UpdateMassUnitModal = ({ isMassOpen, closeMassModal, cart, refetch }) => {
    const axiosSecure = useAxiosSecure();
    //   Update
    const { mutateAsync } = useMutation({
        mutationKey: ["massUnit", cart?._id ],
      mutationFn: async (updateMassUnitQuantityData) => {
        const { data } = await axiosSecure.patch(
          `massUnit/${cart?._id}`,
          updateMassUnitQuantityData
        );
        return data;
      },
      onSuccess: () => {
          toast.success("Mass Quantity Updated Successfully!");
          refetch();
      },
      onError: (err) => {
        console.log(err);
        toast.error("Something went wrong!");
      },
    });
  
    // Hook Form
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
  
      const updateMassUnitQuantityData = {
        ...data
      };
      console.log(updateMassUnitQuantityData);
  
      try {
        // Post request to server
        await mutateAsync(updateMassUnitQuantityData);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };
    
  return (
    <>
      <Transition appear show={isMassOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeMassModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* modal content */}
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-green-100 p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Update Mass Quantity
                  </DialogTitle>

                  {/* <Update Category Modal Form /> */}
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate=""
                      action=""
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Short Description</label> */}
                          <input
                            type="number"
                            name="massUnit"
                            placeholder="Change Quantity(Mass unit)"
                            defaultValue={cart?.massUnit}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("massUnit", {
                              required: true,
                            })}
                          />
                          {errors.massUnit && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        {/* modal close / submit btn */}
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="bg-[#2fa325] hover:bg-green-300 hover:text-black text-white font-semibold  inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeMassModal}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <hr className="mt-8 " />
                  <div className="mt-2 ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeMassModal}
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

UpdateMassUnitModal.propTypes = {
    cart: PropTypes.object,
    isMassOpen: PropTypes.bool,
    closeMassModal: PropTypes.func,
    refetch: PropTypes.func,
  };

export default UpdateMassUnitModal;
