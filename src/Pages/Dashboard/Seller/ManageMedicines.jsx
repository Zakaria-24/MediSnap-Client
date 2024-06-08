import { useState } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";

import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";

import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import MedicinesDataRows from "../../../components/Dashboard/TableRows/MedicinesDataRows";

const ManageMedicines = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { email, displayName } = user;
  // console.log(email, displayName)

  // For Modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  
  // Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Post Request for medicine
  const { mutateAsync } = useMutation({
    mutationFn: async (medicineData) => {
      const { data } = await axiosSecure.post(`/medicine`, medicineData);
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

  const onSubmit = async (data) => {
    const {
      itemName,
      genericName,
      shortDescription,
      category,
      company,
      itemMassUnit,
      perUnitPrice,
      discountPercentage,
      photoURL,
    } = data;
    // console.log(data);
      // 1. Upload image and get image url
      const image_url = await imageUpload(photoURL[0]);
      // console.log(image_url);

    const medicineData = {
      addederEmail: email,
      addederName: displayName,
      itemName,
      genericName,
      shortDescription,
      category,
      company,
      itemMassUnit,
      perUnitPrice,
      discountPercentage,
      photoURL: image_url,
    };
    // console.log(medicineData);

    try {
      // Post request to server
      await mutateAsync(medicineData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // Get request in Medicines
  //   Fetch Medicines Data
  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/medicines/${user?.email}`);
      // console.log(data);

      return data;
    },
  });

  //   delete
  // const { mutateAsync: medicines } = useMutation({
  //   mutationFn: async id => {
  //     const { data } = await axiosSecure.delete(`/room/${id}`)
  //     return data
  //   },
  //   onSuccess: data => {
  //     console.log(data)
  //     refetch()
  //     toast.success('Successfully deleted.')
  //   },
  // })

  // //  Handle Delete
  // const handleDelete = async id => {
  //   console.log(id)
  //   try {
  //     await medicines(id)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {/* Add medicine btn */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="p-6 py-12 bg-green-100">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                You Can Add Medicine
              </h2>
              <button
                type="button"
                onClick={openModal}
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-[#2fa325] hover:bg-green-300 hover:text-black text-white font-semibold"
              >
                Add Medicine
              </button>
            </div>
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
                            name="itemName"
                            placeholder="Item Name"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("itemName", { required: true })}
                          />
                          {errors.itemName && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Generic Name</label> */}
                          <input
                            type="text"
                            name="genericName"
                            placeholder="Generic Name"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("genericName", { required: true })}
                          />
                          {errors.genericName && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Short Description</label> */}
                          <input
                            type="text"
                            name="shortDescription"
                            placeholder="Short Description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("shortDescription", {
                              required: true,
                            })}
                          />
                          {errors.shortDescription && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div>
                          <select
                            name="category"
                            {...register("category", { required: true })}
                            className="select select-success w-full"
                          >
                            <option disabled selected>
                              Select Category
                            </option>
                            <option value="Tablet">Tablet</option>
                            <option value="Syrup">Syrup</option>
                            <option value="Capsule">Capsule</option>
                            <option value="Injection">Injection</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="company"
                            {...register("company", { required: true })}
                            className="select select-success w-full"
                          >
                            <option disabled selected>
                              Select Company
                            </option>
                            <option value="Beximco">Beximco</option>
                            <option value="Drug">Drug</option>
                            <option value="Bcon">Bcon</option>
                            <option value="Square">Square</option>
                            <option value="Skf">Skf</option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="itemMassUnit"
                            {...register("itemMassUnit", { required: true })}
                            className="select select-success w-full "
                          >
                            <option disabled selected>
                              Select Mass Unit
                            </option>
                            <option value="Mg">Mg</option>
                            <option value="ML">ML</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          {/* <label className="block text-sm">Per Unit Price</label> */}
                          <input
                            type="number"
                            name="perUnitPrice"
                            placeholder="Per Unit Price"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("perUnitPrice", { required: true })}
                          />
                          {errors.perUnitPrice && (
                            <span className="text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Per Unit Price</label> */}
                          <input
                            type="number"
                            name="discountPercentage"
                            placeholder="Discount Percentage"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("discountPercentage", {
                              required: true,
                            })}
                          />
                          {errors.discountPercentage && (
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

                  {/* modal close / submit btn */}
                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="bg-[#2fa325] hover:bg-green-300 hover:text-black text-white font-semibold  inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* show medicines info  */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Medicine Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <h1>{medicines?.length}</h1> */}
                  {/* medicines row data */}
                  {medicines.map((medicine) => (
                    <MedicinesDataRows
                      key={medicine._id}
                      medicine={medicine}
                      // handleDelete={handleDelete}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMedicines;
