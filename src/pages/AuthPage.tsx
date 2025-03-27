import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {isLogin ? <Login switchMode={() => setIsLogin(false)} /> : <Signup switchMode={() => setIsLogin(true)} />}
      </div>
    </div>
  );
}
