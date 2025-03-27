import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export function Login({ switchMode }: { switchMode: () => void }) {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false); 

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await signIn(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Incorrect email") {
          setError("email", { message: "Incorrect email" });
        } else if (error.message === "Incorrect password") {
          setError("password", { message: "Incorrect password" });
        } else {
          setError("root", { message: "User does not exist. Please sign up." });
        }
      }
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}

        {/* Password Input with Toggle */}
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded pr-10"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500">Please enter a correct password</p>
        )}

        {errors.root && <p className="text-red-500">{errors.root?.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Processing..." : "Login"}
        </button>
      </form>

      <button className="text-blue-600 hover:underline" onClick={switchMode}>
        Need an account? Sign Up
      </button>
    </div>
  );
}
