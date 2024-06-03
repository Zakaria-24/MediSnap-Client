import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottie from "./Animation - 1717325610733.json";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle, signIn, loading, setLoading } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    console.log(email, password);

    try {
      setLoading(true);

      //2. User Login
      const result = await signIn(email, password);
      console.log(result);
      navigate(location?.state || "/");
      toast.success("Login Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      navigate(location?.state || "/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={loginLottie} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Login to your account
              </h2>
              <p className="text-sm text-center dark:text-gray-600">
                Dont have an account?
                <Link
                  to="/register"
                  className="focus:underline hover:underline text-[#2fa325]"
                >
                  Sign up here
                </Link>
              </p>
              <div className="my-6 space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  aria-label="Login with Google"
                  type="button"
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
                // onSubmit={handleSubmit}
                noValidate=""
                action=""
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="leroy@jenkins.com"
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
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
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
                      "Sign in"
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

export default Login;