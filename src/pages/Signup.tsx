import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

// Validation Schema
const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .regex(/[A-Z]/, "Must have an uppercase letter")
    .regex(/[a-z]/, "Must have a lowercase letter")
    .regex(/[0-9]/, "Must have a number")
    .regex(/[\W_]/, "Must have a special character"),
});

export function Signup({ switchMode }: { switchMode: () => void }) {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await signUp(data.email, data.password);
      navigate("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("root", { message: "Signup failed. Try again." });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password Input with Show/Hide Toggle */}
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
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {errors.root && <p className="text-red-500">{errors.root.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          {isSubmitting ? "Processing..." : "Sign Up"}
        </button>
      </form>

      <button className="text-blue-600 hover:underline" onClick={switchMode}>
        Already have an account? Login
      </button>
    </div>
  );
}
