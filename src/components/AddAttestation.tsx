import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { createAttestation, createTestAttestation } from './request';

import StarterKitContext from '../context/starterKit';
import GithubLoginButton from '../modules/Eas/Github/componens/LoginButton';
import WakatimeButton from '../modules/Eas/Github/componens/WakatimeButton';

import { useSession } from 'next-auth/react';
interface Props {
  props: { sharedState: Dispatch<SetStateAction<string | null>>; type: string };
}

function AddAttestation({ props }: Props) {
  const { user } = useContext(StarterKitContext);
  const { data } = useSession();

  if (!user) {
    return null;
  }

  return (
    <>
      {props.type === 'wakatime' && (
        <>
          <h2>Tell us your wakatime handle!</h2>
          <input
            type='text'
            onChange={e => {
              props.sharedState(e.target.value);
            }}
          />
        </>
      )}

      {props.type === 'github' && <GithubLoginButton />}
      {props.type === 'github' && data && (
        <>
          <hr />
          <div className='flex align-middle justify-center align-middle'></div>
        </>
      )}
    </>
  );
}

export default AddAttestation;
