
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../api/utils/index";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { useForm } from "react-hook-form";
import registerLottie from "./314qaRHAbu.json";
import Lottie from "lottie-react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useMutation } from '@tanstack/react-query'


const Register = () => {
  const axiosCommon = useAxiosCommon()
  const navigate = useNavigate();
  const {
    setUser,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const { mutateAsync } = useMutation({
    mutationFn: async userData => {
      const { data } = await axiosCommon.post(`/user`, userData, )
      return data
    },
    onSuccess: () => {
      toast.success('user Added Successfully!')
      navigate('/')
      setLoading(false)
    },
    onError: (err) => {
      setLoading(false)
      console.log(err)
      toast.error('Something went wrong!')
    } 
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { fullName, photoURL, email, password, role } = data;
    console.log(role);

    const userData= {
      ...data
    }

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(photoURL[0]);
      console.log(image_url);

      //2. User Registration
      const result = await createUser(email, password);
      console.log(result);

      // 3. Save username and photo in firebase
      await updateUserProfile(fullName, image_url);
      navigate("/");
      toast.success("Registered Successfully");

        //   Post request to server
        await mutateAsync(userData)
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // // handle google signin
  // const handleGoogleSignIn = async () => {
  //   // const userData= {
  //   //   ...data
  //   // }

  //   try {
  //     await signInWithGoogle();

  //     navigate("/");
  //     toast.success("Signup Successful");
  //     //   Post request to server
  //     // await mutateAsync(userData)
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

    // google login
    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        const {displayName, email, photoURL} = result.user;
        const userData = {displayName, email, photoURL, role:"user"}
        // console.log(userData);
        toast.success("Google Login Successfully with added userData");
        navigate("/");
        //   Post request to server
        axiosCommon.post(`/user`, userData)
      });
    };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerLottie} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Create an account
              </h2>
              <p className="text-sm text-center dark:text-gray-600">
                Already have an account?
                <Link
                  to="/login"
                  className="focus:underline hover:underline text-[#2fa325]"
                >
                  Sign in here
                </Link>
              </p>
              <div onClick={handleGoogleSignIn} className="my-6 space-y-4">
                <button
                  disabled={loading}
                  aria-label="Login with Google"
                  className="text-[#2fa325] hover:bg-green-50 flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current hover:animate-spin"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate=""
                action=""
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm">Your Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                      <span className="text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <select
                      name="role"
                      {...register("role", { required: true })}
                      className="select select-success w-full"
                    >
                      <option disabled selected>
                        Select Role
                      </option>
                      <option value="User">User</option>
                      <option value="Seller">Seller</option>
                    </select>
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
                  <div className="space-y-2">
                    <label className="block text-sm">Email address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm">Password</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="*****"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full rounded-md btn bg-[#2fa325] hover:text-[#2fa325] hover:bg-green-100 text-lg text-white font-medium px-2 md:px-4"
                  >
                    {loading ? (
                      <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

// const Register = () => {
//   // const AxiosCommon = useAxiosCommon();
//   const navigate = useNavigate();
//   const {
//     createUser,
//     signInWithGoogle,
//     updateUserProfile,
//     loading,
//     setLoading,
//   } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const fullName = form.fullName.value;
//     const user = form.user.value;
//     const seller = form.seller.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photoURL = form.photoURL.files[0];
//     console.log(user,seller)

//     try {
//       setLoading(true);
//       // 1. Upload image and get image url
//       const image_url = await imageUpload(photoURL);
//       //2. User Registration

//       const result = await createUser(email, password);
//       console.log(result);

//       // 3. Save username and photo in firebase
//       await updateUserProfile(fullName, image_url);
//       navigate("/");
//       toast.success("Signup Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message);
//     }
//   };

//   // handle google signin
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();

//       navigate("/");
//       toast.success("Google Signup Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
//         <div className="mb-8 text-center">
//           <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
//           <p className="text-sm text-gray-400">Welcome to MediSnap</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="Full Name" className="block mb-2 text-sm">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 id="fullName"
//                 placeholder="Enter Your Full Name Here"
//                 className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
//                 data-temp-mail-org="0"
//               />
//             </div>
//             {/* Role (User or Seller) */}
// <div>
//   <select id='role' className="select select-success w-full max-w-xs">
//     <option disabled selected>
//       Select Role
//     </option>
//     <option name ='user'>User</option>
//     <option name ='seller' >Seller</option>
//   </select>
// </div>
//             <div>
//               <label htmlFor="photoURL" className="block mb-2 text-sm">
//                 Select Image:
//               </label>
//               <input
//                 required
//                 type="file"
//                 id="photoURL"
//                 name="photoURL"
//                 accept="photoURL/*"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 placeholder="Enter Your Email Here"
//                 className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
//                 data-temp-mail-org="0"
//               />
//             </div>
//             <div>
//               <div className="flex justify-between">
//                 <label htmlFor="password" className="text-sm mb-2">
//                   Password
//                 </label>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 autoComplete="new-password"
//                 id="password"
//                 required
//                 placeholder="*******"
//                 className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               disabled={loading}
//               type="submit"
//               className="bg-rose-500 w-full rounded-md py-3 text-white"
//             >
//               {loading ? (
//                 <TbFidgetSpinner className="animate-spin m-auto" />
//               ) : (
//                 "Continue"
//               )}
//             </button>
//           </div>
//         </form>
//         <div className="flex items-center pt-4 space-x-1">
//           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//           <p className="px-3 text-sm dark:text-gray-400">
//             Signup with social accounts
//           </p>
//           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//         </div>
//         <button
//           disabled={loading}
//           onClick={handleGoogleSignIn}
//           className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
//         >
//           <FcGoogle size={32} />

//           <p>Continue with Google</p>
//         </button>
//         <p className="px-6 text-sm text-center text-gray-400">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="hover:underline hover:text-rose-500 text-gray-600"
//           >
//             Login
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
