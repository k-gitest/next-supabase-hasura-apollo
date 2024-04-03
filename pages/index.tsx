'use client';

import { Session } from '@supabase/supabase-js';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { supabase } from '../constants';
import LoginForm from '../components/LoginForm';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
//import TodoList from '../components/TodoList';
import TodoList from '../components/Hasura';

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getInitialSession = async () => {
      const initialSession = (await supabase.auth.getSession())?.data.session;
      setSession(initialSession);
    };

    getInitialSession();

    const authListener = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
    });

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex h-screen flex-col bg-black">
      <Head>
        <title>GraphQL</title>
      </Head>

      <AppHeader isSignedIn={!!session} />

      <main className="mx-auto min-h-0 max-w-4xl grow text-white">
        {session ? <TodoList userId={session.user.id} /> : <LoginForm />}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
