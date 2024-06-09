import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

const ShopMedicineDetailsModal = ({ isOpen, closeModal, medicineDetails }) => {
   
    
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    View medicine Details
                  </DialogTitle>

                  {/* <medicine details Modal Form /> */}
                  <div className="max-w-xs p-6 rounded-md shadow-md mx-auto bg-green-50 ">
                    <img
                      src={medicineDetails?.photoURL}
                      alt=""
                      className="object-cover object-center w-full rounded-md h-32"
                    />
                    <div className="mt-6 mb-2">
                      <span className="  tracking-wide ">
                      <span className=" text-sm font-semibold">Category Name:</span> {medicineDetails?.category} - {medicineDetails?.itemMassUnit} _ ${medicineDetails?.perUnitPrice}
                      </span>
                      <br />
                      <span className="  tracking-wide ">
                      <span className=" text-sm font-semibold">Genaric Name:</span> {medicineDetails?.genericName}
                      </span>
                      <br />
                      <span className="  tracking-wide ">
                      <span className=" text-sm font-semibold">Company Name:</span> {medicineDetails?.company}
                      </span>
                      <h2 className="tracking-wide">
                        <span className="text-lg font-semibold">Medicine:</span> {medicineDetails?.itemName}
                      </h2>
                    </div>
                    <p className="">
                      {medicineDetails?.shortDescription}
                    </p>
                  </div>

                  <hr className="mt-8 " />
                  <div className="mt-2 ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
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

ShopMedicineDetailsModal.propTypes = {
 isOpen: PropTypes.bool,
 closeModal: PropTypes.func,
 medicineDetails: PropTypes.object,
  }

export default ShopMedicineDetailsModal;
