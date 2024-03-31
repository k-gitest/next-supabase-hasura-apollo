'use client';

import { supabase } from '../constants';

const AppHeader = ({ isSignedIn }: { isSignedIn: boolean }) => {
  return (
    <header className="bg-black px-4 shadow shadow-green-400">
      <div className="mx-auto flex h-16 max-w-4xl items-center">
        <h1 className="grow text-lg text-white">GraphQL</h1>
        {isSignedIn && (
          <button className="rounded border border-white px-2 py-1 text-white" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default AppHeader