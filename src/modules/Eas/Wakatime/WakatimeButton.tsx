import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Toggle from '../../../components/Toggle';

export default function WakatimeButton() {
  const { data: session } = useSession();
  // TODO: load initial state from chain
  const [wakatimeHandle, setWakatimeHandle] = useState(null);

  return (
    <>
      <h2>Tell us your wakatime handle!</h2>
      <input
        type='text'
        onChange={e => {
          setWakatimeHandle(e.target.value);
        }}
      />
    </>
  );
}
