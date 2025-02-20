export const sendOTP = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      return data; // { success: true/false, error: "message" }
    } catch (error) {
      throw new Error("Something went wrong, please try again.");
    }
  };

  export const verifyOTP = async (email, otp) => {
    try {
      const response = await fetch("http://localhost:3000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data; // { success: true/false, message/error }
    } catch (error) {
      console.error("Verification error:", error.message);
      throw new Error("Something went wrong, please try again.");
    }
  };
  
