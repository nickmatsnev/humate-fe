import { signOut } from "next-auth/react";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: `localhost/auth/login`,
      });
    } catch (error: any) {
      console.log("Logout failed:", error.message);
    }
  };

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Logout;
