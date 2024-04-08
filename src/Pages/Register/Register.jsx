import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, logOut } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                logOut();
                notify();
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            })
            .catch((err) => {
                console.log("Register failed", err.message);
            });
    };

    // ! Notification toast
    const notify = () => toast.success("SignUp successful");

    // ! Validate password

    const validatePassword = (value) => {
        if (value.length < 8) {
            return "Password must be at least 8 characters long";
        }
        if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lower letter";
        }
        if (!/[!@#$%^&*]/.test(value)) {
            return "Password must contain at least one special character";
        }
        return true;
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                {...register("name", { required: true })}
                                className="input input-bordered"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    Name filed is required
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    Email filed is required
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                {...register("password", {
                                    required: true,
                                    validate: validatePassword,
                                })}
                                className="input input-bordered"
                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>
                            Already have an account. Please
                            <Link to="/login"> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;
