import { Fragment, useState } from "react";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";

const AskForAdvertisement = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { email, displayName } = user;
     // For Modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

      // Post Request for medicine
      const { mutateAsync } = useMutation({
        mutationFn: async (advertisementData) => {
          const { data } = await axiosSecure.post(`/advertisement`, advertisementData);
          return data;
        },
        onSuccess: () => {
          toast.success("Medicine Added Successfully!");
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
    const {
        medicineName ,
        description,
      photoURL,
    } = data;
    console.log(data);

    // 1. Upload image and get image url
    const image_url = await imageUpload(photoURL[0]);
    console.log(image_url);

    const advertisementData = {
      sellerEmail: email,
      sellerName: displayName,
      medicineName ,
      description,
      photoURL: image_url,
    };
    console.log(advertisementData);

    try {
      // Post request to server
      await mutateAsync(advertisementData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className="hero min-h-1.5" style={{backgroundImage: 'url(https://i.ibb.co/PGgjyV5/medi.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">NEW ONE</h1>
      <p className="mb-5">You can advertise it!</p>
      <button
                type="button"
                onClick={openModal}
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-[#2fa325] hover:bg-green-300 hover:text-black text-white font-semibold"
              >
                Add Advertise
              </button>
    </div>
  </div>
</div>

  {/* modal body */}
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
            <div className="fixed inset-0 bg-black/25" />
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
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Medicine Info.
                  </DialogTitle>
                  {/* form body */}
                  <div className="mt-2">
                    {/* <MedicineAddModalForm /> */}
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate=""
                      action=""
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Item Name</label> */}
                          <input
                            type="text"
                            name="medicineName"
                            placeholder="Medicine Name"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("medicineName", { required: true })}
                          />
                          {errors.medicineName && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Short Description</label> */}
                          <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("description", {
                              required: true,
                            })}
                          />
                          {errors.description && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm">Image</label>
                          <input
                            type="file"
                            name="photoURL"
                            placeholder="Upload Image"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("photoURL", { required: true })}
                          />
                          {errors.photoURL && (
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
                            onClick={closeModal}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
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

export default AskForAdvertisement;