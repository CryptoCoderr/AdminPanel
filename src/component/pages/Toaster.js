import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const notify = (msg) => toast.success(msg);
export const errors = (msg) => toast.error(msg);

function Toasters() {
  return (
    <div>
      <Toaster />
    </div>
  );
}

export default Toasters;
