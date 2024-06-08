import PropTypes from 'prop-types'
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { imageUpload } from '../../api/utils';
import { useForm } from 'react-hook-form';


const UpdateCategoryModal = ({ closeUpdateModal, refetch, isOpen, category}) => {
    const { 
        categoryName,
        medicineName,
        description,
        price } = category;
    const axiosSecure = useAxiosSecure();
     //   Update
  const { mutateAsync } = useMutation({
    mutationFn: async (updatCategoryData) => {
      const { data } = await axiosSecure.put(`category/${category?._id}`, updatCategoryData);
      return data;
    },
    onSuccess: () => {
      refetch()
      toast.success("Medicine Category Updated Successfully!");
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
    const { categoryName, medicineName, description, price, photoURL } = data;
    console.log(data);
    // 1. Upload image and get image url
    const image_url = await imageUpload(photoURL[0]);
    console.log(image_url);

    const updateCategoryData = {
      categoryName,
      medicineName,
      description,
      price,
      photoURL: image_url,
    };
    console.log(updateCategoryData);

    try {
      // Post request to server
      await mutateAsync(updateCategoryData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

    return (
        <>
         <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={closeUpdateModal}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
                 {/* modal content */}
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-green-100 p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update Room Info
                </DialogTitle>

                    {/* <UpdateCategoryModalForm /> */}
                <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate=""
                      action=""
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <div>
                          <select
                            name="categoryName"
                            defaultValue={categoryName}
                            {...register("categoryName", { required: true })}
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
                        <div className="space-y-2">
                          {/* <label className="block text-sm">Item Name</label> */}
                          <input
                            type="text"
                            name="medicineName"
                            placeholder="Medicine Name"
                            defaultValue={medicineName}
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
                            defaultValue={description}
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
                          {/* <label className="block text-sm">Short Description</label> */}
                          <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            defaultValue={price}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("price", {
                              required: true,
                            })}
                          />
                          {errors.price && (
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
                            onClick={closeUpdateModal}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                <hr className='mt-8 ' />
                <div className='mt-2 '>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeUpdateModal}
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

UpdateCategoryModal.propTypes = {
    category: PropTypes.object,
    refetch: PropTypes.func,
    handleDelete: PropTypes.func,
    isOpen: PropTypes.bool,
    closeUpdateModal: PropTypes.func,
  }

export default UpdateCategoryModal;