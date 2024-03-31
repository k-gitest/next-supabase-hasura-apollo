'use client';

import React from 'react';
import { supabase } from '../constants';

const LoginForm = () => {
  const sendMagicLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = Object.fromEntries(new FormData(event.currentTarget));
    if (typeof email !== 'string') return;

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      alert('Check your email inbox');
    }
  };

  return (
    <form className="flex h-full max-w-md flex-col justify-center space-y-2 px-4" onSubmit={sendMagicLink}>
      <input
        className="rounded border border-green-300 bg-transparent p-2 text-white"
        type="email"
        name="email"
        placeholder="Email"
      />
      <button type="submit" className="rounded bg-green-400 px-4 py-1 text-lg text-black">
        Send Magic Link
      </button>
    </form>
  );
};

export default LoginForm;
